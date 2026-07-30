/* =========================================================
   HS - Heritage Status / Verified Seal Modal Handler
   Manages Seal Modal State & Dynamic Registry Field Ingestion
   ========================================================= */

(function () {

    /**
     * Synchronizes current active landmark data into the Certificate fields
     */
    function syncHSData() {
        const site = window.currentSelectedSite || {};

        const certEntryCode = document.getElementById('hs-entry-code');
        const certCategory = document.getElementById('hs-category-label');
        const certTitle = document.getElementById('hs-landmark-title');
        const certSummary = document.getElementById('hs-summary-text');

        const fieldRegistry = document.getElementById('hs-val-registry');
        const fieldMarkerYr = document.getElementById('hs-val-markeryr');
        const fieldOrdinance = document.getElementById('hs-val-ordinance');

        // Populate Top Right Entry Reference
        if (certEntryCode) {
            certEntryCode.innerText = site.site_id || 'BHD-ML-0001';
        }

        // Category Tag
        if (certCategory) {
            certCategory.innerText = site.category 
                ? `CERTIFIED · ${site.category.toUpperCase()}` 
                : 'CERTIFIED · HERITAGE LANDMARK';
        }

        // Title Split into Emphasized HTML if name has multiple words
        if (certTitle) {
            if (site.name) {
                const words = site.name.split(' ');
                if (words.length > 1) {
                    const lastWord = words.pop();
                    certTitle.innerHTML = `${words.join(' ')} <em>${lastWord}</em>`;
                } else {
                    certTitle.innerText = site.name;
                }
            } else {
                certTitle.innerHTML = 'Molo <em>Mansion</em>';
            }
        }

        // Summary Text
        if (certSummary) {
            certSummary.innerText = site.status_summary || 
                site.description || 
                "Official designation verified under local heritage registry protection and historic conservation guidelines.";
        }

        // Field 1: Registry Authority
        if (fieldRegistry) {
            fieldRegistry.innerText = site.registry || site.status || 'NHCP Registered';
        }

        // Field 2: Marker / Construction Year
        if (fieldMarkerYr) {
            fieldMarkerYr.innerText = site.year_built || site.built ? `[ ${site.year_built || site.built} ]` : '[ Year ]';
        }

        // Field 3: Ordinance / Resolution No.
        if (fieldOrdinance) {
            fieldOrdinance.innerText = site.ordinance_no ? `No. [${site.ordinance_no}]` : 'No. [—]';
        }
    }

    /**
     * Opens the Heritage Status Seal Certificate Modal
     */
    window.openHSModal = function () {
        const modal = document.getElementById('hs-overlay');
        if (!modal) return;

        syncHSData();
        modal.classList.add('active');
    };

    /**
     * Closes the Heritage Status Seal Certificate Modal
     */
    window.closeHSModal = function () {
        const modal = document.getElementById('hs-overlay');
        if (modal) {
            modal.classList.remove('active');
        }
    };

    // Global Key Listener for ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.closeHSModal();
        }
    });

})();