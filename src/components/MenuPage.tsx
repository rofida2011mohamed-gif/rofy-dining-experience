// Menu item images
import bruschetteImage from "@/assets/bruschetta.jpg";
import caesarSaladImage from "@/assets/caesar-salad.jpg";
import frenchOnionSoupImage from "@/assets/french-onion-soup.jpg";
import garlicBreadImage from "@/assets/garlic-bread.jpg";
import ribeyeImage from "@/assets/ribeye-steak.jpg";
import salmonImage from "@/assets/salmon.jpg";
import pizzaImage from "@/assets/margherita-pizza.jpg";
import alfredoImage from "@/assets/chicken-alfredo.jpg";
import lambImage from "@/assets/lamb-chops.jpg";
import chocolateCakeImage from "@/assets/chocolate-lava-cake.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import tiramisuImage from "@/assets/tiramisu.jpg";
import iceCreamImage from "@/assets/ice-cream-trio.jpg";
import espressoImage from "@/assets/espresso.jpg";
import orangeJuiceImage from "@/assets/orange-juice.jpg";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const MenuPage = () => {
  const menuCategories = {
    starters: [
      {
        id: "bruschetta",
        name: "Bruschetta",
        price: 8,
        description: "Fresh tomatoes, basil, and mozzarella on toasted artisan bread",
        image: bruschetteImage,
      },
      {
        id: "caesar-salad",
        name: "Caesar Salad",
        price: 10,
        description: "Crisp romaine lettuce, parmesan, croutons, and house caesar dressing",
        image: caesarSaladImage,
      },
      {
        id: "french-onion-soup",
        name: "French Onion Soup",
        price: 9,
        description: "Rich caramelized onion broth topped with melted gruyere cheese",
        image: frenchOnionSoupImage,
      },
      {
        id: "garlic-bread",
        name: "Garlic Bread",
        price: 6,
        description: "Artisanal bread with roasted garlic, herbs, and butter",
        image: garlicBreadImage,
      },
    ],
    mains: [
      {
        id: "ribeye-steak",
        name: "Grilled Ribeye Steak",
        price: 30,
        description: "Prime cut ribeye grilled to perfection with seasonal vegetables",
        image: ribeyeImage,
      },
      {
        id: "salmon",
        name: "Pan-Seared Salmon",
        price: 25,
        description: "Atlantic salmon with lemon herb sauce and asparagus",
        image: salmonImage,
      },
      {
        id: "margherita-pizza",
        name: "Margherita Pizza",
        price: 14,
        description: "Wood-fired pizza with fresh mozzarella, basil, and tomato sauce",
        image: pizzaImage,
      },
      {
        id: "chicken-alfredo",
        name: "Chicken Alfredo Pasta",
        price: 18,
        description: "Tender chicken breast with fettuccine in rich alfredo sauce",
        image: alfredoImage,
      },
      {
        id: "lamb-chops",
        name: "Grilled Lamb Chops",
        price: 32,
        description: "Herb-crusted lamb chops with mint sauce and roasted potatoes",
        image: lambImage,
      },
    ],
    desserts: [
      {
        id: "chocolate-lava",
        name: "Chocolate Lava Cake",
        price: 9,
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        image: chocolateCakeImage,
      },
      {
        id: "cheesecake",
        name: "New York Cheesecake",
        price: 8,
        description: "Classic cheesecake with graham cracker crust and fresh berries",
        image: cheesecakeImage,
      },
      {
        id: "tiramisu",
        name: "Tiramisu",
        price: 10,
        description: "Traditional Italian dessert with coffee-soaked ladyfingers",
        image: tiramisuImage,
      },
      {
        id: "ice-cream",
        name: "Ice Cream Trio",
        price: 7,
        description: "Vanilla, chocolate, and strawberry ice cream with fresh berries",
        image: iceCreamImage,
      },
    ],
    drinks: [
      {
        id: "espresso",
        name: "Espresso",
        price: 4,
        description: "Rich, full-bodied espresso with perfect crema",
        image: espressoImage,
      },
      {
        id: "orange-juice",
        name: "Fresh Orange Juice",
        price: 6,
        description: "Freshly squeezed orange juice with natural pulp",
        image: orangeJuiceImage,
      },
    ],
  };

  const MenuCard = ({ item }: { item: MenuItem }) => (
    <div className="menu-card rounded-lg overflow-hidden group">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-display font-semibold text-foreground">
            {item.name}
          </h3>
          <span className="text-xl font-bold text-gold">${item.price}</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  const MenuSection = ({ title, items }: { title: string; items: MenuItem[] }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-display font-bold mb-8 text-center hero-text">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 hero-text">
              Our Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted dishes using the finest ingredients, 
              prepared with passion and attention to detail
            </p>
          </div>

          <MenuSection title="Starters" items={menuCategories.starters} />
          <MenuSection title="Main Dishes" items={menuCategories.mains} />
          <MenuSection title="Desserts" items={menuCategories.desserts} />
          <MenuSection title="Drinks" items={menuCategories.drinks} />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;