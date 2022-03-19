import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    author: "Stephen King",
    badge: "Just In",
    binding: "Hardcover",
    categoryName: ["Fiction","Just In"],
    featured: true,
    lang: "English",
    price: "650",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kqb8pzk0/book/g/o/t/billy-summers-original-imag4c74n9trefpe.jpeg?q=70",
    title: "Billy Summers",
  },
  {
    _id: uuid(),
    author: "Heinrich Harrer",
    badge: "",
    binding: "Paperback",
    categoryName: ["Non-Fiction"],
    featured: false,
    lang: "English",
    price: "279",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/jpodaq80/book/0/7/7/seven-years-in-tibet-original-imafbuk2jtzmnnqy.jpeg?q=70",
    title: "Seven Years in Tibet",
  },
  {
    _id: uuid(),
    author: "James Clear",
    badge: "Popular",
    binding: "Paperback",
    categoryName: ["Self-Help","Popular","Non-Fiction"],
    featured: true,
    lang: "English",
    price: "378",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70",
    title: "Atomic Habits",
  },
  {
    _id: uuid(),
    author: "Morgan Housel",
    badge: "",
    binding: "Paperback",
    categoryName: ["Self-Help","Non-Fiction","Just In"],
    featured: false,
    lang: "English",
    price: "231",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kjom6q80-0/regionalbooks/o/i/t/the-psychology-of-money-original-imafvb5vbgcczykj.jpeg?q=70",
    title: "The Psychology of Money",
  },
  {
    _id: uuid(),
    author: "George Orwell",
    badge: "",
    binding: "Paperback",
    categoryName: ["Fiction"],
    featured: false,
    lang: "Marathi",
    price: "149",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/book/4/4/4/1984-original-imadajyuan6zxbwd.jpeg?q=70",
    title: "1984",
  },
  {
    _id: uuid(),
    author: "Fredrik Backman",
    badge: "Popular",
    binding: "Paperback",
    categoryName: ["Fiction","Popular"],
    featured: false,
    lang: "English",
    price: "215",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kz7bcsw0/regionalbooks/n/i/8/a-man-called-ove-original-imagb9t3thsugbsg.jpeg?q=70",
    title: "A Man Called Ove",
  },
  {
    _id: uuid(),
    author: "Ramchandra Guha",
    badge: "",
    binding: "Hardcover",
    categoryName: ["Non-Fiction"],
    featured: false,
    lang: "English",
    price: "549",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/k6pd7680/book/9/9/3/india-after-gandhi-original-imafp3uzgydsxz9r.jpeg?q=70",
    title: "India After Gandhi",
  },
];
