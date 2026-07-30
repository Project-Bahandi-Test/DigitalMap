/* =========================================================
   PG - PLAY GAME / GAME LAUNCH MODAL HANDLER
   Tracks selected mode (3D Model vs. Interactive Game)
   and handles Firebase site data syncing.
   ========================================================= */

(function () {
    let selectedMode = '3d'; // Default mode ('3d' or 'game')

    /**
     * Synchronizes current active landmark data into the Play Game modal
     */
    function syncPGData() {
        const site = window.currentSelectedSite || {};

        const mainTitle = document.getElementById('pg-landmark-title');
        const prog3dVal = document.getElementById('pg-prog-3d-val');
        const fill3d = document.getElementById('pg-fill-3d');
        const progGameVal = document.getElementById('pg-prog-game-val');
        const fillGame = document.getElementById('pg-fill-game');

        const xpText = document.getElementById('pg-stat-xp');
        const rankText = document.getElementById('pg-stat-rank');

        // Dynamic Title
        if (mainTitle) {
            mainTitle.innerHTML = site.name 
                ? `Play the <em>${site.name}</em>` 
                : `Play the <em>Heritage</em>`;
        }

        // Firebase Progress Data fallbacks
        const prog3D = site.model_progress !== undefined ? site.model_progress : 100;
        const progGame = site.game_progress !== undefined ? site.game_progress : 0;

        if (prog3dVal) prog3dVal.innerText = `${prog3D}%`;
        if (fill3d) fill3d.style.width = `${prog3D}%`;

        if (progGameVal) progGameVal.innerText = `${progGame}%`;
        if (fillGame) fillGame.style.width = `${progGame}%`;

        if (xpText) xpText.innerText = site.xp_reward ? `${site.xp_reward} XP` : '240 XP';
        if (rankText) rankText.innerText = site.user_rank || 'EXPLORER';
    }

    /**
     * Highlights and selects a mode card
     */
    window.selectPGMode = function (modeKey) {
        selectedMode = modeKey;
        const card3D = document.getElementById('pg-card-3d');
        const cardGame = document.getElementById('pg-card-game');

        if (card3D && cardGame) {
            card3D.classList.remove('selected');
            cardGame.classList.remove('selected');

            if (modeKey === '3d') {
                card3D.classList.add('selected');
            } else if (modeKey === 'game') {
                cardGame.classList.add('selected');
            }
        }
    };

    /**
     * Triggers the game launch based on selection
     */
    window.launchPGExperience = function () {
        const site = window.currentSelectedSite || {};

        if (selectedMode === '3d') {
            const modelUrl = site.model_url || site.sketchfab_url;
            if (modelUrl) {
                window.open(modelUrl, '_blank');
            } else {
                alert(`Opening 3D Model View for ${site.name || 'Landmark'}...`);
            }
        } else if (selectedMode === 'game') {
            const gameUrl = site.game_url;
            if (gameUrl) {
                window.open(gameUrl, '_blank');
            } else {
                alert(`Launching Interactive Heritage Mini-Game for ${site.name || 'Landmark'}...`);
            }
        }
    };

    /**
     * Opens the Play Game Modal
     */
    window.openPGModal = function () {
        const modal = document.getElementById('pg-overlay');
        if (!modal) return;

        syncPGData();
        modal.classList.add('active');
    };

    /**
     * Closes the Play Game Modal
     */
    window.closePGModal = function () {
        const modal = document.getElementById('pg-overlay');
        if (modal) {
            modal.classList.remove('active');
        }
    };

    // Global Key Listener for ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.closePGModal();
        }
    });

})();