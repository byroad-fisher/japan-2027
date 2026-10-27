const stops=[['Tokyo',35.6812,139.7671],['Kyoto',34.9858,135.7588],['Hiroshima',34.3974,132.4756],['Osaka',34.7025,135.4959]];
const map=L.map('map',{scrollWheelZoom:false}).setView([35.15,136.8],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
const icon=L.divIcon({className:'trip-marker',html:'<div style="width:18px;height:18px;background:#d94736;border:4px solid #fff;border-radius:50%;box-shadow:0 2px 8px #0005"></div>',iconSize:[18,18]});
stops.forEach(s=>L.marker([s[1],s[2]],{icon}).addTo(map).bindPopup(`<b>${s[0]}</b>`));
L.polyline(stops.map(s=>[s[1],s[2]]),{color:'#d94736',weight:4,opacity:.85,dashArray:'8 8'}).addTo(map);