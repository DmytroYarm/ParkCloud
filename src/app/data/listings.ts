export interface Listing {
    id: string | number; // В зависимости от типа ваших идентификаторов
    title: string;
    address: string;
    price: string;
    latitude: number;
    longitude: number;
    // другие поля, которые могут быть у вас
  }
  
  export const listings: Listing[] = [
    {
        id: 1,
        title: "Квартира на Позняках",
        price: "15 000 грн/міс",
        latitude: 50.3940,
        longitude: 30.6342,
        address: "вул. Левітана, 3",
    },
    {
        id: 2,
        title: "Квартира на Осокорках",
        price: "18 000 грн/міс",
        latitude: 50.3783,
        longitude: 30.6321,
        address: "вул. Драгоманова, 2Б",
    },
    {
        id: 7,
        title: "Secret Place",
        price: "10 000 грн/міс",
        latitude: 50.46220378912052, 
        longitude: 30.364354027187073,
        address: "вул. Драгоманова, 2Б",
    },
    {
        id: 3,
        title: "Квартира на Позняках",
        price: "15 000 грн/міс",
        latitude: 50.3940,
        longitude: 30.6342,
        address: "вул. Левітана, 3",
    },
    {
        id: 4,
        title: "Квартира на Осокорках",
        price: "18 000 грн/міс",
        latitude: 50.3783,
        longitude: 30.6321,
        address: "вул. Драгоманова, 2Б",
    },
    {
        id: 5,
        title: "Secret Place",
        price: "10 000 грн/міс",
        latitude: 50.46220378912052, 
        longitude: 30.364354027187073,
        address: "вул. Драгоманова, 2Б",
    },
    {
        id: 6,
        title: "Квартира на Позняках",
        price: "15 000 грн/міс",
        latitude: 50.3940,
        longitude: 30.6342,
        address: "вул. Левітана, 3",
    },
    {
        id: 8,
        title: "Квартира на Осокорках",
        price: "18 000 грн/міс",
        latitude: 50.3783,
        longitude: 30.6321,
        address: "вул. Драгоманова, 2Б",
    },
    {
        id: 9,
        title: "Secret Place",
        price: "10 000 грн/міс",
        latitude: 50.46220378912052, 
        longitude: 30.364354027187073,
        address: "вул. Драгоманова, 2Б",
    },
    {
        id: 10,
        title: "Квартира на Позняках",
        price: "15 000 грн/міс",
        latitude: 50.3940,
        longitude: 30.6342,
        address: "вул. Левітана, 3",
    },
    {
        id: 11,
        title: "Квартира на Осокорках",
        price: "18 000 грн/міс",
        latitude: 50.3783,
        longitude: 30.6321,
        address: "вул. Драгоманова, 2Б",
    },
    {
        id: 12,
        title: "Secret Place",
        price: "10 000 грн/міс",
        latitude: 50.46220378912052, 
        longitude: 30.364354027187073,
        address: "вул. Драгоманова, 2Б",
    },
];
  