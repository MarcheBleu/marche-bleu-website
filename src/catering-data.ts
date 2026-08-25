/**
 * Catering menus — items and images from the Shopify catering collections
 * (beverage-catering, breakfast-catering, lunch-catering; pulled 2026-08-24),
 * curated per owner. No prices shown — the team confirms details and payment
 * after an inquiry. Photos live in src/assets/catering/ (beverage items are
 * transparent PNG cutouts; food items are JPGs).
 */

export interface CateringItem {
  name: string;
  description?: string;
  image: string;
}

export interface CateringSection {
  id: string;
  title: string;
  tagline: string;
  note?: string;
  tileImage: string;
  items: CateringItem[];
}

export const CATERING: CateringSection[] = [
  {
    id: "beverage",
    title: "Beverage Catering",
    tagline: "Add a boost to the party",
    note: "Individual canned beverages also available — 20-can minimum per order",
    tileImage: "tier-beverage",
    items: [
      { name: "Drip Coffee", description: "10 servings · regular or decaf", image: "drip-coffee-10" },
      { name: "Drip Coffee — Event Size", description: "50 servings · insulated dispenser, drop-off and pick-up included", image: "drip-coffee-50" },
      { name: "Nitro Cold Brew", description: "10 servings", image: "nitro-cold-brew-10" },
      { name: "Nitro Cold Brew — Keg", description: "50 servings · corny keg and manual pump included", image: "nitro-keg-50" },
      { name: "Hibiscus Iced Tea", description: "10 servings", image: "iced-tea-hibiscus" },
      { name: "Black Iced Tea", description: "10 servings", image: "iced-tea-black" },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast Catering",
    tagline: "Start the party strong",
    tileImage: "tier-breakfast",
    items: [
      { name: "Pastry Assortment", description: "A baker's tray of croissants, pastries, and sweet treats", image: "pastry-assortment" },
      { name: "Avocado Toast Self-Serve Bundle", description: "10 servings", image: "avocado-toast-bundle" },
      { name: "Breakfast Tacos", description: "Your choice: Egg White Capri, Farmhouse LUX Sausage, Lebanese Potato, or Mediterranean Bacon", image: "tacos-bacon" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch & Dinner Catering",
    tagline: "Fuel the party",
    tileImage: "tier-lunch",
    items: [
      { name: "Turkey Avocado Cold Cuts", description: "Turkey, avocado, arugula, and sun-dried tomato on ciabatta", image: "turkey-avocado-cold-cuts" },
      { name: "Chicken Pesto Sandwich Platter", description: "Chicken, pesto, Swiss, tomato, and arugula on ciabatta", image: "chicken-pesto-catering" },
      { name: "Toasted Ham & Cheese Platter", description: "Warm pressed sandwich with deli ham, roasted tomatoes, melted mozzarella and parmesan", image: "toasted-ham-catering" },
      { name: "Chicken Caesar Wrap Platter", description: "Grilled chicken, crisp romaine, parmesan, and Caesar dressing wrapped fresh", image: "caesar-wrap-catering" },
      { name: "Chicken Caesar Salad", description: "Crisp romaine, grilled chicken, parmesan, and Caesar dressing", image: "caesar-salad-catering" },
      { name: "Walnut Goat Cheese Salad", description: "Goat cheese, strawberries, and candied walnuts with balsamic dressing", image: "goat-cheese-salad-catering" },
    ],
  },
];
