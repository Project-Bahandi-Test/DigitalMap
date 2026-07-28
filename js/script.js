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

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);


//Interactive Map Pins

//Pin Style
const pinIcon = L.divIcon({
    html: "📍",
    className: "emoji-pin",
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