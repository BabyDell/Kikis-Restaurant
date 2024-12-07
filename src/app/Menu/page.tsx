'use client'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import AnimatedHeader from "../Components/animatedHeader";

type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type MenuType = "dinner" | "drink" | "happyHour";

const dinnerMenu: MenuSection[] = [
  {
    title: "Starters",
    items: [
      {
        name: "Homemade Focaccia",
        description: "Roasted garlic rosemary oil, sea salt",
        price: "$8",
      },
      {
        name: "Honeynut Squash",
        description: "Hazelnuts, bread crumbs, Beemster XO, garlic",
        price: "$22",
      },
      {
        name: "Summer Corn Arancini",
        description: "Sweet corn, mozzarella, parmesan, scallion",
        price: "$3/ea",
      },
      {
        name: "Half Shell Scallop Crudo",
        description: "Braised Meatballs",
        price: "$4",
      },
      {
        name: "Braised Meatballs",
        description:
          "Prime beef, heritage pork, tomato sugo, fior di latte, basil, grilled focaccia",
        price: "$26",
      },
      {
        name: "Wagyu Beef Carpaccio",
        description:
          "Smoked aioli, capers, arugula, shaved red onion, parmesan",
        price: "$28",
      },
      {
        name: "Skull Island Tiger Prawns",
        description: "Lightly grilled with green goddess dressing",
        price: "Market Price",
      },
    ],
  },
  {
    title: "Salads",
    items: [
      {
        name: "Tricolore",
        description: "Arugula, radicchio, endive, lemon, olive oil, parmesan",
        price: "$18",
      },
      {
        name: "Caesar",
        description:
          "Little gem, focaccia croutons, parmesan, lemon, anchovy, garlic",
        price: "$20",
      },
      {
        name: "Heirloom Tomato Carpaccio",
        description:
          "Olio verde, siberian osetra, basil, chamomile-lemon verbena-thyme",
        price: "$23",
      },
      {
        name: "Market Plums",
        description: "Pinenut cream, Italian chili crisp, basil",
        price: "$25",
      },
    ],
  },
  {
    title: "Pastas",
    items: [
      {
        name: "Bucatini Cacio e Pepe",
        description: "Black pepper, pecorino, parmesan",
        price: "$23",
      },
      {
        name: "Rigatoni Bolognese",
        description: "Parmesan, pancetta, beef, tomato",
        price: "$28",
      },
      {
        name: "Spaghetti and Meatballs",
        description: "Classic tomato sauce, parmesan, basil",
        price: "$29",
      },
      {
        name: "Linguini and Clams",
        description: "Garlic, white wine, lemon, chile, butter",
        price: "$32",
      },
      {
        name: "Shrimp Penne Alla Vodka",
        description: "Creamy tomato sauce, vodka, chile flake, basil, parmesan",
        price: "$34",
      },
    ],
  },
  {
    title: "Pizzas",
    items: [
      {
        name: "Margherita",
        description: "Tomato, fior di latte, basil, olive oil",
        price: "$23",
      },
      {
        name: "Pepperoni",
        description:
          "Ezzo pepperoni, chile honey, parmesan, mozzarella, tomato sauce",
        price: "$26",
      },
      {
        name: "Market Leek",
        description: "Sunchoke chips, prosciutto, teleggio cream",
        price: "$25",
      },
      {
        name: "The Tony",
        description:
          "Tomato sauce, Italian pork sausage, sweet onion, roasted Italian peppers, mozzarella",
        price: "$28",
      },
    ],
  },
  {
    title: "Entrees",
    items: [
      {
        name: "Grilled Whole Branzino",
        description: "Fennel, scallion, garlic, lemon, broken herb salsa",
        price: "$47",
      },
      {
        name: "Summer Squash Risotto",
        description: "Pesto, zucchini, pecorino, pine nut",
        price: "$32",
      },
      {
        name: "Grilled Avocado",
        description: "Salsa verde, white bean puree, fried Roman artichokes",
        price: "$30",
      },
      {
        name: "Hanger Steak",
        description:
          "Fried maitake mushrooms, smoked cippolini onion, crispy potatoes",
        price: "$45",
      },
      {
        name: "Chicken Parmesan",
        description:
          "Marinara, mozzarella, panko breadcrumbs, parmesan, lemon zest, chile",
        price: "Half Portion (one side): $36 | Full Portion (two sides): $50",
      },
    ],
  },
  {
    title: "Dipping Sauces",
    items: [
      {
        name: "Calabrian Chile Diavola",
        description: "Spicy dipping sauce",
        price: "$2/ea",
      },
      {
        name: "Salsa Verde",
        description: "Herb and garlic dipping sauce",
        price: "$2/ea",
      },
      {
        name: "Fennel Pollen",
        description: "Flavored dipping sauce",
        price: "$2/ea",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Market Vegetables",
        description: "Seasonal vegetables",
        price: "$9",
      },
      {
        name: "Sautéed Spinach",
        description: "With garlic and olive oil",
        price: "$9",
      },
      {
        name: "Fennel Pollen Potatoes",
        description: "Roasted with fennel pollen",
        price: "$9",
      },
    ],
  },
];

const drinkMenu: MenuSection[] = [
  {
    title: "Craft Cocktails",
    items: [
      {
        name: "Crop Top Italiano",
        description:
          "Amaro Montenegro, Select Aperitivo, Ford's Gin, Pamplemousse, Lemon",
        price: "$16",
      },
      {
        name: "A Perfect Palm Springs",
        description: "No description provided",
        price: "$16",
      },
      {
        name: "Paper Plane",
        description:
          "Amaro Montenegro, Select Aperitivo, Ford's Gin, Pamplemousse, Lemon",
        price: "$16",
      },
      {
        name: "Sicilian Necktie",
        description:
          "Bordiga Bianca Vermouth, Mal Bien Mezcal, Lemon, Cucumbers, Salt, Pepper & Spice",
        price: "$16",
      },
      {
        name: "Gordon’s Cup",
        description: "No description provided",
        price: "$16",
      },
      {
        name: "Spicy Margarita",
        description: "A spicy version of a classic margarita",
        price: "$16",
      },
      {
        name: "Cosmo Bianco Frez",
        description:
          "Martini & Rossi Blanc Vermouth, Absolut Vodka, Cointreau, Lemon, White Cranberry Juice",
        price: "$16",
      },
      {
        name: "Kiki Negroni",
        description:
          "Contratto Aperitivo, Antica Carpano Sweet Vermouth, Ford's Gin",
        price: "$16",
      },
      {
        name: "401K Negroni",
        description: "A variation on a classic Negroni",
        price: "$16",
      },
      {
        name: "Parasol Spritz",
        description:
          "Aperol, Pineapple Amaro, Polish Vodka, Fresh Lemon, Bubbles",
        price: "$16",
      },
      {
        name: "The Blonde Negroni",
        description: "Tanqueray Gin, Sirene Aperitivo Bianco, Vino Falanghina",
        price: "$16",
      },
      {
        name: "Old Fashioned Date with Monica Bellucci",
        description:
          "Dattier JRM Date Whiskey, Rye, Paolo Lazzaroni Fernet, Coco Bitters, Monica's Kiss",
        price: "$16",
      },
      {
        name: "2nd Best Martini in the World!",
        description: "Old World Pour, a Splash of New, Basil, Dash of Vermouth",
        price: "$16",
      },
      {
        name: "Espresso Martinetto",
        description:
          "Polish Vodka, Mr. Black, Kiki's Italian Amaro, Espresso, Mauritius Cane Sugar",
        price: "$16",
      },
      {
        name: "Evergreen Grasshopper",
        description:
          "Mount Gay Eclipse Barbados Rum, Centum Herb’s, Matcha Mint Cordial, Coco'oat Milk, Himalayan Saline",
        price: "$16",
      },
    ],
  },
  {
    title: "Non-Alcoholic Cocktails",
    items: [
      {
        name: "Felicita",
        description:
          "Blue Spirulina, Peach Ginger Tea, Elderflower Tonic, Nori Stars, Coconut Water, Aloe with Pulp",
        price: "$16",
      },
      {
        name: "The Emperor's Nu’groni",
        description:
          "Three Spirit Livener Elixir, Ritual Aperitif, Kiki's Black Tea Bitters, Himalayan Saline",
        price: "$16",
      },
    ],
  },
  {
    title: "Sparkling Wines",
    items: [
      {
        name: "Pizzolato Sparkling Brut Rosé",
        description: "Veneto, Italy",
        price: "$13/$52",
      },
      {
        name: "Oro Prosecco",
        description: "Piedimonte, Italy",
        price: "$12/$44",
      },
      {
        name: "Ca' Del Bosco Cuvée Prestige Franciacorta NV",
        description: "Franciacorta, Italy",
        price: "$16/$60",
      },
    ],
  },
  {
    title: "Rosé Wines",
    items: [
      {
        name: "Oro Rosé",
        description: "Venice, Italy",
        price: "$12/$45",
      },
      {
        name: "Familia Pasqua 11 Minutes Rosato",
        description: "Veneto, Italy",
        price: "$13/$52",
      },
    ],
  },
  {
    title: "White Wines",
    items: [
      {
        name: "Scarapetta Frico Bianco",
        description: "Venezie, Italy",
        price: "$12/$44",
      },
      {
        name: "Argiolas Costamolino Vermentino",
        description: "Sardinia, Italy",
        price: "$13/$52",
      },
      {
        name: "Oro Pinot Grigio",
        description: "Venice, Italy",
        price: "$12/$44",
      },
      {
        name: "Marco Bofante Arneis",
        description: "Piedimonte, Italy",
        price: "$16/$64",
      },
      {
        name: "Cantina Kurtatsch Sauvignon Blanc",
        description: "Alto Adige, Italy",
        price: "$16/$60",
      },
      {
        name: "Pash Chardonnay",
        description: "Napa Valley, USA",
        price: "$19/$80",
      },
    ],
  },
  {
    title: "Red Wines",
    items: [
      {
        name: "Pinot Project Pinot Noir",
        description: "North Coast, California",
        price: "$12/$44",
      },
      {
        name: "Vigneti Del Sole Montepulciano d'Abruzzo",
        description: "Abruzzo, Italy",
        price: "$12/$45",
      },
      {
        name: "Bel Poggio di Paolo Cilieglio - Super Tuscan",
        description: "No specific origin provided",
        price: "$16/$60",
      },
      {
        name: "Masso Antico Primitivo",
        description: "Salento Puglia, Italy",
        price: "$16/$64",
      },
      {
        name: "Marco Bonfante Barbaresco",
        description: "Piedimonte, Italy",
        price: "$19/$80",
      },
      {
        name: "Pash Pinot Noir",
        description: "Venice, Italy",
        price: "$16/$64",
      },
      {
        name: "Pash Cabernet",
        description: "Napa Valley, USA",
        price: "$19/$80",
      },
      {
        name: "Regaleali Nero d'Avola",
        description: "Sicily, Italy",
        price: "$16/$64",
      },
      {
        name: "Capolino Perlingieri Brizio Aglianico",
        description: "Campania, Italy",
        price: "$19/$80",
      },
      {
        name: "Trentadue La Storia Petite Sirah",
        description: "Alexander Valley, Sonoma",
        price: "$19/$80",
      },
      {
        name: "Fratelli Serio & Battista Borgogno Barolo",
        description: "Piemonte, Italy",
        price: "$16/$64",
      },
      {
        name: "Martinelli Bella Vigne Pinot Noir",
        description: "Sonoma Coast, California",
        price: "$19/$80",
      },
      {
        name: "Le Ragose Amarone della Valpolicella",
        description: "Veneto, Italy",
        price: "$16/$64",
      },
      {
        name: "Trefethen Dragon's Tooth Red Blend",
        description: "Napa Valley, California",
        price: "$16/$64",
      },
      {
        name: "Chianti Classico Reserve Brancaia",
        description: "Tuscany, Italy",
        price: "$19/$80",
      },
      {
        name: "Tenute San Guido Guidalberto - Super Tuscan",
        description: "Italy",
        price: "$19/$80",
      },
      {
        name: "Daione Taurasi",
        description: "Naples, Italy",
        price: "$19/$80",
      },
      {
        name: "Donatella Cinelli Colombini Brunello di Montalcino",
        description: "Tuscany, Italy",
        price: "$19/$80",
      },
    ],
  },
  {
    title: "Beers",
    items: [
      {
        name: "Ace Pineapple",
        description: "No description provided",
        price: "$13/$52",
      },
      {
        name: "Menabrea Ambrata",
        description: "No description provided",
        price: "$13/$52",
      },
      {
        name: "Birra Baladin L'IPPA IPA",
        description: "No description provided",
        price: "$12/$44",
      },
      {
        name: "Menebrea Bionda",
        description: "No description provided",
        price: "$12/$45",
      },
      {
        name: "Boomtown Bad Hombre",
        description: "No description provided",
        price: "$16/$60",
      },
      {
        name: "Scrimshaw",
        description: "No description provided",
        price: "$16/$64",
      },
      {
        name: "M'Erica, Brewdog Hazy AF (Non-Alcoholic)",
        description: "No description provided",
        price: "NA/$130",
      },
    ],
  },
  {
    title: "Corkage Fee",
    items: [
      {
        name: "Corkage Fee",
        description: "For bringing your own bottle",
        price: "$35",
      },
    ],
  },
];

const happyHourMenu: MenuSection[] = [
  {
    title: "Beverages",
    items: [
      {
        name: "Sparkling Merica",
      },
      {
        name: "Oro Prosecco Bionda",
      },
      {
        name: "Rose Ambrata",
      },
      {
        name: "Oro Rose",
      },
      {
        name: "Oro Pinot Grigio",
        price: "$10/31",
      },
      {
        name: "ey chardonnay",
        price: "$11/40",
      },
      {
        name: "Siscillian Necktie",
        price: "$10",
      },
      {
        name: "Cosmo Blanco",
        price: "$10",
      },
      {
        name: "Date With Monica",
        price: "$10",
      },
      {
        name: "Kikis Negroni",
        price: "$10",
      },
      {
        name: "Montepulciano d’Abruzzo",
        price: "$9/28",
      },
      {
        name: "Bel Poggio Di Paolo Ciliegio",
        price: "$11/40",
      },
    ],
  },
  {
    title: "Dining",
    items: [
      {
        name: "Tricolore",
        price: "$11",
        description: "Arugula, radicchio, endive, lemon, olive oil, parmesan",
      },
      {
        name: "Caesar*",
        price: "$12",
        description:
          "Little gem, focaccia croutons, parmesan, lemon, tomato sauce",
      },
      {
        name: "Margherita",
        price: "$13",
        description: "Tomato, fior di latte, basil, olive oil",
      },
      {
        name: "Pepperoni*",
        price: "$15",
        description:
          "Ezzo pepperoni, chile honey, mozzarella, anchovy, garlic, tomato sauce",
      },
      {
        name: "Bucatini Cacio e Pepe",
        price: "$15",
        description: "Black pepper, pecorino, parmesan",
      },
      {
        name: "Rigatoni Bolognese",
        price: "$19",
        description: "Parmesan, pancetta, beef, tomato",
      },
      {
        name: "Spaghetti and Meatballs*",
        price: "$20",
        description: "Classic tomato sauce, parmesan, basil",
      },
      {
        name: "Shrimp Penne Alla Vodka*",
        price: "$22",
        description: "Creamy tomato sauce, vodka, chile flake, basil, parmesan",
      },
    ],
  },
];

function MenuSection({ title, items }: MenuSection) {
  return (
    <Card className="mb-6 border-customYellow border-opacity-50 rounded-none w-full break-inside-avoid">
      <CardHeader>
        <CardTitle className="text-customYellow font-serif tracking-wide">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {items.map((item, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex justify-between">
              <h4 className="font-semibold">{item.name}</h4>
              <span className="font-semibold">{item.price}</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function Menu() {

  const [activeMenu, setActiveMenu] = useState<MenuType>("dinner");
  const searchParams = useSearchParams();

  useEffect(() => {
   

    const state = searchParams.get("state");
    if (
      state &&
      (state === "dinner" || state === "drink" || state === "happyHour")
    ) {
      setActiveMenu(state);
    }

  }, [searchParams]);

  const menuData = {
    dinner: { menu: dinnerMenu, title: "Dinner Menu" },
    drink: { menu: drinkMenu, title: "Drink Menu" },
    happyHour: { menu: happyHourMenu, title: "Happy Hour Menu" },
  };

  const menuItems = [
    { id: "dinner", label: "Dinner Menu" },
    { id: "drink", label: "Drinks Menu" },
    { id: "happyHour", label: "Happy Hour Menu" },
  ];

  return (
      <div className="bg-[url('/images/KikisBGTexture.jpg')] bg-repeat md:ml-20">
        <AnimatedHeader headerText="Our Menu" imageSrc="/images/KikisHomePage.webp" altText="Menu Image" />

        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative"
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() =>
                    setActiveMenu(item.id as "dinner" | "drink" | "happyHour")
                  }
                  className={` relative overflow-hidden group bg-gradient-to-r from-gray-500 to-gray-700 text-white py-6 px-8 font-bold font-serif tracking-wider text-xl rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 mx-auto`}
                  aria-label={`View ${item.label}`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700"
                    initial={false}
                    animate={{
                      opacity: activeMenu === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                    initial={false}
                    animate={{
                      scaleX: activeMenu === item.id ? 1 : 0,
                      opacity: activeMenu === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="py-8">
            <div className="text-2xl font-bold mb-4 text-center">
              {menuData[activeMenu].title}
            </div>
            <div className="columns-1 lg:columns-2 gap-5">
              {menuData[activeMenu].menu.map((section, index) => (
                <MenuSection key={index} {...section} />
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}
