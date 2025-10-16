"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const position: [number, number] = [6.6626, 3.3249]; // Agege/Iju-Ishaga

  const vehicles: { id: number; name: string; coords: [number, number]; icon: string }[] = [
    { id: 1, name: "Bike Rider", coords: [6.664, 3.325], icon: "🛵" },
    { id: 2, name: "Mini Van", coords: [6.661, 3.321], icon: "🚙" },
    { id: 3, name: "Truck", coords: [6.665, 3.327], icon: "🚚" },
  ];

  useEffect(() => {}, []);

  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom
      className="h-full w-full z-0 rounded-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>📍 SwiftHaul Base — Agege/Iju-Ishaga</Popup>
      </Marker>

      {vehicles.map((v) => (
        <Marker key={v.id} position={v.coords}>
          <Popup>
            <div className="text-center">
              <p className="text-lg">{v.icon}</p>
              <p>{v.name}</p>
              <p className="text-sm text-gray-500">Available</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
