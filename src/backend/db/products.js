import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    author: "Shubhangi Swaroop",
    badge: "",
    binding: "Hardcover",
    categoryName: ["Fiction"],
    description:
      "A spellbinding work of literature, Latitudes of Longing follows the interconnected lives of characters searching for true intimacy. The novel sweeps across India, from an island, to a valley, a city, and a snow desert to tell a love story of epic proportions. ",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 289,
    price: "323",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/k34rki80/book/7/4/1/latitudes-of-longing-original-imafmbwejtumzhz2.jpeg?q=70",
    rating: Math.random().toFixed(1) * 4 + 1,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Latitudes of Longing",
  },
  {
    _id: uuid(),
    author: "Ruskin Bond",
    badge: "Just In",
    binding: "Hardcover",
    categoryName: ["Fiction", "Just In"],
    description:
      "The twenty-one stories in the book are the greatest pieces of fiction written by Ruskin Bond. ",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: false,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 212,
    price: "249",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/book/7/9/3/a-gathering-of-friends-original-imae5p4fy3wzs5kt.jpeg?q=70",
    rating: Math.random().toFixed(1) * 3 + 2,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "A Gathering of Friends",
  },
  {
    _id: uuid(),
    author: "Stephen King",
    badge: "",
    binding: "Paperback",
    categoryName: ["Fiction"],
    description:
      "The most satisfying tale of unjust imprisonment and offbeat escape since The Count of Monte Cristo.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: false,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 221,
    price: "278",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kfoapow0/book/4/9/4/rita-hayworth-and-shawshank-redemption-original-imafw2rydzkzeshb.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Rita Hayworth and Shawshank Redemption",
  },
  {
    _id: uuid(),
    author: "Toshikazu Kawaguchi",
    badge: "Popular",
    binding: "Paperback",
    categoryName: ["Fiction", "Popular"],
    description:
      " What would you change if you could go back in time? In a small back alley in Tokyo, there is a caf?? which has been serving carefully brewed coffee for more than one hundred years. But this coffee shop offers its customers a unique experience: the chance to travel back in time.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 279,
    price: "299",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/k0e66q80/book/5/8/1/before-the-coffee-gets-cold-original-imafk7gcgpapjytm.jpeg?q=70",
    rating: Math.random().toFixed(1) * 4 + 1,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Before the Coffee Gets Cold",
  },
  {
    _id: uuid(),
    author: "Jawaharlal Nehru",
    badge: "",
    binding: "Hardcover",
    categoryName: ["Non-Fiction"],
    description:
      "The Discovery of India is an honor paid to the rich cultural heritage of India, its history and its philosophy as seen through the eyes of a patriot fighting for the independence of his country.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 643,
    price: "499",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/krp94sw0/book/b/g/p/the-discovery-of-india-original-imag5fwxqgpwe5gh.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "The Discovery of India",
  },
  {
    _id: uuid(),
    author: "William Dalrymple",
    badge: "",
    binding: "Paperback",
    categoryName: ["Non-Fiction"],
    description:
      "Sparkling with irrepressible wit, City of Djinns peels back the layers of Delhi's centuries-old history, revealing an extraordinary array of characters along the way-from eunuchs to descendants of great Moguls.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 324,
    price: "799",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kj0bp8w0-0/book/h/3/h/city-of-djinns-original-imafyzyruhbdddp9.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "City of Djinns",
  },
  {
    _id: uuid(),
    author: "Fredrik Backman",
    badge: "Popular",
    binding: "Paperback",
    categoryName: ["Fiction", "Popular"],
    description:
      "A grumpy yet loveable man finds his solitary world turned on its head when a boisterous young family moves in next door. ",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 299,
    price: "215",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kz7bcsw0/regionalbooks/n/i/8/a-man-called-ove-original-imagb9t3thsugbsg.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "A Man Called Ove",
  },
  {
    _id: uuid(),
    author: "Suketu Mehta",
    badge: "",
    binding: "Paperback",
    categoryName: ["Non-Fiction"],
    description:
      "A native of Bombay, Suketu Mehta gives us an insider???s view of this stunning metropolis. He approaches the city from unexpected angles, taking us into the criminal underworld of rival Muslim and Hindu gangs; following the life of a bar dancer raised amid poverty and abuse",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 331,
    price: "349",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kk1h5e80/book/f/8/j/maximum-city-original-imafzgzye8ygfqjz.jpeg?q=70",
    rating: Math.random().toFixed(1) * 4 + 1,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Maximum City",
  },

  {
    _id: uuid(),
    author: "Jim Corbett",
    badge: "",
    binding: "Hardcover",
    categoryName: ["Non-Fiction"],
    description:
      "was an Anglo-Indian hunter and tracker-turned conservationist, author and naturalist, famous for hunting a large number of man-eating tigers and leopards in India. He played a key role in creating a national reserve for the endangered Bengal tiger in what is now Uttarakhand. In 1957, the national park was renamed Jim Corbett National Park in his honour.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 201,
    price: "212",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kz5vwy80/book/8/k/c/my-india-original-imagb8ryjhgkshgm.jpeg?q=70",
    rating: Math.random().toFixed(1) * 3 + 2,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "My India",
  },
  {
    _id: uuid(),
    author: "Walter Isaacson",
    badge: "",
    binding: "Hardcover",
    categoryName: ["Non-Fiction"],
    description:
      "Walter Isaacson's 'enthralling' (The New Yorker) worldwide bestselling biography of Apple cofounder Steve Jobs. Based on more than forty interviews with Steve Jobs conducted over two years--as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: false,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 512,
    price: "599",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/km3s1ow0/regionalbooks/j/f/g/steve-jobs-the-exclusive-biography-paperback-original-imagf2u77ggte8cd.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Steve Jobs",
  },
  {
    _id: uuid(),
    author: "Ruskin Bond",
    badge: "",
    binding: "Hardcover",
    categoryName: ["Non-Fiction"],
    description:
      "Over sixty years, for numerous readers???of all ages; in big cities, small towns and little hamlets???Ruskin Bond has been the best kind of companion. He has entertained, charmed and occasionally spooked us with his books and stories and opened our eyes to the beauty of the everyday and the natural world. He has made us smile when our spirits are low and steadied us when we???ve stumbled. Now, in this brilliantly readable autobiography???his book of books???one of India???s greatest writers shows us the roots of everything he has written.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 348,
    price: "399",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kpydrbk0/book/i/l/y/lone-fox-dancing-original-imag43y6sayj3wug.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Lone Fox Dancing",
  },

  {
    _id: uuid(),
    author: "Stephen King",
    badge: "Just In",
    binding: "Hardcover",
    categoryName: ["Fiction", "Just In"],
    description:
      "Billy Summers is a man in a room with a gun. He's a killer for hire and the best in the business. But he'll do the job only if the target is a truly bad guy. And now Billy wants out. But first there is one last hit. Billy is among the best snipers in the world, a decorated Iraq war vet, a Houdini when it comes to vanishing after the job is done. So what could possibly go wrong? How about everything",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: true,
    inStock: true,
    lang: "English",
    pages: 429,
    price: "650",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kqb8pzk0/book/g/o/t/billy-summers-original-imag4c74n9trefpe.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Billy Summers",
  },
  {
    _id: uuid(),
    author: "Heinrich Harrer",
    badge: "",
    binding: "Paperback",
    categoryName: ["Non-Fiction"],
    description:
      "Recounts how the author, an Austrian, escaped from an English internment camp in India in 1943 and spent the next seven years in Tibet, observing its social practices, religion, politics, and people.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: false,
    lang: "English",
    pages: 323,
    price: "279",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/jpodaq80/book/0/7/7/seven-years-in-tibet-original-imafbuk2jtzmnnqy.jpeg?q=70",
    rating: Math.random().toFixed(1) * 4 + 1,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Seven Years in Tibet",
  },
  {
    _id: uuid(),
    author: "James Clear",
    badge: "Popular",
    binding: "Paperback",
    categoryName: ["Self-Help", "Popular", "Non-Fiction"],
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: true,
    inStock: true,
    lang: "English",
    pages: 256,
    price: "378",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70",
    rating: Math.random().toFixed(1) * 1 + 4,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Atomic Habits",
  },
  {
    _id: uuid(),
    author: "Morgan Housel",
    badge: "Just In",
    binding: "Paperback",
    categoryName: ["Self-Help", "Non-Fiction", "Just In"],
    description:
      "Doing well with money isn???t necessarily about what you know. It???s about how you behave. And behavior is hard to teach, even to really smart people.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: false,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 268,
    price: "231",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/kjom6q80-0/regionalbooks/o/i/t/the-psychology-of-money-original-imafvb5vbgcczykj.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "The Psychology of Money",
  },
  {
    _id: uuid(),
    author: "George Orwell",
    badge: "",
    binding: "Paperback",
    categoryName: ["Fiction"],
    description: "",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: false,
    lang: "Marathi",
    pages: 189,
    price: "149",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/book/4/4/4/1984-original-imadajyuan6zxbwd.jpeg?q=70",
    rating: Math.random().toFixed(1) * 4 + 1,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "1984",
  },
  {
    _id: uuid(),
    author: "Ramchandra Guha",
    badge: "",
    binding: "Hardcover",
    categoryName: ["Non-Fiction"],
    description:
      "A magisterial account of the pains, the struggles, the humiliations, and the glories of the world's largest and least likely democracy, Ramachandra Guha's India After Gandhi is a breathtaking chronicle of the brutal conflicts that have rocked a giant nation and the extraordinary factors that have held it together.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 582,
    price: "549",
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/k6pd7680/book/9/9/3/india-after-gandhi-original-imafp3uzgydsxz9r.jpeg?q=70",
    rating: Math.random().toFixed(1) * 1 + 4,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "India After Gandhi",
  },
  {
    _id: uuid(),
    author: "C. S. Lewis",
    badge: "",
    binding: "Paperback",
    categoryName: ["Fiction", "Box-sets"],
    description:
      " The Chronicles of Narnia Box Set is a book-set of the fantasy adventure for children by C. S. Lewis. It narrates the fun and adventure that a bunch of kids come across in the magical land of Narnia. The book also has illustrations by Pauline Baynes.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 1004,
    price: "1274",
    productImg:
      "https://rukminim1.flixcart.com/image/832/832/jmz7csw0/book/5/3/3/chronicles-of-narnia-box-set-original-imaf9rhbthvwcefx.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Chronicles of Narnia - Box Set",
  },
  {
    _id: uuid(),
    author: "Multiple",
    badge: "",
    binding: "Paperback",
    categoryName: ["Non-Fiction", "Box-sets"],
    description:
      "This six-book Delhi 6 set-three anthologies, two city biographies and one history-seeks explore this fascinating city which has stood on the banks of the Yamuna since time immemorial. A long list of authors-including the legendary Delhi chronicler Khushwant Singh-map the city's different worlds, its extraordinary aspirations, its unique relationship with power and its glorious past and rambunctious present.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 1500,
    price: "1400",
    productImg:
      "https://rukminim1.flixcart.com/image/832/832/k20r8nk0/book/0/7/2/the-delhi-6-box-set-original-imafhgskzrpfxazh.jpeg?q=70",
    rating: Math.random().toFixed(1) * 4 + 1,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "The Delhi 6 - Box Set",
  },
  {
    _id: uuid(),
    author: "Stephen King",
    badge: "Rare Find",
    binding: "Hardcover",
    categoryName: ["Fiction", "Special Editions"],
    description:
      "A boy who is vested with special powers and can see what not everybody else can, The Shining is a story which will leave feeling dreaded when you check into a hotel.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 524,
    price: "1250",
    productImg:
      "https://rukminim1.flixcart.com/image/832/832/kzfvzww0/book/8/g/f/the-shining-original-imagbgc8ptveggxf.jpeg?q=70",
    rating: Math.random().toFixed(1) * 2 + 3,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "The Shining - Rare Edition",
  },
  {
    _id: uuid(),
    author: "Charles Allen",
    badge: "Rare Find",
    binding: "Paperback",
    categoryName: ["Non-Fiction", "Special Editions"],
    description:
      "Born the son of the Mauryan emperor Bindusara, the grandson of Chandragupta Maurya himself, Ashoka was always bound for greatness. This book showcases the history of one of India's greatest kings, and portrays the India of his time and the changes he brought forth by his conversion.",
    discount: Math.floor(Math.random() * 21) + 5,
    fastDelivery: true,
    featured: false,
    inStock: true,
    lang: "English",
    pages: 480,
    price: "599",
    productImg:
      "https://rukminim1.flixcart.com/image/832/832/l1nwnm80/book/c/w/f/ashoka-original-imagd5t3mvgu6cvz.jpeg?q=70",
    rating: Math.random().toFixed(1) * 1 + 4,
    reviews: Math.floor(Math.random() * 1000) + 100,
    title: "Ashoka",
  },
];
