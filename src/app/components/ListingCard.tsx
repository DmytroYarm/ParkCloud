import { Listing } from "../data/listings";

interface ListingCardProps {
    listing: Listing;
    onHover: (id: string | number) => void;
    onLeave: () => void;
  }

  export const ListingCard = ({ listing, onHover, onLeave }: ListingCardProps) => {
    return (
      <div
        className="listing-card mb-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        onMouseEnter={() => onHover(listing.id)}
        onMouseLeave={() => onLeave()}
      >
        <h2 className="text-lg font-medium text-gray-800">{listing.title}</h2>
        <p className="text-gray-600">{listing.address}</p>
        <p className="price text-blue-600 font-bold mt-2">{listing.price} грн/міс</p>
      </div>
    );
  };