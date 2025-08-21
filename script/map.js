// Initialisation carte
var map = L.map('map').setView([6.1319, 1.2228], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Charger équipements depuis JSON
async function loadEquipments() {
  const res = await fetch("data/equipements.json");
  const equipments = await res.json();

  const list = document.getElementById("equip-list");
  list.innerHTML = "";

  equipments.forEach(eq => {
    // Ajouter marqueur
    L.marker([eq.lat, eq.lng])
      .addTo(map)
      .bindPopup(`<b>${eq.id}</b><br>${eq.type}<br>Status: ${eq.status}`);

    // Ajouter à la liste
    const li = document.createElement("li");
    li.textContent = `${eq.id} (${eq.status})`;
    list.appendChild(li);
  });
}

loadEquipments();
