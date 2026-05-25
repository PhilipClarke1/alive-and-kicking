// Import local images (optimized WebP)
import heroImageFile from "../assets/bostonharbor.jpeg";
import twinLobsterImg from "../assets/twinlobster.webp";
import sandwichMealImg from "../assets/lobstersandwich2.webp";
import steamedLobsterImg from "../assets/steamedLobster2.webp";
import chowderImg from "../assets/chowder2.webp";
import steamedClamsImg from "../assets/steamedClams2.webp";
import musselsImg from "../assets/mussels2.webp";
import menuImg from "../assets/menu.webp";
import menuImg1200 from "../assets/menu-1200.webp";
import menuImg800 from "../assets/menu-800.webp";
import logoImg from "../assets/akl-logo-removebg-preview.png";
import seatingImg from "../assets/outdoordining.webp";

export const heroImage = heroImageFile;
export const logo = logoImg;
export const menuImage = menuImg;
export const menuImageSrcSet = {
  small: menuImg800,
  medium: menuImg1200,
  large: menuImg,
};
export const seatingImage = seatingImg;

export const featuredItems = [
  {
    id: 1,
    name: "Twin Lobster Special",
    price: "$49.95",
    priceToGo: "$51.95",
    image: twinLobsterImg,
    description:
      "Two steamed lobsters, your pick of steamers or mussels, sweet corn on the cob. Our most popular platter.",
  },
  {
    id: 2,
    name: "The Lobster Sandwich",
    price: "$34.95",
    image: sandwichMealImg,
    description:
      "Fresh lobster meat piled high on toasted Scali bread, served with chips. The original.",
  },
  {
    id: 3,
    name: "Steamed Lobster",
    price: "$19.95",
    image: steamedLobsterImg,
    description:
      "A whole lobster, steamed. Butter on the side.",
  },
  {
    id: 4,
    name: "New England Chowders",
    price: "$12.50",
    image: chowderImg,
    description:
      "Choose from Clam Chowder, Seafood Chowder, or Lobster Bisque. Each one made from scratch daily with the freshest ingredients.",
  },
  {
    id: 5,
    name: "Steamed Clams",
    price: "$14.95",
    image: steamedClamsImg,
    description:
      "Clams steamed in garlic, butter, white wine, and lemon. Butter on the side.",
  },
  {
    id: 6,
    name: "Bowl of Mussels",
    price: "$14.95",
    image: musselsImg,
    description:
      "Mussels steamed in garlic, butter, white wine, and lemon. Butter on the side.",
  },
];

export const menuItems = [
  {
    id: 1,
    name: "Lobster Sandwich",
    price: "$34.95",
    category: ["lobster", "sandwich"],
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=300&fit=crop",
    description: "Our famous lobster sandwich, served with chips",
  },
  {
    id: 2,
    name: "Twin Lobster Special",
    price: "$49.95",
    priceToGo: "$51.95",
    category: "lobster",
    image:
      "https://images.unsplash.com/photo-1553247407-23251ce81f59?w=400&h=300&fit=crop",
    description: "2 cooked lobsters, steamers or mussels, corn on the cob",
  },
  {
    id: 3,
    name: "Steamed Lobster",
    price: "$19.95",
    category: "lobster",
    image:
      "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400&h=300&fit=crop",
    description: "Whole lobster, classically steamed",
  },
  {
    id: 4,
    name: "Crab Salad Sandwich",
    price: "$24.95",
    category: "sandwich",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=300&fit=crop",
    description: "Fresh crab salad on a roll, served with chips",
  },
  {
    id: 5,
    name: "Lobster Bisque",
    price: "$12.50",
    category: "chowder",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&h=300&fit=crop",
    description: "Rich and creamy lobster bisque",
  },
  {
    id: 6,
    name: "Clam Chowder",
    price: "$12.50",
    category: "chowder",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&h=300&fit=crop",
    description: "New England classic",
  },
  {
    id: 7,
    name: "Seafood Chowder",
    price: "$12.50",
    category: "chowder",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&h=300&fit=crop",
    description: "Mixed seafood in creamy broth",
  },
  {
    id: 9,
    name: "Bowl of Mussels",
    price: "$14.95",
    category: "seafood",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    description: "Fresh steamed mussels",
  },
  {
    id: 10,
    name: "Bowl of Steamers",
    price: "$14.95",
    category: "seafood",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    description: "Fresh steamed clams",
  },
  {
    id: 11,
    name: "Coleslaw",
    price: "$4.50",
    category: "sides",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    description: "Homemade coleslaw",
  },
  {
    id: 12,
    name: "Calamari Salad",
    price: "$9.95",
    category: "sides",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    description: "",
  },
  {
    id: 13,
    name: "Chips",
    price: "$2.00",
    category: "sides",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    description: "",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "lobster", label: "Lobster" },
  { id: "sandwich", label: "Sandwiches" },
  { id: "chowder", label: "Chowders" },
  { id: "seafood", label: "Seafood" },
  { id: "sides", label: "Sides" },
];

// Live Lobster Prices (call for current pricing — market rates fluctuate daily)
export const lobsterPrices = [];

// Fresh Seafood (per pound unless noted)
export const freshSeafood = [
  { name: "Steamers", price: "$10.95", unit: "/ lb" },
  { name: "Mussels", price: "$5.95", unit: "/ lb" },
  { name: "Cod Loins", price: "$17.95", unit: "/ lb" },
  { name: "Haddock", price: "$14.95", unit: "/ lb" },
  { name: "Salmon", price: "$15.95", unit: "/ lb" },
  { name: "Halibut", price: "$17.95", unit: "/ lb" },
  { name: "Swordfish", price: "$15.95", unit: "/ lb" },
  { name: "Scallops", price: "$24.95", unit: "/ lb" },
  { name: "Count Necks", price: "$0.95", unit: "each" },
  { name: "Oysters", price: "$1.95", unit: "each" },
  { name: "Crab Meat (1 lb container)", price: "$41", unit: "" },
];

// Frozen Seafood
export const frozenSeafood = [
  { name: "Snow Crab Clusters", price: "$19.95", unit: "each" },
  { name: "Stuffies (Qt. 2)", price: "$12.00", unit: "" },
  { name: "Crab Cakes (Qt. 3)", price: "$19.95", unit: "" },
  { name: "Bag of Shrimp (Uncooked)", price: "$23.95", unit: "" },
  { name: "Bag of Shrimp (Cooked)", price: "$24.95", unit: "" },
  { name: "Scallops Wrapped in Bacon (10 in a box)", price: "$12.95", unit: "" },
];

// Deano's Homemade Pasta
export const pastaItems = [
  { name: "Lobster Ravioli", price: "$16.95", unit: "(1 lb bag)" },
  { name: "Black Squid Ink Tagliatelle", price: "$6.95", unit: "(12 oz)" },
  { name: "Fusilli", price: "$6.95", unit: "(1 lb bag)" },
  { name: "Fig & Mascarpone Ravioli", price: "$8.95", unit: "(1 lb)" },
];

// Fresh Off the Boat (daily fresh items)
export const freshOffTheBoat = ["Salmon", "Haddock", "Scallops", "Cod"];

export const contactInfo = {
  address: "269 Putnam Ave, Cambridge, MA 02139",
  phone: "(617) 876-0451",
  hours: {
    weekday: "Mon–Sat 11am–6pm",
    sunday: "Sun 11am–4pm",
    note: "Closed Major Holidays",
  },
  detailedHours: [
    { day: "Monday", hours: "11:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "11:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "11:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "11:00 AM – 6:00 PM" },
    { day: "Friday", hours: "11:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "11:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "11:00 AM – 4:00 PM" },
  ],
  tagline: "Boston's Famous Lobster Sandwich",
  social: {
    instagram: "https://instagram.com/aliveandkickinglobsters",
    facebook: "https://www.facebook.com/p/Alive-and-Kicking-Lobsters-100068865900163/",
  },
};
