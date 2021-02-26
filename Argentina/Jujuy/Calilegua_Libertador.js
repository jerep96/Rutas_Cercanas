let tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('myMap').setView([-23.7706, -64.7668], 13)

L.tileLayer(tilesProvider, {
    maxZoom: 50,
    zoom: 50,
}).addTo(myMap);