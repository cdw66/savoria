const featuredItems = [
  {
    tagline: "Fresh and Healthy",
    image: "/images/beet_salad.jpg",
    name: "Roasted Beet Salad",
    desc: "Roasted beets, goat cheese, candied walnuts, and mixed greens tossed in a citrus vinaigrette.",
  },
  {
    tagline: "Smoky and Savory",
    image: "/images/short_rib.jpg",
    name: "Braised Short Ribs",
    desc: "Slow-braised beef short ribs in a red wine reduction, served with creamy mashed potatoes and seasonal roasted vegetables.",
  },
  {
    tagline: "Sweet and Decadent",
    image: "/images/chocolate_lava_cake.jpg",
    name: "Chocolate Lava Cake",
    desc: "Decadent chocolate lava cake with a gooey center, served with fresh berries and whipped cream.",
  },
];

const team = [
  {
    img: "/",
    title: "Executive Chef",
    name: "Angelo Adkins",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "/",
    title: "Sous Chef",
    name: "Amanda Bonilla",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "/",
    title: "Pastry Chef",
    name: "Anisa Gallegos",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "/",
    title: "Kitchen Porter",
    name: "Anthony Porter",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const menuItems = [
  {
    id: 1,
    name: "Farmhouse Cheese Board",
    description:
      "A selection of artisanal cheeses, served with house-made preserves, honey, and freshly baked bread.",
    allergens: [],
    price: 13,
    image: "/images/cheese_board.jpg",
    category: "APPETIZERS",
  },
  {
    id: 2,
    name: "Seasonal Bruschetta",
    description:
      "Toasted baguette slices topped with a medley of fresh tomatoes, basil, garlic, and extra virgin olive oil.",
    allergens: ["Gluten"],
    price: 10,
    image: "/images/bruschetta.jpg",
    category: "APPETIZERS",
  },
  {
    id: 3,
    name: "Roasted Beet Salad",
    description:
      "Roasted beets, goat cheese, candied walnuts, and mixed greens tossed in a citrus vinaigrette.",
    allergens: ["Nuts", "Dairy"],
    price: 12,
    image: "/images/beet_salad.jpg",
    category: "APPETIZERS",
  },

  {
    id: 4,
    name: "Herb-Roasted Chicken",
    description:
      "Tender chicken breast marinated in herbs and roasted to perfection, served with roasted root vegetables and garlic mashed potatoes.",
    allergens: [],
    price: 19,
    image: "/images/roasted_chicken.jpg",
    category: "MAINS",
  },
  {
    id: 5,
    name: "Pan-Seared Salmon",
    description:
      "Pan-seared salmon fillet with lemon dill sauce, accompanied by quinoa pilaf and sautéed seasonal greens.",
    allergens: [],
    price: 22,
    image: "/images/salmon.jpg",
    category: "MAINS",
  },
  {
    id: 6,
    name: "Braised Short Ribs",
    description:
      "Slow-braised beef short ribs in a red wine reduction, served with creamy mashed potatoes and seasonal roasted vegetables.",
    allergens: [],
    price: 26,
    image: "/images/short_rib.jpg",
    category: "MAINS",
  },
  {
    id: 7,
    name: "Vegetarian Risotto",
    description:
      "Creamy risotto with seasonal vegetables, Parmesan cheese, and a touch of truffle oil.",
    allergens: ["Dairy"],
    price: 17,
    image: "/images/risotto.jpg",
    category: "MAINS",
  },

  {
    id: 8,
    name: "Grilled Ribeye Steak",
    description:
      "Juicy ribeye steak seasoned with herbs and grilled to your preference, served with herb-roasted potatoes and grilled asparagus.",
    allergens: [],
    price: 30,
    image: "/images/steak.jpg",
    category: "FROM THE FARM",
  },
  {
    id: 9,
    name: "Maple-Glazed Pork Tenderloin",
    description:
      "Tender pork tenderloin glazed with maple syrup and served with sweet potato mash and roasted Brussels sprouts.",
    allergens: [],
    price: 23,
    image: "/images/pork_tenderloin.jpg",
    category: "FROM THE FARM",
  },

  {
    id: 10,
    name: "Apple Crumble",
    description:
      "Warm apple crumble served with a scoop of vanilla ice cream and caramel drizzle.",
    allergens: ["Dairy"],
    price: 9,
    image: "/images/apple_crumble.jpg",
    category: "DESSERTS",
  },
  {
    id: 11,
    name: "Chocolate Lava Cake",
    description:
      "Decadent chocolate lava cake with a gooey center, served with fresh berries and whipped cream.",
    allergens: ["Gluten", "Dairy"],
    price: 10,
    image: "/images/chocolate_lava_cake.jpg",
    category: "DESSERTS",
  },
];

export { featuredItems, team, menuItems };
