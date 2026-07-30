/* =========================================================
   HSC - Heritage Structure Citation Handler
   Handles Modal Display, Data Binding & Dynamic Tab Switching
   ========================================================= */

(function () {
    let currentTab = 'statement';

    /**
     * Synchronizes current site data with the HSC Modal components
     */
    function syncHSCData() {
        const site = window.currentSelectedSite;
        
        const heroImg = document.getElementById('hsc-hero-img');
        const heroBadge = document.getElementById('hsc-hero-badge');
        const heroTitle = document.getElementById('hsc-hero-title');
        const heroSub = document.getElementById('hsc-hero-sub');
        
        const mainPara = document.getElementById('hsc-main-paragraph');
        const secPara = document.getElementById('hsc-sec-paragraph');
        
        const chipDesig = document.getElementById('hsc-chip-designation');
        const chipEra = document.getElementById('hsc-chip-era');

        if (!site) return;

        // Image & Title Banner Sync
        if (heroImg && (site.image_url || site.image)) {
            heroImg.src = site.image_url || site.image;
        }
        if (heroTitle) heroTitle.innerText = site.name || 'Molo Heritage Site';
        if (heroBadge) heroBadge.innerText = site.category ? site.category.toUpperCase() : 'HERITAGE SITE';
        if (heroSub) heroSub.innerText = `DISTRICT OF ${ (site.district || 'MOLO').toUpperCase() } · ILOILO CITY`;

        // Chips sync
        if (chipDesig) chipDesig.innerText = site.status ? site.status.toUpperCase() : 'REGISTERED SITE';
        if (chipEra) chipEra.innerText = site.built || site.year_built || '19TH CENTURY';

        // Content Tab Sync based on active selection
        renderHSCTabContent(currentTab);
    }

    /**
     * Render paragraph contents depending on selected tab
     * @param {string} tabKey - 'statement', 'significance', or 'citation'
     */
    function renderHSCTabContent(tabKey) {
        const site = window.currentSelectedSite || {};
        const mainPara = document.getElementById('hsc-main-paragraph');
        const secPara = document.getElementById('hsc-sec-paragraph');
        const breadTag = document.getElementById('hsc-bread-tag');

        if (breadTag) breadTag.innerText = tabKey.toUpperCase();

        if (tabKey === 'statement') {
            if (mainPara) {
                mainPara.innerText = site.architectural_statement || 
                    site.description || 
                    "This structure stands as a testament to colonial craftsmanship in Molo, blending classic architectural principles with local materials.";
            }
            if (secPara) {
                secPara.innerText = site.architectural_details || 
                    "Features refined ornamental craftsmanship, robust timber framework, and strategic ventilation designed for tropical climate adaptability.";
            }
        } else if (tabKey === 'significance') {
            if (mainPara) {
                mainPara.innerText = site.historical_significance || 
                    "Prominently positioned within the district, this site holds paramount cultural value to the community of Molo and the broader heritage corridor of Iloilo City.";
            }
            if (secPara) {
                secPara.innerText = site.community_impact || 
                    "Acknowledged as a central gathering node and economic landmark during the late Spanish and early American colonial periods.";
            }
        } else if (tabKey === 'citation') {
            if (mainPara) {
                mainPara.innerText = site.citation_text || 
                    `Officially cataloged under Registry Code ${site.site_id || 'BHD-ML-0001'}. Declared an integral cultural asset under local heritage protection initiatives.`;
            }
            if (secPara) {
                secPara.innerText = site.legal_declaration || 
                    "Recognized by local historic preservation guidelines and documented under the Project Bahandi Heritage Conservation Index.";
            }
        }
    }

    /**
     * Opens the HSC Modal and populates data
     */
    window.openHSCModal = function () {
        const modal = document.getElementById('hsc-panel');
        if (!modal) return;

        syncHSCData();
        modal.classList.add('active');
    };

    /**
     * Closes the HSC Modal
     */
    window.closeHSCModal = function () {
        const modal = document.getElementById('hsc-panel');
        if (modal) {
            modal.classList.remove('active');
        }
    };

    /**
     * Tab Switcher Handler
     * @param {HTMLElement} btn 
     * @param {string} tabKey 
     */
    window.switchHSCTab = function (btn, tabKey) {
        currentTab = tabKey;
        const container = btn.parentElement;
        if (container) {
            const tabs = container.querySelectorAll('.hsc-pill-btn');
            tabs.forEach(t => t.classList.remove('active'));
        }
        btn.classList.add('active');
        renderHSCTabContent(tabKey);
    };

    // Close modal when pressing ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.closeHSCModal();
        }
    });
})();