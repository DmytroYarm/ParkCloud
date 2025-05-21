// components/ListingCard.tsx
"use client";

import { Listing } from "../data/listings";
import Image from "next/image";
import Link from "next/link";

interface ListingCardProps {
  listing: Listing;
  onHover: (id: string | number) => void;
  onLeave: () => void;
}

export const ListingCard = ({ listing, onHover, onLeave }: ListingCardProps) => {
  return (
    <Link href={`/listings/${listing.id}`}>
      <div
        className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition cursor-pointer"
        onMouseEnter={() => onHover(listing.id)}
        onMouseLeave={onLeave}
      >
        <Image
          src={listing.image || "https://via.placeholder.com/150"} // Замените на listing.image, если добавите поле изображения
          alt={listing.title}
          width={150}
          height={150}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <h2 className="text-lg font-semibold">{listing.title}</h2>
        <p className="text-gray-600">{listing.address}</p>
        <p className="text-blue-600 font-bold">{listing.price}</p>
      </div>
    </Link>
  );
};