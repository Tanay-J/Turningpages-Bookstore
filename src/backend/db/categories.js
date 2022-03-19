import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryType: "genre",
    categoryName: "Fiction",
    categoryImg: "https://m.media-amazon.com/images/I/31fjnqvjOvL.jpg",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryType: "genre",
    categoryName: "Non-Fiction",
    categoryImg: "https://m.media-amazon.com/images/I/51ovTzIeV1L._AC_UY436_QL65_.jpg",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryType: "genre",
    categoryName: "Self-Help",
    categoryImg: "https://m.media-amazon.com/images/I/41+grDTP2FL._AC_UY436_QL65_.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryType: "special",
    categoryName: "Box-sets",
    categoryImg: "https://images-na.ssl-images-amazon.com/images/I/41x79j8N0GL._SX380_BO1,204,203,200_.jpg",
    description:
      "A box full of happiness",
  },
  {
    _id: uuid(),
    categoryType: "special",
    categoryName: "Special Editions",
    categoryImg: "https://images-na.ssl-images-amazon.com/images/I/81kBorSlT+L.jpg",
    description:
      "Rare & limited editions of your favourite books",
  },
  {
    _id: uuid(),
    categoryType: "featured",
    badge: "Just In",
    description:
      "New Arrival Books",
  },
  {
    _id: uuid(),
    categoryType: "featured",
    badge: "Popular",
    description:
      "Popular Books",
  },
];
