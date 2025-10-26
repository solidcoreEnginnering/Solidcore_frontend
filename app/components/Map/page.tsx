"use client";

import React from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Tooltip, useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

/* --- Country data --- */
const countries: { name: string; geoUrl: string; center: LatLngTuple }[] = [
  { name: "UAE", geoUrl: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/ARE.geo.json", center: [24.0, 54.0] },
  { name: "India", geoUrl: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/IND.geo.json", center: [21.0, 78.0] },
  { name: "Canada", geoUrl: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/CAN.geo.json", center: [56.0, -106.0] },
  { name: "United States", geoUrl: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA.geo.json", center: [39.8, -98.6] },
  { name: "United Kingdom", geoUrl: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/GBR.geo.json", center: [55.0, -3.0] },
];

/* --- Fit bounds to layers --- */
function FitBoundsToLayers({ layers }: { layers: L.Layer[] }) {
  const map = useMap();
  React.useEffect(() => {
    if (!map || layers.length === 0) return;
    const group = L.featureGroup(layers);
    map.fitBounds(group.getBounds(), { padding: [20, 20] }); // tight fit
  }, [map, layers]);
  return null;
}

/* --- Add GeoJSON layers --- */
function CountryLayersInjector({ layers }: { layers: L.Layer[] }) {
  const map = useMap();
  React.useEffect(() => {
    if (!map) return;
    layers.forEach((layer) => layer.addTo(map));
    return () => layers.forEach((layer) => map.removeLayer(layer));
  }, [map, layers]);
  return null;
}

/* --- Custom blue marker icon --- */
function createIcon(color = "#3b82f6") {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 36" fill="${color}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
            <circle cx="12" cy="9" r="2.5" fill="white"/>
           </svg>`,
    iconSize: [24, 30],
    iconAnchor: [12, 30],
    popupAnchor: [0, -30],
  });
}

/* --- Main MapSection Component --- */
export default function MapSection() {
  const [countryLayers, setCountryLayers] = React.useState<L.Layer[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;

    async function loadCountries() {
      try {
        const layers: L.Layer[] = [];
        for (const c of countries) {
          const res = await fetch(c.geoUrl);
          if (!res.ok) continue;
          const geojson = await res.json();

          const layer = L.geoJSON(geojson as any, {
            style: {
              color: "#3b82f6",
              weight: 2,
              fillColor: "#3b82f6",
              fillOpacity: 0.2,
              dashArray: "4",
              lineJoin: "round",
            },
          });

          layers.push(layer);
        }
        if (!mounted) return;
        setCountryLayers(layers);
      } catch (err) {
        console.error("Error loading country GeoJSON:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadCountries();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="w-full py-10 bg-gradient-to-b from-white to-blue-50 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 drop-shadow-lg">Highlighted Regions</h2>
        </div>

        {/* Map Wrapper */}
        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 mt-8">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            className="leaflet-container rounded-3xl"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Country polygons */}
            {countryLayers.length > 0 && <CountryLayersInjector layers={countryLayers} />}
            {!loading && countryLayers.length > 0 && <FitBoundsToLayers layers={countryLayers} />}

            {/* Markers with white country names */}
            {countries.map((c) => (
              <Marker key={c.name} position={c.center} icon={createIcon("#3b82f6")}>
                <Tooltip
                  direction="top"
                  offset={[0, -20]}
                  opacity={1}
                  permanent
                  className="flex items-center justify-center gap-2 font-semibold text-white 
                             bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                             rounded-full px-4 py-2 shadow-lg border border-blue-800
                             text-center"
                >
                  {c.name}
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
