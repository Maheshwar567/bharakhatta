// Virtual Coin Wallet & Betting Economy Manager
// Joining Bonus: 1,000 Coins; Bet stakes: 100, 250, 500, 1,000, 2,500, 5,000

const STORAGE_KEY = 'bharakhatta_coins_wallet';
const DEFAULT_JOINING_BONUS = 1000;
const REFILL_AMOUNT = 500;
const REFILL_THRESHOLD = 100;

export const BET_TIERS = [100, 250, 500, 1000, 2500, 5000];

export class WalletManager {
  constructor() {
    this.balance = this.loadBalance();
  }

  loadBalance() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 0) {
          return parsed;
        }
      }
      // First time user gets joining bonus
      localStorage.setItem(STORAGE_KEY, DEFAULT_JOINING_BONUS.toString());
      return DEFAULT_JOINING_BONUS;
    } catch (_) {
      return DEFAULT_JOINING_BONUS;
    }
  }

  saveBalance() {
    try {
      localStorage.setItem(STORAGE_KEY, this.balance.toString());
    } catch (_) {}
  }

  getBalance() {
    return this.balance;
  }

  canAfford(amount) {
    return this.balance >= amount;
  }

  placeBet(amount) {
    if (!this.canAfford(amount)) {
      return false;
    }
    this.balance -= amount;
    this.saveBalance();
    return true;
  }

  awardPot(potAmount) {
    this.balance += potAmount;
    this.saveBalance();
    return this.balance;
  }

  claimRefill() {
    if (this.balance < REFILL_THRESHOLD) {
      this.balance += REFILL_AMOUNT;
      this.saveBalance();
      return true;
    }
    return false;
  }
}

export const wallet = new WalletManager();
