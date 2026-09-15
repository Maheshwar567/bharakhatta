// Mobile Number Authentication & Player Lifetime History Manager
// Persists profile, lifetime stats, coin balance, and complete match history per 10-digit mobile number

import { wallet } from "./wallet.js";

const CURRENT_USER_KEY = "bk_current_user_mobile";
const ALL_USERS_KEY = "bk_all_registered_mobiles";

const storage = {
  getItem(k) {
    try {
      if (typeof localStorage !== "undefined") return localStorage.getItem(k);
    } catch (_) {}
    return null;
  },
  setItem(k, v) {
    try {
      if (typeof localStorage !== "undefined") localStorage.setItem(k, v);
    } catch (_) {}
  },
  removeItem(k) {
    try {
      if (typeof localStorage !== "undefined") localStorage.removeItem(k);
    } catch (_) {}
  }
};

export class UserManager {
  constructor() {
    this.currentUser = null;
    this.init();
  }

  init() {
    try {
      const activeMobile = storage.getItem(CURRENT_USER_KEY);
      if (activeMobile) {
        this.currentUser = this.loadUserProfile(activeMobile);
        if (this.currentUser) {
          // Sync wallet balance to user's saved balance
          wallet.balance = this.currentUser.walletBalance ?? 1000;
          wallet.saveBalance();
        }
      }
    } catch (e) {
      console.error("Failed to load active user:", e);
    }
  }

  cleanMobile(mobile) {
    if (!mobile) return "";
    return mobile.toString().replace(/[^0-9]/g, "").slice(-10);
  }

  isRegistered(mobile) {
    const cleaned = this.cleanMobile(mobile);
    if (!cleaned || cleaned.length !== 10) return false;
    return storage.getItem(`bk_user_${cleaned}`) !== null;
  }

  loadUserProfile(mobile) {
    const cleaned = this.cleanMobile(mobile);
    if (!cleaned) return null;
    try {
      const raw = storage.getItem(`bk_user_${cleaned}`);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error("Failed to parse user profile:", e);
    }
    return null;
  }

  saveUserProfile(profile) {
    if (!profile || !profile.mobile) return;
    try {
      profile.walletBalance = wallet.getBalance();
      storage.setItem(`bk_user_${profile.mobile}`, JSON.stringify(profile));
    } catch (e) {
      console.error("Failed to save user profile:", e);
    }
  }

  login(mobileInput, nameInput = "Player") {
    const mobile = this.cleanMobile(mobileInput);
    if (!mobile || mobile.length !== 10) {
      return { success: false, error: "Please enter a valid 10-digit mobile number." };
    }

    const name = (nameInput || "").trim() || `Player ${mobile.slice(-4)}`;
    const existing = this.loadUserProfile(mobile);

    if (existing) {
      // Existing User!
      existing.lastLoginAt = Date.now();
      if (nameInput && nameInput.trim()) {
        existing.name = nameInput.trim();
      }
      this.currentUser = existing;
      storage.setItem(CURRENT_USER_KEY, mobile);

      // Restore their wallet
      wallet.balance = existing.walletBalance ?? 1000;
      wallet.saveBalance();
      this.saveUserProfile(this.currentUser);

      return {
        success: true,
        isNewUser: false,
        user: this.currentUser,
        message: `Welcome back, ${this.currentUser.name}! (Existing player on ${mobile})`
      };
    }

    // Brand New User!
    const newUser = {
      mobile,
      name,
      joinedAt: Date.now(),
      lastLoginAt: Date.now(),
      walletBalance: 1000,
      gamesPlayed: 0,
      gamesWon: 0,
      totalKills: 0,
      totalCoinsWon: 0,
      matchHistory: []
    };

    this.currentUser = newUser;
    storage.setItem(CURRENT_USER_KEY, mobile);

    // Save in registered users list
    try {
      const all = JSON.parse(storage.getItem(ALL_USERS_KEY) || "[]");
      if (!all.includes(mobile)) {
        all.push(mobile);
        storage.setItem(ALL_USERS_KEY, JSON.stringify(all));
      }
    } catch (_) {}

    wallet.balance = 1000;
    wallet.saveBalance();
    this.saveUserProfile(newUser);

    return {
      success: true,
      isNewUser: true,
      user: newUser,
      message: `Welcome, ${name}! 🪙1,000 joining bonus credited to ${mobile}!`
    };
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    if (this.currentUser) {
      this.currentUser.walletBalance = wallet.getBalance();
    }
    return this.currentUser;
  }

  recordMatch({ matchId, opponent, mode, bet, pot, result, coinsChange, durationSec, kills }) {
    if (!this.currentUser) return;

    const entry = {
      id: matchId || `m_${Date.now()}`,
      date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      mode: mode || "1v1 Match",
      opponent: opponent || "System AI",
      bet: bet || 250,
      pot: pot || 500,
      result: result || "WON", // "WON", "LOST", "FORFEITED"
      coinsChange: coinsChange || 0,
      durationSec: durationSec || 0,
      kills: kills || 0
    };

    this.currentUser.gamesPlayed = (this.currentUser.gamesPlayed || 0) + 1;
    if (result === "WON") {
      this.currentUser.gamesWon = (this.currentUser.gamesWon || 0) + 1;
      this.currentUser.totalCoinsWon = (this.currentUser.totalCoinsWon || 0) + (pot || 0);
    }
    this.currentUser.totalKills = (this.currentUser.totalKills || 0) + (kills || 0);

    if (!Array.isArray(this.currentUser.matchHistory)) {
      this.currentUser.matchHistory = [];
    }
    this.currentUser.matchHistory.unshift(entry);
    if (this.currentUser.matchHistory.length > 50) {
      this.currentUser.matchHistory.pop();
    }

    this.saveUserProfile(this.currentUser);
  }

  getHistory() {
    if (!this.currentUser || !this.currentUser.matchHistory) return [];
    return this.currentUser.matchHistory;
  }

  getStats() {
    if (!this.currentUser) {
      return { gamesPlayed: 0, gamesWon: 0, winRate: 0, totalKills: 0, balance: 1000 };
    }
    const played = this.currentUser.gamesPlayed || 0;
    const won = this.currentUser.gamesWon || 0;
    const winRate = played > 0 ? Math.round((won / played) * 100) : 0;
    return {
      gamesPlayed: played,
      gamesWon: won,
      winRate,
      totalKills: this.currentUser.totalKills || 0,
      balance: wallet.getBalance()
    };
  }

  logout() {
    if (this.currentUser) {
      this.saveUserProfile(this.currentUser);
    }
    this.currentUser = null;
    storage.removeItem(CURRENT_USER_KEY);
  }
}

export const userManager = new UserManager();
