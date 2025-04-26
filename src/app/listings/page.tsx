"use client";
import { useState } from 'react';
import { listings } from "../data/listings";
import dynamic from 'next/dynamic';
import { ListingCard } from "../components/ListingCard";

import "./page.css"

const MapWithNoSSR = dynamic(() => import("../components/Map").then(mod => mod.Map), {
  ssr: false
});

export default function ListingsPage() {
    const [hoveredId, setHoveredId] = useState<string | number | null>(null);

    const handleHover = (id: string | number) => {
      setHoveredId(id);
    };
    
    const handleLeave = () => {
      setHoveredId(null);
    };
  
  return (
    <div className="flex">
      <div className="sidebar">
        <div>
            <div>
                Главная
            </div>
            <div>
                Контакты
            </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Доступные объекты</h1>
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id} 
            listing={listing} 
            onHover={handleHover}
            onLeave={handleLeave}
          />
        ))}
      </div>
      <div className="map">
        <MapWithNoSSR listings={listings} hoveredId={hoveredId} />
      </div>
    </div>
  );
}