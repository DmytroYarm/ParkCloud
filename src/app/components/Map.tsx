"use client";
import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Listing } from "../data/listings";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Собственная иконка маркера
const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Активная иконка (при наведении на карточку)
const activeIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapProps {
    listings: Listing[];
    hoveredId?: string | number | null;
}

interface FlyToMarkerProps {
    listing: Listing;
    map: L.Map | null;
}

// Компонент для перемещения к маркеру
function FlyToMarker({ listing, map }: FlyToMarkerProps) {
    useEffect(() => {
        if (listing && map) {
          map.flyTo([listing.latitude, listing.longitude], 15, {
            animate: true,
            duration: 1.5
          });
        }
      }, [listing, map]);
  
  return null;
}

export const Map = ({ listings, hoveredId }: MapProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef(null);
  
  useEffect(() => {
    setIsMounted(true);
    L.Marker.prototype.options.icon = defaultIcon;
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  const hoveredListing = listings.find(listing => listing.id === hoveredId);
  
  return (
    <MapContainer
      center={[50.4, 30.6]}
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* {hoveredListing && <FlyToMarker listing={hoveredListing} map={mapRef.current} />} */}
      
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={[listing.latitude, listing.longitude]}
          icon={listing.id === hoveredId ? activeIcon : defaultIcon}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">{listing.title}</h3>
              <p>{listing.address}</p>
              <p className="text-blue-600 font-bold">{listing.price}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};