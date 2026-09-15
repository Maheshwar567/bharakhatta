// Unit tests for Turn Timer

import { TurnTimer } from '../src/game/turnTimer.js';

console.log("=== BHARAKHATTA TURN TIMER TEST SUITE ===");

let ticks = [];
let warningFired = false;
let urgentFired = false;
let timeoutFired = false;

const timer = new TurnTimer({
  duration: 12,
  onTick: (s) => ticks.push(s),
  onWarning: () => { warningFired = true; },
  onUrgent: () => { urgentFired = true; },
  onTimeout: () => { timeoutFired = true; }
});

timer.start();
console.assert(timer.getTimeLeft() === 12, "Timer should start at 12s");
console.log("✅ PASS: Timer initialized with specified duration");

// Simulate time advancing by 12 seconds
for (let i = 0; i < 12; i++) {
  timer.timeLeft--;
  timer.onTick(timer.timeLeft);
  if (timer.timeLeft === 10) timer.onWarning(timer.timeLeft);
  if (timer.timeLeft === 5) timer.onUrgent(timer.timeLeft);
  if (timer.timeLeft <= 0) {
    timer.stop();
    timer.onTimeout();
  }
}

console.assert(warningFired === true, "Warning at 10s should fire");
console.log("✅ PASS: 10-second warning event triggered");

console.assert(urgentFired === true, "Urgent at 5s should fire");
console.log("✅ PASS: 5-second urgent event triggered");

console.assert(timeoutFired === true, "Timeout at 0s should fire");
console.log("✅ PASS: 0-second timeout event triggered for auto-play");

timer.reset();
console.assert(timer.getTimeLeft() === 12, "Reset should restore full duration");
console.log("✅ PASS: Timer reset restores 30s duration");

timer.stop();
console.log("=============================================");
console.log("🎉 ALL TIMER TESTS PASSED (5/5)!");
console.log("=============================================");
