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
    labelId: "Apartments.superiorSuiteWithSeaView",
    textId: "Apartments.superiorSuiteWithSeaViewText",
    images: firstApartamentImages,
    rating: 5,
    link: "https://www.booking.com/hotel/me/apartments-tomic.sr.html",
  },
  {
    id: "deluxe-suite-with-sea-view",
    labelId: "Apartments.deluxeSuiteWithSeaView",
    textId: "Apartments.deluxeSuiteWithSeaViewText",
    images: secondApartamentImages,
    rating: 5,
    link: "https://www.booking.com/hotel/me/apartments-tomic.sr.html",
  },
  {
    id: "king-suite-with-balcony",
    labelId: "Apartments.kingSuiteWithBalcony",
    textId: "Apartments.kingSuiteWithBalconyText",
    images: thirdApartamentImages,
    rating: 5,
    link: "https://www.booking.com/hotel/me/apartments-tomic.sr.html",
  },
  {
    id: "suite-with-balcony",
    labelId: "Apartments.suiteWithBalcony",
    textId: "Apartments.suiteWithBalconyText",
    images: forthApartamentImages,
    rating: 5,
    link: "https://www.booking.com/hotel/me/apartments-tomic.sr.html",
  },
];

export default apartaments;
