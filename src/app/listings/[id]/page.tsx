// app/listings/[id]/page.tsx
import { listings, Listing } from "../../data/listings";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ListingDetailProps {
  params: { id: string };
}

export default function ListingDetail({ params }: ListingDetailProps) {
  const listing = listings.find((l) => l.id.toString() === params.id);

  if (!listing) {
    notFound(); // Показывает страницу 404, если объект не найден
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Назад
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <Image
          src={listing.image || "https://via.placeholder.com/150"} // Замените на listing.image, если есть
          alt={listing.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{listing.title}</h1>
        <p className="text-gray-700 mb-2">{listing.address}</p>
        <p className="text-blue-600 font-bold mb-4">{listing.price}</p>
        <div className="text-gray-600">
          <p>Широта: {listing.latitude}</p>
          <p>Долгота: {listing.longitude}</p>
          {/* Добавьте другие поля, если нужно, например, описание или параметры */}
        </div>
      </div>
    </div>
  );
}