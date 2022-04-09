import { getFolderImages } from "./util/data";

// Require folder apartament images
// Make sure to only pass the folder name
const firstApartamentImages = getFolderImages("firstApartamentImages");
const secondApartamentImages = getFolderImages("secondApartamentImages");
const thirdApartamentImages = getFolderImages("thirdApartamentImages");
const forthApartamentImages = getFolderImages("forthApartamentImages");

const apartaments = [
  {
    id: "superior-suite-with-sea-view",
    label: "Superior Suite with Sea View",
    text: "This spacious apartment offers a bedroom, living room with a kitchen, bathroom, and a balcony with a sea view. The living room is equipped with air conditioning and a flat-screen TV. The kitchen has all the necessary amenities including a refrigerator, electric stove, and a dishwasher. Bathroom is equipped with washing machine as well as a hairdryer. Towels, bed linen, iron with ironing board, and a personal safe are provided.",
    images: firstApartamentImages,
    rating: 5,
    link: "https://www.booking.com/hotel/me/apartments-tomic.sr.html",
  },
  {
    id: "deluxe-suite-with-sea-view",
    label: "Deluxe Suite with Sea View",
    text: "This spacious apartment offers a bedroom, living room with a kitchen, bathroom, and a balcony with a sea view. The living room is equipped with air conditioning and a flat-screen TV. The kitchen has all the necessary amenities including a refrigerator, electric stove, and a dishwasher. Bathroom is equipped with washing machine as well as a hairdryer. Towels, bed linen, iron with ironing board, and a personal safe are provided.",
    images: secondApartamentImages,
    rating: 5,
    link: "https://www.booking.com/hotel/me/apartments-tomic.sr.html",
  },
  {
    id: "king-suite-with-balcony",
    label: "King Suite with Balcony",
    text: "This cozy apartment offers a bedroom, living room with a kitchen, bathroom, and a balcony without a sea view. The living room is equipped with air conditioning and a flat-screen TV. The kitchen has all the necessary amenities including a refrigerator, electric stove, and a dishwasher. Bathroom is equipped with washing machine as well as a hairdryer. Towels, bed linen, iron with ironing board, and a personal safe are provided.",
    images: thirdApartamentImages,
    rating: 5,
    link: "https://www.booking.com/hotel/me/apartments-tomic.sr.html",
  },
  {
    id: "suite-with-balcony",
    label: "Suite with Balcony",
    text: "This cozy apartment offers a bedroom, living room with a kitchen, bathroom, and a balcony without a sea view. The living room is equipped with air conditioning and a flat-screen TV. The kitchen has all the necessary amenities including a refrigerator, electric stove, and a dishwasher. Bathroom is equipped with washing machine as well as a hairdryer. Towels, bed linen, iron with ironing board, and a personal safe are provided.",
    images: forthApartamentImages,
    rating: 5,
    link: "https://www.booking.com/hotel/me/apartments-tomic.sr.html",
  },
];

export default apartaments;
