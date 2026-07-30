/* =========================================================
   QR - QR CODE SIDEBAR HANDLER
   Retrieves QR code data from Firebase Firestore or generates
   a dynamic QR URL for the active landmark.
   ========================================================= */

(function () {
    /**
     * Synchronizes current active landmark data into the QR Code sidebar
     */
    window.syncQRPanel = function () {
        const site = window.currentSelectedSite || {};

        const refCode = document.getElementById('qr-ref-code');
        const titleEl = document.getElementById('qr-landmark-title');
        const imgEl = document.getElementById('qr-code-img');

        const valId = document.getElementById('qr-val-id');
        const valDistrict = document.getElementById('qr-val-district');
        const valFormat = document.getElementById('qr-val-format');
        const valStatus = document.getElementById('qr-val-status');

        // Site ID and Title
        const siteId = site.site_id || site.id || 'BHD-ML-0001';
        const siteName = site.name || 'Molo Landmark';

        if (refCode) refCode.innerText = `REF · ${siteId} · QR ACCESS`;
        if (titleEl) titleEl.innerHTML = `${siteName} <em>QR Code</em>`;

        // Spec Sheet details
        if (valId) valId.innerText = siteId;
        if (valDistrict) valDistrict.innerText = site.district || site.region || 'Molo, Iloilo City';
        if (valFormat) valFormat.innerText = 'PNG / 1024px';
        if (valStatus) valStatus.innerText = 'ACTIVE & VERIFIED';

        // QR Code Image resolution from Firestore or fallback generator
        if (imgEl) {
            if (site.qr_code_url) {
                imgEl.src = site.qr_code_url;
            } else {
                // Generates dynamic high-res QR code link based on current site URL / ID
                const targetUrl = site.url || window.location.href;
                imgEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(targetUrl)}&color=0B132B&bgcolor=FFFFFF`;
            }
            imgEl.alt = `QR Code for ${siteName}`;
        }
    };

    /**
     * Downloads or opens high resolution QR Code image
     */
    window.downloadQRCode = function () {
        const imgEl = document.getElementById('qr-code-img');
        const site = window.currentSelectedSite || {};
        const siteName = site.name ? site.name.replace(/\s+/g, '_') : 'Landmark';

        if (imgEl && imgEl.src) {
            const link = document.createElement('a');
            link.href = imgEl.src;
            link.target = '_blank';
            link.download = `${siteName}_Bahandi_QR.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    /**
     * Copies direct QR access link to clipboard
     */
    window.shareQRLink = function () {
        const site = window.currentSelectedSite || {};
        const siteName = site.name || 'Landmark';
        const shareUrl = site.url || window.location.href;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert(`Link for ${siteName} copied to clipboard!`);
            }).catch(() => {
                alert(`Share URL: ${shareUrl}`);
            });
        } else {
            alert(`Share URL: ${shareUrl}`);
        }
    };

    /**
     * Opens QR Panel
     */
    window.openQRPanel = function () {
        const sidebar = document.getElementById('info-sidebar');
        const qrPanel = document.getElementById('qr-panel');

        if (sidebar) sidebar.classList.add('collapsed');
        if (typeof window.syncQRPanel === 'function') window.syncQRPanel();
        if (qrPanel) qrPanel.classList.add('active');
    };

    /**
     * Closes QR Panel and restores main sidebar
     */
    window.closeQRPanel = function () {
        const sidebar = document.getElementById('info-sidebar');
        const qrPanel = document.getElementById('qr-panel');

        if (qrPanel) qrPanel.classList.remove('active');
        if (sidebar) sidebar.classList.remove('collapsed');
    };

    // Global Key Listener for ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.closeQRPanel();
        }
    });

})();