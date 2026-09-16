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

export function computeNickName(fullName, customNickName) {
  if (customNickName && customNickName.trim()) {
    return customNickName.trim();
  }
  if (!fullName || !fullName.trim()) {
    return "Player";
  }
  // Split by whitespace: each word contributes its first letter in uppercase
  // Example: "Mahesh Reddy" -> "MR", "maheshreddy" -> "M", "Mahesh Kumar Reddy" -> "MKR"
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "Player";
  return parts.map(p => p[0].toUpperCase()).join("");
}

export const STARTER_FRIENDS = [
  { id: "f_1", mobile: "9876543210", nickName: "Aatikur", fullName: "Aatikur Rahman", avatar: "👤", level: 33 },
  { id: "f_2", mobile: "9876543211", nickName: "sumongamingf9c", fullName: "Sumon Gaming", avatar: "🕵️", level: 34 },
  { id: "f_3", mobile: "9876543212", nickName: "sarker", fullName: "Sarker Babu", avatar: "😎", level: 64 },
  { id: "f_4", mobile: "9876543213", nickName: "king", fullName: "King Kumar", avatar: "🕶️", level: 54 },
  { id: "f_5", mobile: "9876543214", nickName: "jogi", fullName: "Jogi Reddy", avatar: "🏯", level: 54 },
  { id: "f_6", mobile: "9876543215", nickName: "Sk", fullName: "SK Nayak", avatar: "🤵", level: 68 }
];

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
        const parsed = JSON.parse(raw);
        // Ensure nickName is always populated
        if (!parsed.nickName) {
          parsed.nickName = computeNickName(parsed.fullName || parsed.name || "", "");
        }
        parsed.name = parsed.nickName;
        if (!Array.isArray(parsed.friends)) {
          parsed.friends = [...STARTER_FRIENDS];
        }
        if (typeof parsed.lastHourlyRewardClaim !== "number") {
          parsed.lastHourlyRewardClaim = 0;
        }
        return parsed;
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

  login(mobileInput, fullNameInput = "", nickNameInput = "") {
    const mobile = this.cleanMobile(mobileInput);
    if (!mobile || mobile.length !== 10) {
      return { success: false, error: "Please enter a valid 10-digit mobile number." };
    }

    const fullName = (fullNameInput || "").trim();
    const nickName = computeNickName(fullName, nickNameInput);
    const existing = this.loadUserProfile(mobile);

    if (existing) {
      // Existing User!
      existing.lastLoginAt = Date.now();
      if (fullName) {
        existing.fullName = fullName;
      }
      if (nickNameInput && nickNameInput.trim()) {
        existing.nickName = nickNameInput.trim();
        existing.name = existing.nickName;
      } else if (!existing.nickName) {
        existing.nickName = nickName;
        existing.name = nickName;
      }
      if (!Array.isArray(existing.friends)) {
        existing.friends = [...STARTER_FRIENDS];
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
        message: `Welcome back, ${this.currentUser.nickName}! (Existing player)`
      };
    }

    // Brand New User!
    const newUser = {
      mobile,
      fullName: fullName || "Player",
      nickName: nickName,
      name: nickName,
      joinedAt: Date.now(),
      lastLoginAt: Date.now(),
      walletBalance: 1000,
      gamesPlayed: 0,
      gamesWon: 0,
      totalKills: 0,
      totalCoinsWon: 0,
      matchHistory: [],
      friends: [...STARTER_FRIENDS],
      lastHourlyRewardClaim: 0
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
      message: `Welcome, ${newUser.nickName}! 🪙1,000 joining bonus credited!`
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

  recordMatch({ matchId, tableCode, opponent, mode, bet, pot, result, coinsChange, durationSec, kills }) {
    if (!this.currentUser) return;

    const entry = {
      id: matchId || `m_${Date.now()}`,
      tableCode: tableCode || (matchId ? String(matchId).replace(/[^0-9]/g, "").slice(-4) : "1001"),
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

  getFriends(query = "") {
    let list = this.currentUser && Array.isArray(this.currentUser.friends)
      ? this.currentUser.friends
      : STARTER_FRIENDS;

    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      return list.filter(f =>
        (f.nickName && f.nickName.toLowerCase().includes(q)) ||
        (f.fullName && f.fullName.toLowerCase().includes(q))
      );
    }
    return list;
  }

  addFriendByMobile(mobileInput) {
    const mobile = this.cleanMobile(mobileInput);
    if (!mobile || mobile.length !== 10) {
      return { success: false, error: "Please enter a valid 10-digit mobile number." };
    }

    if (!this.currentUser) {
      return { success: false, error: "Please login to add friends." };
    }

    if (this.currentUser.mobile === mobile) {
      return { success: false, error: "You cannot add yourself as a friend!" };
    }

    if (!Array.isArray(this.currentUser.friends)) {
      this.currentUser.friends = [...STARTER_FRIENDS];
    }

    if (this.currentUser.friends.some(f => f.mobile === mobile)) {
      return { success: false, error: "This friend is already in your list." };
    }

    // Check if user is registered in the system
    const registered = this.loadUserProfile(mobile);
    let newFriend;
    if (registered) {
      newFriend = {
        id: `f_${Date.now()}`,
        mobile,
        nickName: registered.nickName || registered.name || "Friend",
        fullName: registered.fullName || registered.name || "Friend",
        avatar: "👑",
        level: Math.max(20, (registered.gamesPlayed || 0) * 3 + 15),
        addedAt: Date.now()
      };
    } else {
      const avatarList = ["😎", "🕶️", "👤", "🕵️", "🦁", "🦚"];
      const randAvatar = avatarList[Math.floor(Math.random() * avatarList.length)];
      newFriend = {
        id: `f_${Date.now()}`,
        mobile,
        nickName: `Friend ${mobile.slice(-4)}`,
        fullName: `Player ${mobile.slice(-4)}`,
        avatar: randAvatar,
        level: Math.floor(25 + Math.random() * 30),
        addedAt: Date.now()
      };
    }

    this.currentUser.friends.unshift(newFriend);
    this.saveUserProfile(this.currentUser);

    return {
      success: true,
      friend: newFriend,
      message: `Added ${newFriend.nickName} to your friends!`
    };
  }

  removeFriend(mobileOrId) {
    if (!this.currentUser || !Array.isArray(this.currentUser.friends)) {
      return { success: false, error: "No friends list found." };
    }

    this.currentUser.friends = this.currentUser.friends.filter(f =>
      f.id !== mobileOrId && f.mobile !== mobileOrId
    );
    this.saveUserProfile(this.currentUser);
    return { success: true };
  }

  getHourlyRewardStatus() {
    const ONE_HOUR_MS = 60 * 60 * 1000;
    const lastClaim = this.currentUser?.lastHourlyRewardClaim || 0;
    const now = Date.now();
    const elapsed = now - lastClaim;

    if (lastClaim === 0 || elapsed >= ONE_HOUR_MS) {
      return {
        canClaim: true,
        secondsLeft: 0,
        rewardAmount: 500
      };
    }

    const remainingSec = Math.max(0, Math.ceil((ONE_HOUR_MS - elapsed) / 1000));
    return {
      canClaim: false,
      secondsLeft: remainingSec,
      rewardAmount: 500
    };
  }

  claimHourlyReward() {
    const status = this.getHourlyRewardStatus();
    if (!status.canClaim) {
      const mins = Math.ceil(status.secondsLeft / 60);
      return { success: false, error: `Hourly reward available in ${mins}m.` };
    }

    if (this.currentUser) {
      this.currentUser.lastHourlyRewardClaim = Date.now();
      this.saveUserProfile(this.currentUser);
    }
    wallet.addCoins(500);

    return {
      success: true,
      reward: 500,
      newBalance: wallet.getBalance(),
      message: "🎉 Claimed 500 Free Coins! Next reward in 1 hour."
    };
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
