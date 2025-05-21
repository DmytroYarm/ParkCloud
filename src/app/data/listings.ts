// data/listings.ts
export interface Listing {
    id: string | number;
    title: string;
    address: string;
    price: string;
    latitude: number;
    longitude: number;
    image?: string; // Опциональное поле для изображения
  }
  
  export const listings: Listing[] = [
    {
      id: 1,
      title: "Квартира на Позняках",
      price: "15 000 грн/міс",
      latitude: 50.394,
      longitude: 30.6342,
      address: "вул. Левітана, 3",
      image: "https://ireland.apollo.olxcdn.com/v1/files/ttz8zgleql802-UA/image;s=1280x960", // Замените на реальный URL
    },
    {
      id: 3,
      title: "Квартира на Позняках",
      price: "15 000 грн/міс",
      latitude: 50.394,
      longitude: 30.6342,
      address: "вул. Левітана, 3",
      image: "https://d1672trkrgk4ug.cloudfront.net/eyJrZXkiOiJvcmlnaW5hbC8zMDg3OWUwZjU0YmY0ZTJjYmU5MzJkNDk2MzM5N2ZkMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOm51bGwsImhlaWdodCI6NDUxLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      id: 4,
      title: "Квартира на Осокорках",
      price: "18 000 грн/міс",
      latitude: 50.3783,
      longitude: 30.6321,
      address: "вул. Драгоманова, 2Б",
      image: "https://d1672trkrgk4ug.cloudfront.net/eyJrZXkiOiJvcmlnaW5hbC8zMDg3OWUwZjU0YmY0ZTJjYmU5MzJkNDk2MzM5N2ZkMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOm51bGwsImhlaWdodCI6NDUxLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      id: 5,
      title: "Secret Place",
      price: "10 000 грн/міс",
      latitude: 50.46220378912052,
      longitude: 30.364354027187073,
      address: "вул. Драгоманова, 2Б",
      image: "https://d1672trkrgk4ug.cloudfront.net/eyJrZXkiOiJvcmlnaW5hbC8zMDg3OWUwZjU0YmY0ZTJjYmU5MzJkNDk2MzM5N2ZkMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOm51bGwsImhlaWdodCI6NDUxLCJmaXQiOiJjb3ZlciJ9fX0=",
    },
    {
      id: 6,
      title: "Квартира на Позняках",
      price: "15 000 грн/міс",
      latitude: 50.394,
      longitude: 30.6342,
      address: "вул. Левітана, 3",
      image: "https://ireland.apollo.olxcdn.com/v1/files/ttz8zgleql802-UA/image;s=1280x960",
    },
  ];