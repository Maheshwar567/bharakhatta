// Mobile vibration and haptic feedback helper for Android and iOS

export const haptics = {
  // Light tap / shell tumble
  light() {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(15);
      } catch (e) {}
    }
  },

  // Shell toss rattle
  rollTumble() {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate([20, 30, 25]);
      } catch (e) {}
    }
  },

  // Coin move step
  step() {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(20);
      } catch (e) {}
    }
  },

  // Katta Capture impact
  capture() {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate([50, 40, 80]);
      } catch (e) {}
    }
  },

  // Grand Baara! (12)
  baara() {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate([40, 30, 40, 30, 100]);
      } catch (e) {}
    }
  },

  // Victory celebration
  victory() {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate([80, 50, 80, 50, 120, 60, 200]);
      } catch (e) {}
    }
  }
};
