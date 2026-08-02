<<<<<<< HEAD
<<<<<<< HEAD
// ==================== 1. CORE DATA SOURCE STORE (DICTIONARY OBJECT) ====================
const landmarkData = {
    'molo-mansion': {
        title: "Molo Mansion (Yusay-Consing Ancestral House)",
        type: "Mansion",
        description: "Molo Mansion is a two-story ancestral residence showcasing Neoclassical architecture with subtle Art Deco influences. Distinguished by its grand arches, spacious balconies, decorative columns, and high ceilings, the mansion reflects the elegance and wealth of prominent Ilonggo families during the early 20th century.",
        image: "assets/Iloilo_Molo_Mansion.jpg"
    },
    'molo-church': {
        title: "Molo Church (St. Anne Parish Church)",
        type: "Churches / Religious",
        description: "St. Anne Parish Church is a famous, Renaissance-Gothic style church built in 1831. It is prominently known as the 'Feminist Church' due to the two rows of all-female saints mounted along its structural central pillars.",
        image: "assets/molo_church.jpg"
    },
    'molo-plaza': {
        title: "Molo Plaza Pavilion",
        type: "Plazas & Parks",
        description: "A prominent green space situated right at the center of the district of Molo. It serves as a beautiful public pavilion hub containing classical gazebo architecture elements surrounded by statues of Greek goddesses.",
        image: "assets/molo_plaza.jpg"
    }
};

// ==================== 2. DOM INTERACTION SELECTORS ====================
const sidebar = document.getElementById('info-sidebar');
const previewCard = document.getElementById('map-preview-card');
const mapContainer = document.querySelector('.map-container');
const sidebarImage = document.getElementById('landmark-image');
const sidebarTitle = document.getElementById('landmark-title');
const sidebarDesc = document.getElementById('landmark-description');

// ==================== 3. REAL-TIME MOUSE TRAILING ENGINE ====================
document.addEventListener('mousemove', function(e) {
    if (!previewCard.classList.contains('hidden')) {
        previewCard.style.left = `${e.clientX + 15}px`;
        previewCard.style.top = `${e.clientY + 15}px`;
    }
});

// ==================== 4. HOVER MOUSE ACTIONS (HOVER ON / HOVER LEAVE) ====================
function hoverLandmark(key) {
    const data = landmarkData[key];
    if (data) {
        document.getElementById('preview-tag-text').textContent = data.type;
        document.getElementById('preview-title-text').textContent = data.title;
        previewCard.classList.remove('hidden');
    }
}

function leaveLandmark() {
    previewCard.classList.add('hidden');
}

// ==================== 5. CLICK SELECTION INTERFACES (OPEN/CLOSE CARD) ====================
function selectLandmark(key) {
    const data = landmarkData[key];
    if (data) {
        // Swap values smoothly inside DOM node points
        sidebarImage.src = data.image;
        sidebarImage.alt = data.title;
        sidebarTitle.textContent = data.title;
        sidebarDesc.textContent = data.description;
        
        // Safety: ensure image displays if data source exists
        sidebarImage.style.display = 'block';
        
        // Slides sidebar card panel fully into focus fields from right screen borders
        sidebar.classList.remove('collapsed');
    }
}

function closeSidebar() {
    sidebar.classList.add('collapsed');
}


//Map

var map = L.map("map", {
    minZoom:17,
    maxZoom:19
}).setView([10.697008, 122.544031],18);
var southWest = L.latLng(10.694293, 122.540925);
var northEast = L.latLng(10.699216, 122.546697);

var bounds = L.latLngBounds(southWest, northEast)

map.setMaxBounds(bounds);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);


//Interactive Map Pins

//Pin Style
const pinIcon = L.icon({
    iconUrl: 'assets/Location_Pin.png',
    className: "Location_Pin",
    iconSize: [30, 30],
    iconAnchor: [15, 30]
});



//Mansion
L.marker([10.696444, 122.543473],{icon: pinIcon}).addTo(map)
.on("click",function(){
    selectLandmark("molo-mansion");
    
})
.on("mouseover",function(){
    hoverLandmark("molo-mansion");
})
.on("mouseout",function(){
    leaveLandmark();
});


//Church
L.marker([10.697398, 122.544808],{icon: pinIcon}).addTo(map)
.on("click",function(){
    selectLandmark("molo-church");
})
.on("mouseover",function(){
    hoverLandmark("molo-church");
})
.on("mouseout",function(){
    leaveLandmark();
});


//Plaza
L.marker([10.696913, 122.544191],{icon: pinIcon}).addTo(map)
.on("click",function(){
    selectLandmark("molo-plaza");
})
.on("mouseover",function(){
    hoverLandmark("molo-plaza");
})
.on("mouseout",function(){
    leaveLandmark();
});
=======
// ==================== 1. DOM SELECTORS & GLOBAL SCOPE ====================
=======
// ==================== 1. CORE DATA SOURCE STORE (DICTIONARY OBJECT) ====================
const landmarkData = {
    'molo-mansion': {
        title: "Molo Mansion (Yusay-Consing Ancestral House)",
        type: "Mansion",
        description: "Molo Mansion is a two-story ancestral residence showcasing Neoclassical architecture with subtle Art Deco influences. Distinguished by its grand arches, spacious balconies, decorative columns, and high ceilings, the mansion reflects the elegance and wealth of prominent Ilonggo families during the early 20th century.",
        image: "assets/Iloilo_Molo_Mansion.jpg"
    },
    'molo-church': {
        title: "Molo Church (St. Anne Parish Church)",
        type: "Churches / Religious",
        description: "St. Anne Parish Church is a famous, Renaissance-Gothic style church built in 1831. It is prominently known as the 'Feminist Church' due to the two rows of all-female saints mounted along its structural central pillars.",
        image: "assets/molo_church.jpg"
    },
    'molo-plaza': {
        title: "Molo Plaza Pavilion",
        type: "Plazas & Parks",
        description: "A prominent green space situated right at the center of the district of Molo. It serves as a beautiful public pavilion hub containing classical gazebo architecture elements surrounded by statues of Greek goddesses.",
        image: "assets/molo_plaza.jpg"
    }
};

// ==================== 2. DOM INTERACTION SELECTORS ====================
>>>>>>> parent of 3c63b37 (Sidebar and map renovation and literally just everything)
const sidebar = document.getElementById('info-sidebar');
const previewCard = document.getElementById('map-preview-card');
const mapContainer = document.querySelector('.map-container');
const sidebarImage = document.getElementById('landmark-image');
const sidebarTitle = document.getElementById('landmark-title');
const sidebarDesc = document.getElementById('landmark-description');

<<<<<<< HEAD
const featureModal = document.getElementById('feature-modal');
const modalContent = document.getElementById('modal-content');
let ffPopover = document.getElementById('ff-popover-wrapper');

// State Memory & Window Exports
let siteStore = {};
let currentSelectedSite = null;
window.currentSelectedSite = null; 
window.currentMarker = null;
window.map = null;

// Ensure popover container exists
if (!ffPopover) {
    ffPopover = document.createElement('div');
    ffPopover.id = 'ff-popover-wrapper';
    ffPopover.className = 'ff-popover-wrapper';
    document.body.appendChild(ffPopover);
}

// Default Fallback Image Path
const DEFAULT_IMAGE = "assets/images/MoloFront.jpg";

// Helper function to safely resolve and format image URLs (Handles Google Drive & Firestore fields)
function getSiteImageUrl(site) {
    if (!site) return DEFAULT_IMAGE;
    
    // Check all possible field variations (including plural 'images' from Firestore)
    let rawUrl = site.images || site.image || site.imageUrl || site.image_url;
    
    if (rawUrl && typeof rawUrl === 'string' && rawUrl.trim() !== '') {
        rawUrl = rawUrl.trim();
        
        // Convert Google Drive view/share links into direct image source URLs
        if (rawUrl.includes('drive.google.com')) {
            const matches = rawUrl.match(/\/d\/([^\/\?]+)/);
            if (matches && matches[1]) {
                const fileId = matches[1];
                return `https://lh3.googleusercontent.com/d/${fileId}`;
            }
        }
        
        return rawUrl;
    }
    return DEFAULT_IMAGE;
}

// ==================== 2. MOUSE TRAILING ====================
document.addEventListener('mousemove', function (e) {
    if (previewCard && !previewCard.classList.contains('hidden')) {
=======
// ==================== 3. REAL-TIME MOUSE TRAILING ENGINE ====================
document.addEventListener('mousemove', function(e) {
    if (!previewCard.classList.contains('hidden')) {
>>>>>>> parent of 3c63b37 (Sidebar and map renovation and literally just everything)
        previewCard.style.left = `${e.clientX + 15}px`;
        previewCard.style.top = `${e.clientY + 15}px`;
    }
});

// ==================== 4. HOVER MOUSE ACTIONS (HOVER ON / HOVER LEAVE) ====================
function hoverLandmark(key) {
    const data = landmarkData[key];
    if (data) {
        document.getElementById('preview-tag-text').textContent = data.type;
        document.getElementById('preview-title-text').textContent = data.title;
        previewCard.classList.remove('hidden');
    }
}

function leaveLandmark() {
    previewCard.classList.add('hidden');
}

<<<<<<< HEAD
function selectLandmark(siteId) {
    const site = siteStore[siteId];
    if (!site) return;

    currentSelectedSite = site;
    window.currentSelectedSite = site;

    if (typeof window.closeFFPopover === 'function') {
        window.closeFFPopover();
    }

    const blueprintPanel = document.getElementById('blueprint-panel');
    if (blueprintPanel) {
        blueprintPanel.classList.remove('active');
    }

    // --- UPDATED IMAGE HANDLING LOGIC ---
    if (sidebarImage) {
        const imgSrc = getSiteImageUrl(site);
        sidebarImage.src = imgSrc;
        sidebarImage.alt = site.site_name || "Landmark Image";
        sidebarImage.style.display = 'block';

        // Error fallback: If the link fails or 404s, swap to default image automatically
        sidebarImage.onerror = function() {
            console.warn(`[MapHandler] Failed to load image at "${imgSrc}" for ${site.site_name}. Using fallback image.`);
            this.onerror = null; // Prevents infinite loop if fallback image is missing
            this.src = DEFAULT_IMAGE;
        };
    }

    if (sidebarTitle) {
        sidebarTitle.textContent = site.site_name || "Landmark Name";
    }

    if (sidebarDesc) {
        sidebarDesc.textContent = site.description || "No description available.";
    }

    if (sidebar) {
=======
// ==================== 5. CLICK SELECTION INTERFACES (OPEN/CLOSE CARD) ====================
function selectLandmark(key) {
    const data = landmarkData[key];
    if (data) {
        // Swap values smoothly inside DOM node points
        sidebarImage.src = data.image;
        sidebarImage.alt = data.title;
        sidebarTitle.textContent = data.title;
        sidebarDesc.textContent = data.description;
        
        // Safety: ensure image displays if data source exists
        sidebarImage.style.display = 'block';
        
        // Slides sidebar card panel fully into focus fields from right screen borders
>>>>>>> parent of 3c63b37 (Sidebar and map renovation and literally just everything)
        sidebar.classList.remove('collapsed');
    }
}

function closeSidebar() {
    sidebar.classList.add('collapsed');
}


//Map

var map = L.map("map", {
    minZoom:17,
    maxZoom:19
}).setView([10.697008, 122.544031],18);
var southWest = L.latLng(10.694293, 122.540925);
var northEast = L.latLng(10.699216, 122.546697);

var bounds = L.latLngBounds(southWest, northEast)

map.setMaxBounds(bounds);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);


//Interactive Map Pins

//Pin Style
const pinIcon = L.icon({
    iconUrl: 'assets/Location_Pin.png',
    className: "Location_Pin",
    iconSize: [30, 30],
    iconAnchor: [15, 30]
});



//Mansion
L.marker([10.696444, 122.543473],{icon: pinIcon}).addTo(map)
.on("click",function(){
    selectLandmark("molo-mansion");
    
})
.on("mouseover",function(){
    hoverLandmark("molo-mansion");
})
.on("mouseout",function(){
    leaveLandmark();
});


//Church
L.marker([10.697398, 122.544808],{icon: pinIcon}).addTo(map)
.on("click",function(){
    selectLandmark("molo-church");
})
.on("mouseover",function(){
    hoverLandmark("molo-church");
})
.on("mouseout",function(){
    leaveLandmark();
});


<<<<<<< HEAD
            <div class="seal-body">
                <div class="seal-badge-container">
                    <div class="seal-shield-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                    </div>
                </div>

                <div class="seal-details">
                    <div class="seal-certified-tag">CERTIFIED · HERITAGE LANDMARK</div>
                    <h2 class="seal-title">${currentSelectedSite.site_name}</h2>
                    <p class="seal-summary">${status}</p>

                    <div class="seal-metrics-grid">
                        <div class="seal-metric-box">
                            <label>REGISTRY</label>
                            <div>${currentSelectedSite.registry_authority || 'NHCP · Official'}</div>
                        </div>
                        <div class="seal-metric-box">
                            <label>MARKER YR.</label>
                            <div>[ ${currentSelectedSite.marker_year || 'Year'} ]</div>
                        </div>
                        <div class="seal-metric-box">
                            <label>ORDINANCE</label>
                            <div>No. [ ${currentSelectedSite.ordinance_no || '--'} ]</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="seal-footer">
                <span class="seal-status-pill">● VERIFIED & ACTIVE</span>
                <a class="seal-link" href="#" onclick="alert('Opening official designation record...'); return false;">VIEW SOURCE →</a>
            </div>
        </div>
    `;

    openFeatureModal(content);
}

function handleHistoricalSignificance() {
    if (!currentSelectedSite) return;

    const significance = currentSelectedSite.historical_significance || 
                         currentSelectedSite.significance || 
                         currentSelectedSite.description ||
                         "Historical significance details are maintained under official cultural heritage record archives.";

    const siteImg = getSiteImageUrl(currentSelectedSite);

    const content = `
        <div class="frame-editorial-card">
            <div class="editorial-left-panel" style="background-image: url('${siteImg}')">
                <div class="editorial-left-overlay">
                    <div class="editorial-home-badge">🏛️</div>
                    <div class="editorial-left-footer">
                        <div class="editorial-tag">CULTURAL RECORD · 04</div>
                        <h3>${currentSelectedSite.site_name}</h3>
                        <p>${currentSelectedSite.district || 'Molo, Iloilo City'} · Panay Island</p>
                    </div>
                </div>
            </div>

            <div class="editorial-right-panel">
                <div class="editorial-breadcrumbs">BAHANDI / MOLO / HISTORICAL & CULTURAL</div>
                <h2 class="editorial-headline">The Living <em>Archive</em> of a District</h2>

                <div class="editorial-pills">
                    <span class="ed-pill active">HISTORY</span>
                    <span class="ed-pill">ARCHITECTURE</span>
                    <span class="ed-pill">GALLERY</span>
                </div>

                <div class="editorial-body">
                    <span class="drop-cap">${significance.charAt(0)}</span>
                    <p>${significance.slice(1)}</p>
                </div>

                <div class="editorial-footer-bar">
                    <div class="editorial-meta-box">
                        <div>SOURCES · 04</div>
                        <div>MEDIA · 12</div>
                        <div>LAST VERIFIED · 2026-07</div>
                    </div>
                    <a href="#" class="editorial-cite-link" onclick="alert('Citation referenced.'); return false;">CITE ENTRY →</a>
                </div>
            </div>
        </div>
    `;

    openFeatureModal(content);
}

function handleFunFacts() {
    if (typeof openFrame === 'function') {
        openFrame('FF');
    }
}

function handlePlayGame() {
    if (!currentSelectedSite) return;

    const content = `
        <div class="frame-game-card">
            <div class="game-top-badge">
                <div class="game-controller-icon">🎮</div>
                <div class="game-module-tag">BAHANDI EXPERIENCE · MODULE 06</div>
            </div>

            <h2 class="game-title">Play the <em>Heritage</em></h2>
            <p class="game-subtitle">Three interactive modes let visitors test what they've learned about ${currentSelectedSite.site_name}. Progress persists across sessions.</p>

            <div class="game-modes-grid">
                <div class="game-mode-card">
                    <div class="gm-header">
                        <span class="gm-tag">MODE 01</span>
                        <div class="gm-icon">❓</div>
                    </div>
                    <h3>Heritage <em>Trivia</em></h3>
                    <p>Quick-fire questions on ${currentSelectedSite.site_name}.</p>
                    <div class="gm-progress-bar"><div style="width: 15%;"></div></div>
                    <div class="gm-meta"><span>PROGRESS</span> <span>3 / 20</span></div>
                </div>

                <div class="game-mode-card">
                    <div class="gm-header">
                        <span class="gm-tag">MODE 02</span>
                        <div class="gm-icon">📍</div>
                    </div>
                    <h3>Virtual <em>Tour</em></h3>
                    <p>Guided pathway through landmark highlights.</p>
                    <div class="gm-progress-bar"><div style="width: 0%;"></div></div>
                    <div class="gm-meta"><span>PROGRESS</span> <span>0 / 6</span></div>
                </div>

                <div class="game-mode-card locked">
                    <div class="gm-header">
                        <span class="gm-tag">MODE 03</span>
                        <span class="gm-lock">🔒 LOCKED</span>
                    </div>
                    <h3>Timeline <em>Puzzle</em></h3>
                    <p>Arrange historical events in correct order.</p>
                    <div class="gm-meta"><span>REQUIRES</span> <span>LEVEL 3</span></div>
                </div>
            </div>

            <div class="game-footer">
                <div class="game-player-stats">
                    <span>XP <strong>240</strong></span>
                    <span>RANK <strong>EXPLORER</strong></span>
                    <span>STREAK <strong>3D</strong></span>
                </div>
                <button class="game-start-btn" onclick="launchGame()">START EXPERIENCE ❯</button>
            </div>
        </div>
    `;

    openFeatureModal(content);
}

function launchGame() {
    if (currentSelectedSite && (currentSelectedSite.game_url || currentSelectedSite.gameUrl)) {
        window.open(currentSelectedSite.game_url || currentSelectedSite.gameUrl, "_blank");
    } else {
        alert("Launching Heritage Trivia Mini-Game Engine...");
    }
}

// ==================== 6. MAP INIT & BUTTON BINDINGS ====================
document.addEventListener("DOMContentLoaded", async () => {
    // Initialize Leaflet Map
    const map = L.map("map", { minZoom: 15, maxZoom: 19 }).setView([10.697008, 122.544031], 18);
    window.map = map;

    const southWest = L.latLng(10.690000, 122.535000);
    const northEast = L.latLng(10.705000, 122.555000);
    map.setMaxBounds(L.latLngBounds(southWest, northEast));

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Force map to recompute container bounds after mounting
    setTimeout(() => {
        map.invalidateSize();
    }, 200);

    const pinIcon = L.icon({
        iconUrl: 'assets/Location_Pin.png',
        className: "Location_Pin",
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });

    const markerGroup = L.layerGroup().addTo(map);

    let siteList = [];
    if (typeof window.fetchSitesFromFirestore === "function") {
        try {
            const dbSites = await window.fetchSitesFromFirestore();
            if (Array.isArray(dbSites) && dbSites.length > 0) siteList = dbSites;
        } catch (err) {
            console.error("Firestore fetch error:", err);
        }
    }

    if (siteList.length === 0 && Array.isArray(window.BAHANDI_SITES)) {
        siteList = window.BAHANDI_SITES;
    }

    siteList.forEach((site) => {
        if (!site || !Array.isArray(site.coordinates) || site.coordinates.length < 2) return;
        const lat = Number(site.coordinates[0]);
        const lng = Number(site.coordinates[1]);

        if (isNaN(lat) || isNaN(lng) || (lat === 0 && lng === 0)) return;

        siteStore[site.site_id] = site;

        const marker = L.marker([lat, lng], { icon: pinIcon }).addTo(markerGroup);
        marker.on("click", () => {
            window.currentMarker = marker;
            selectLandmark(site.site_id);
        });

        marker.on("mouseover", () => hoverLandmark(site.site_id));
        marker.on("mouseout", () => leaveLandmark());
    });

    // Wire up sidebar mini-buttons to specific frame actions
    const miniBtns = document.querySelectorAll(".mini-btn");
    if (miniBtns.length >= 2) {
        if (miniBtns[0]) miniBtns[0].onclick = () => openFrame('FD');
        if (miniBtns[1]) miniBtns[1].onclick = () => openFrame('FF');
    }
});
>>>>>>> b407ebe887fd9ec2f0978e9abb013f2dba336042
=======
//Plaza
L.marker([10.696913, 122.544191],{icon: pinIcon}).addTo(map)
.on("click",function(){
    selectLandmark("molo-plaza");
})
.on("mouseover",function(){
    hoverLandmark("molo-plaza");
})
.on("mouseout",function(){
    leaveLandmark();
});
>>>>>>> parent of 3c63b37 (Sidebar and map renovation and literally just everything)
