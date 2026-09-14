// Mobile Connect & QR Code Modal for iOS & Android instant access

import QRCode from "qrcode";

let cachedQrDataUrl = null;

export async function generateMobileQr(url) {
  if (cachedQrDataUrl) return cachedQrDataUrl;
  try {
    cachedQrDataUrl = await QRCode.toDataURL(url, {
      width: 260,
      margin: 2,
      color: {
        dark: "#1e130c",
        light: "#fffdf7"
      }
    });
    return cachedQrDataUrl;
  } catch (e) {
    console.error("QR Code generation error:", e);
    return "";
  }
}

export function renderMobileModal(isOpen, qrDataUrl, mobileUrl) {
  if (!isOpen) return "";

  return `
    <div class="modal-backdrop" id="mobile-modal-backdrop">
      <div class="modal-dialog mobile-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">📱</span>
            <div>
              <h2 class="modal-title">Play on iPhone & Android</h2>
              <span class="modal-subtitle">Instant play on any mobile phone on your Wi-Fi</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btn-close-mobile">&times;</button>
        </div>

        <div class="modal-body mobile-body">
          <div class="qr-card">
            ${qrDataUrl ? `<img src="${qrDataUrl}" alt="Scan QR Code to play on mobile" class="qr-image" />` : '<div class="qr-loading">Generating QR...</div>'}
            <p class="qr-instruction">📷 Point your iPhone or Android camera at this QR code to open the game!</p>
          </div>

          <div class="mobile-url-box">
            <span class="url-label">Direct Network URL:</span>
            <input type="text" readonly value="${mobileUrl}" class="url-input" id="input-mobile-url" />
            <button class="btn-copy-url" id="btn-copy-url">📋 Copy</button>
          </div>

          <div class="mobile-tips-grid">
            <div class="mobile-tip-card">
              <h4>🍎 Apple iOS (Safari)</h4>
              <ol>
                <li>Scan QR or open URL in Safari.</li>
                <li>Tap the <strong>Share button</strong> (square with up arrow).</li>
                <li>Tap <strong>"Add to Home Screen"</strong>.</li>
                <li>Launch like a native full-screen app!</li>
              </ol>
            </div>

            <div class="mobile-tip-card">
              <h4>🤖 Google Android (Chrome)</h4>
              <ol>
                <li>Scan QR or open URL in Chrome.</li>
                <li>Tap the <strong>3-dots menu</strong> (top right).</li>
                <li>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
                <li>Enjoy edge-to-edge native gaming with haptic vibration!</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-modal-mobile-done">Close</button>
        </div>
      </div>
    </div>
  `;
}
