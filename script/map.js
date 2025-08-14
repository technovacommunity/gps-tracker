var map = L.map('map').setView([6.1319, 1.2228], 13); // Lomé
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
