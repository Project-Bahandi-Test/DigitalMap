/**
 * Project Bahandi - Play Game (PG) Controller
 */

let selectedGameMode = '3d-model'; // Default selected mode

/**
 * Opens and initializes the Play Game Modal
 */
function openPGModal() {
    const pgOverlay = document.getElementById('pg-overlay');
    if (!pgOverlay) return;

    const site = window.currentSelectedSite;

    // Update Header Details
    const titleEl = document.getElementById('pg-landmark-title');
    const subEl = document.getElementById('pg-sub-desc');

    if (titleEl) {
        const titleText = site?.site_name || site?.title || 'Molo Heritage Site';
        titleEl.innerHTML = `${titleText.replace(/\b(\w+)$/, '<em>$1</em>')} <em>Interactive</em>`;
    }

    if (subEl) {
        subEl.innerText = `Explore ${site?.site_name || 'this landmark'} through interactive 3D modeling or test your heritage knowledge with its site-specific game challenge.`;
    }

    // Set dynamic metadata for Mode 1 (3D Model)
    const m1Title = document.getElementById('pg-m1-title');
    const m1Desc = document.getElementById('pg-m1-desc');
    const m1Meta = document.getElementById('pg-m1-meta');
    const m1Bar = document.getElementById('pg-m1-bar');

    if (m1Title) m1Title.innerHTML = `3D Model <em>Viewer</em>`;
    if (m1Desc) m1Desc.innerText = `Inspect the real-time architectural 3D rendering of ${site?.site_name || 'the structure'}.`;
    if (m1Meta) m1Meta.innerText = site?.has_3d ? 'MODEL READY · 100%' : 'HIGH-RES MODEL · 100%';
    if (m1Bar) m1Bar.style.width = '100%';

    // Set dynamic metadata for Mode 2 (Personal Site Game)
    const m2Title = document.getElementById('pg-m2-title');
    const m2Desc = document.getElementById('pg-m2-desc');
    const m2Meta = document.getElementById('pg-m2-meta');
    const m2Bar = document.getElementById('pg-m2-bar');

    if (m2Title) m2Title.innerHTML = `${site?.site_name || 'Site'} <em>Challenge</em>`;
    if (m2Desc) m2Desc.innerText = site?.game_desc || `Play the custom mini-game designed specifically around the history of ${site?.site_name || 'this landmark'}.`;
    if (m2Meta) m2Meta.innerText = site?.game_status || 'PERSONAL GAME · READY';
    if (m2Bar) m2Bar.style.width = '100%';

    // Default to initial mode selection
    selectPGMode('3d-model');

    pgOverlay.classList.add('active');
}

/**
 * Selects a Game Mode card ('3d-model' or 'personal-game')
 */
function selectPGMode(modeKey) {
    selectedGameMode = modeKey;

    const card1 = document.getElementById('pg-card-3d');
    const card2 = document.getElementById('pg-card-game');
    const launchBtn = document.getElementById('pg-launch-btn');

    if (card1) card1.classList.toggle('selected', modeKey === '3d-model');
    if (card2) card2.classList.toggle('selected', modeKey === 'personal-game');

    if (launchBtn) {
        launchBtn.innerText = modeKey === '3d-model' ? 'LAUNCH 3D MODEL →' : 'PLAY MINI-GAME →';
    }
}

/**
 * Triggers launch action for the selected mode
 */
function launchSelectedGame() {
    const site = window.currentSelectedSite;
    const siteName = site?.site_name || 'this site';

    if (selectedGameMode === '3d-model') {
        const modelUrl = site?.model_3d_url || '#';
        if (modelUrl !== '#') {
            window.open(modelUrl, '_blank');
        } else {
            alert(`Loading 3D Model Viewer for ${siteName}...`);
        }
    } else {
        const gameUrl = site?.game_url || '#';
        if (gameUrl !== '#') {
            window.open(gameUrl, '_blank');
        } else {
            alert(`Launching personal mini-game for ${siteName}...`);
        }
    }
}

/**
 * Closes the Play Game Modal
 */
function closePGModal() {
    const pgOverlay = document.getElementById('pg-overlay');
    if (pgOverlay) {
        pgOverlay.classList.remove('active');
    }
}

// Global Exports
window.openPGModal = openPGModal;
window.selectPGMode = selectPGMode;
window.launchSelectedGame = launchSelectedGame;
window.closePGModal = closePGModal;