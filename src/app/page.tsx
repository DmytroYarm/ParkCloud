// app/page.tsx
"use client";

import { useState } from "react";
import { listings, Listing } from "./data/listings";
import dynamic from "next/dynamic";
import { ListingCard } from "./components/ListingCard";

const MapWithNoSSR = dynamic(() => import("./components/Map").then((mod) => mod.Map), {
  ssr: false,
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
    <div className="flex h-screen">
      <div className="sidebar w-full md:w-[400px] h-screen overflow-y-auto bg-white p-4">
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
      <div className="map flex-1">
        <MapWithNoSSR listings={listings} hoveredId={hoveredId} />
      </div>
    </div>
  );
}