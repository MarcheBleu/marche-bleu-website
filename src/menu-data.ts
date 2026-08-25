/**
 * Café menu — items and descriptions mirror the live DoorDash listing
 * (scraped 2026-08-24); no prices on the site (pricing lives on DoorDash).
 * Photos come from the business's Shopify product library (src/assets/menu/,
 * one file per item slug). Per owner: items WITHOUT a photo are not shown.
 * Dropped (no photo): Drip w/ Steamed Milk, Iced Cortado, London Fog,
 * Iced French Vanilla Latte, Iced Almond Madeline Cookie Latte,
 * Iced Lavender Matcha, "Croatia" seasonal special, Bagel,
 * Avocado Breakfast Sandwich.
 */

export interface MenuItem {
  name: string;
  description?: string;
  /** filename slug in src/assets/menu/<image>.jpg */
  image: string;
}

export interface MenuSection {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
}

export const MENU: MenuSection[] = [
  {
    id: "coffee",
    title: "Coffee Drinks",
    items: [
      { name: "House Drip", description: "Our house blend, brewed fresh throughout the day", image: "house-drip" },
      { name: "Americano", description: "Espresso poured over hot water for a smooth, balanced cup", image: "americano" },
      { name: "Iced Americano", description: "Espresso poured over ice and water for a smooth, balanced cup", image: "iced-americano" },
      { name: "Cappuccino", description: "Rich espresso with airy, velvety steamed milk", image: "cappuccino" },
      { name: "Cortado", description: "Equal parts espresso and lightly steamed milk", image: "cortado" },
      { name: "Flat White", description: "Double shot of espresso with silky, lightly textured milk", image: "flat-white" },
      { name: "Latte", description: "Your everyday go-to. Steamed milk with a double shot of espresso", image: "latte" },
      { name: "Iced Latte", description: "Milk poured over ice with a double shot of espresso", image: "iced-latte" },
      { name: "Cold Brew", description: "Robust coffee steeped for a smooth, bold flavor with low acidity", image: "cold-brew" },
      { name: "Hot Chocolate", description: "Silky dark chocolate finished with whipped cream", image: "hot-chocolate" },
      { name: "Steamer", description: "Steamed milk, simple and comforting", image: "steamer" },
    ],
  },
  {
    id: "tea",
    title: "Tea Drinks",
    items: [
      { name: "Hot Tea", description: "A rotating selection of premium teas, served hot", image: "hot-tea" },
      { name: "Iced Tea", description: "Freshly brewed from our selection of premium teas", image: "iced-tea" },
      { name: "Chai", description: "Spiced chai with your choice of milk", image: "chai" },
      { name: "Iced Chai", description: "Spiced chai over ice with your choice of milk", image: "iced-chai" },
      { name: "Matcha", description: "Ceremonial grade matcha with your choice of milk", image: "matcha" },
      { name: "Iced Matcha", description: "Ceremonial grade matcha over ice with your choice of milk", image: "iced-matcha" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Drinks",
    items: [
      { name: "French Vanilla Latte", description: "Double shot of espresso with milk and our house vanilla syrup", image: "french-vanilla-latte" },
      { name: "Brown Sugar Shaken Espresso", description: "Espresso shaken with brown sugar and ice, finished with milk", image: "brown-sugar-shaken-espresso" },
      { name: "Salted Caramel Cold Brew", description: "Smooth cold brew with a swirl of salted caramel, crowned with creamy foam", image: "salted-caramel-cold-brew" },
      { name: "Sweet Cream Cold Brew", description: "Cold brew coffee topped with a layer of sweet cream", image: "sweet-cream-cold-brew" },
      { name: "Samoa Cookie Latte", description: "Caramel, toasted coconut, and chocolate with espresso and steamed milk", image: "samoa-cookie-latte" },
      { name: "Matcha Amour", description: "A soothing matcha blend with your choice of milk, served hot", image: "matcha-amour" },
      { name: "Iced Matcha Amour", description: "Our signature matcha blend, served over ice", image: "iced-matcha-amour" },
      { name: "Pistachio Honey Matcha", description: "Ceremonial grade matcha with pistachio, honey, and your choice of milk", image: "pistachio-honey-matcha" },
      { name: "Iced Pistachio Honey Matcha", description: "Matcha with pistachio and honey, served over ice", image: "iced-pistachio-honey-matcha" },
      { name: "Lavender Matcha", description: "Ceremonial grade matcha with delicate lavender and your choice of milk", image: "lavender-matcha" },
      { name: "Iced Double Strawberry Matcha", description: "Ceremonial grade matcha layered with sweet strawberry and your choice of milk", image: "iced-double-strawberry-matcha" },
      { name: "Marché Bleu Iced Tea", description: "Our signature iced tea, made your way", image: "marche-bleu-iced-tea" },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast Café",
    items: [
      { name: "Breakfast Taco", description: "Four types: Egg White Capri, Farmhouse LUX Sausage, Lebanese Potato, and Mediterranean Bacon", image: "breakfast-taco" },
      { name: "Bagel", description: "Everything, gluten free, plain, or rosemary garlic — with butter, cream cheese, honey, or hot honey", image: "bagel" },
      { name: "Egg Bites", description: "A variety of egg bites: bacon, four cheese, turkey sausage, or veggie", image: "egg-bites" },
      { name: "Avocado Toast", description: "Everything bagel spice, arugula, and tomato", image: "avocado-toast" },
      { name: "Strawberry Banana Toast", description: "Fresh strawberries and banana over cream cheese or Nutella, finished with honey", image: "strawberry-banana-toast" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch Café",
    note: "Sandwiches served with kettle chips and a pickle spear",
    items: [
      { name: "Caesar Salad", description: "Crisp romaine, grilled chicken, parmesan, and Caesar dressing", image: "caesar-salad" },
      { name: "Goat Cheese Salad", description: "Goat cheese, strawberries, and candied walnuts with balsamic dressing", image: "goat-cheese-salad" },
      { name: "Chicken Caesar Spinach Wrap", description: "Grilled chicken, crisp romaine, parmesan, and Caesar dressing wrapped fresh", image: "chicken-caesar-spinach-wrap" },
      { name: "Toasted Ham & Cheese", description: "Warm pressed sandwich with deli ham, roasted tomatoes, melted mozzarella and parmesan", image: "toasted-ham-and-cheese" },
      { name: "Chicken Pesto Sandwich", description: "Chicken, pesto, Swiss, tomato, and arugula on ciabatta", image: "chicken-pesto-sandwich" },
      { name: "Turkey Avocado Club Sandwich", description: "Turkey, avocado, arugula, and sun-dried tomato on ciabatta", image: "turkey-avocado-club" },
    ],
  },
];
