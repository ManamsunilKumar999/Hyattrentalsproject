    function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


const products = [
{ id: 1, title: "Tea Coffee Flask", image: "images/Tea-Coffee-Flask.jpg", category: "kitchen", class:"tea" },
{ id: 2, title: "OUZI CHAFING DISH WITH INSERT.", image: "images/OUZI-CHAFING-DISH-WITH-INSERT.jpg", category: "kitchen" },
{ id: 3, title: "Juice Dispenser Single", image: "images/Juice-Dispenser-Single.jpg", category: "kitchen" },
{ id: 4, title: "Juice Dispenser Double", image: "images/Juice-Dispenser-Double.jpg", category: "kitchen" },
{ id: 5, title: "Jack-Stack-Plate Trolley", image: "images/Jack-Stack-Plate-Trolley.jpg", category: "kitchen" },
{ id: 6, title: "Jack Stand With Oval Tray", image: "images/Jack-Stand-With-Oval-Tray.jpg", category: "kitchen" },
{ id: 7, title: "Cambro Box Trolley", image: "images/Cambro-Box-Trolley.jpg", category: "kitchen" },
{ id: 8, title: "Garbage Bin With Pedel", image: "images/Garbage-Bin-With-Pedel.jpg", category: "kitchen" },
{ id: 9, title: "CAMBRO BOX Grey", image: "images/CAMBRO-BOX-Grey.jpg", category: "kitchen" },
{ id: 10, title: "Buffet Elevation", image: "images/Buffet-Elevation.jpg", category: "kitchen" },
{ id: 11, title: "Brass Pole With Red Rope", image: "images/Brass-Pole-With-Red-Rope.jpg", category: "kitchen" },
{ id: 12, title: "Brass Pole With Black Rope", image: "images/Brass-Pole-With-Black-Rope.jpg", category: "kitchen" },
{ id: 13, title: "Waffle-Machine", image: "images/Waffle-Machine.jpg", category: "kitchen" },
{ id: 14, title: "Table Top Dough Mixer", image: "images/Table-Top-Dough-Mixer.jpg", category: "kitchen" },
{ id: 15, title: "SINGLE INDUCTION HUB", image: "images/SINGLE-INDUCTION-HUB.jpg", category: "kitchen" },
{ id: 16, title: "MEAT-SLICER-MS220SG", image: "images/MEAT-SLICER-MS220SG.jpg", category: "kitchen" },
{ id: 17, title: "Gas Chinese Wok With Regulator & Pipe", image: "images/Gas-Chinese-Wok-With-Regulator-Pipe.jpg", category: "kitchen" },
{ id: 18, title: "Electric Water Boiler", image: "images/Electric-Water-Boiler.jpg", category: "kitchen" },
{ id: 19, title: "Electric Power Mixer", image: "images/Electric-Power-Mixer.jpg", category: "kitchen" },
{ id: 20, title: "Electric Meat Mincer", image: "images/Electric-Meat-Mincer.jpg", category: "kitchen" },
{ id: 21, title: "Electric Chinese Wok", image: "images/Electric-Chinese-Wok.jpg", category: "kitchen" },
{ id: 22, title: "Electric Bonesaw Machine", image: "images/Electric-Bonesaw-Machine.jpg", category: "kitchen" },
{ id: 23, title: "Electric 4 Hot Plate With Oven", image: "images/Electric-4-Hot-Plate-With-Oven.jpg", category: "kitchen" },
{ id: 24, title: "DOUBLE INDUCTION HUB", image: "images/DOUBLE-INDUCTION-HUB.jpg", category: "kitchen" },
{ id: 25, title: "Crepe Machine Single", image: "images/Crepe-Machine-Single.jpg", category: "kitchen" },
{ id: 26, title: "Cooking Range 4 Burner With Oven", image: "images/Cooking-Range-4-Burner-With-Oven.jpg", category: "kitchen" },
{ id: 27, title: "BBQ Charcoal Grill", image: "images/BBQ-Charcoal-Grill.jpg", category: "kitchen" },
{ id: 28, title: "PIZZA OVEN", image: "images/PIZZA-OVEN .jpg", category: "kitchen" },
{ id: 29, title: "Charcoal Tandoor", image: "images/Charcoal_Tandoor.jpg", category: "kitchen" },
{ id: 30, title: "Out Door Air Cooler", image: "images/Out-Door-Air-Cooler.jpg", category: "kitchen" },
{ id: 31, title: "Free Standing Ice Cream Display Freezer With 8 Comp", image: "images/Free-Standing-Ice-Cream-Display-Freezer-With-8-Comp.jpg", category: "kitchen" },
{ id: 32, title: "FREE STANDING CAKE DISPLAY CHILLER", image: "images/FREE-STANDING-CAKE-DISPLAY-CHILLER.jpg", category: "kitchen" },
{ id: 33, title: "ELECTRIC ICE CREAM MACHINE", image: "images/ELECTRIC-ICE-CREAM-MACHINE.jpg", category: "kitchen" },
{ id: 34, title: "CHEST FREZZER", image: "images/Chest-Frrezer.jpg", category: "kitchen" },
{ id: 35, title: "Double Glass Door Chiller", image: "images/Double-Glass-Door-Chiller.jpg", category: "kitchen" },
{ id: 36, title: "Single Glass Door Chiller", image: "images/Single-Glass-Door-Standing-Chiiler.jpg", category: "kitchen" },
{ id: 37, title: "Under Counter Chiller 2 Door", image: "images/Undercounter-Chiller.jpg", category: "kitchen" },
{ id: 38, title: "Cold Cabinet Single", image: "images/Cold-Cabinet-Single.jpg", category: "kitchen" },
{ id: 39, title: "Up Write Chiller Double", image: "images/Up-Wite-Freezer-Double.jpg", category: "kitchen" },
{ id: 40, title: "Up Write Chiller Single", image: "images/Up-Write-Freezer-Single.jpg", category: "kitchen" },
{ id: 41, title: "Hot Cabinet Double", image: "images/Double-Door-Hot-Cabinet.jpg", category: "kitchen" },
{ id: 42, title: "Hot Cabinet Single", image: "images/Single-Door-Hot-Cabinet.jpg", category: "kitchen" },
{ id: 43, title: "Table Tol Otg Ove", image: "images/Table-tol-otg-ove .jpg", category: "kitchen" },
{ id: 44, title: "Micro Wave Oven", image: "images/Microwave-Oven .jpg", category: "kitchen" },
{ id: 45, title: "Combi Convection Oven 6 Racks", image: "images/Combi-Convection-Oven-6-Racks.jpg", category: "kitchen" },
{ id: 46, title: "Combi Convection Oven 10 Racks", image: "images/Rack-Convection-Oven.jpg", category: "kitchen" },
{ id: 47, title: "Electric Table Top Fryer.Double Basket", image: "images/Electric-Free-Standing-Deep-Fat-Fryer-Double.jpg", category: "kitchen" },
{ id: 48, title: "Electric Free Standing Fryer Single Basket", image: "images/Free-Standing-Deep-Fat-Fryer-Single-Basket-Double-Stainer.jpg", category: "kitchen" },
{ id: 49, title: "Electric Free Standing Fryer Double Basket", image: "images/Electric-Free-Standing-Deep-Fat-Fryer-Double.jpg", category: "kitchen" },
{ id: 50, title: "Gas Operated Free Standing Fryer Single", image: "images/Gas-Operated-Free-Standing-Deep-Fat-Fryer.jpg", category: "kitchen" },
{ id: 51, title: "Electric Table Top Flat Griddle Single", image: "images/Electric-Table-Top-Deep-Fat-Fryer.jpg", category: "kitchen" },
{ id: 52, title: "Electric Table Top Flat Griddle Double", image: "images/Electric-Flat-Griddle-Double.jpg", category: "kitchen" },
{ id: 53, title: "Gas Operater Table Top Flat Griddle", image: "images/Gas-Flat-Griddle.jpg", category: "kitchen" },
{ id: 54, title: "TABLE TOP ELECTRIC SHAWARMA MACHINE", image: "images/electric-shawarma-machine.jpg", category: "kitchen" },
{ id: 55, title: "TABLE TOP GAS SHAWARMA MACHINE WITH REGULATOR AND PIPE", image: "images/Gas-Shawarma-Machine-With-Pipe-Regulator.jpg", category: "kitchen" },
{ id: 56, title: "TABLE TOL ELECTRIC PASTA BOILER WITH 4 COMP", image: "images/Electric-Pasta-Boiler-4-Comp.jpg", category: "kitchen" },
{ id: 57, title: "S.S Kitchen Preparation Tables 150*70cm", image: "images/S.S-Kitchen-Preparation-Table.jpg", category: "kitchen" },
{ id: 58, title: "Dough Mixer 10 & 15 Litres", image: "images/Dough-Mixer-10-15Ltrs.jpg", category: "kitchen" },
{ id: 59, title: "Electric Table Top Fryer Single Basket", image: "images/Free-Standing-Deep-Fat-Fryer-Single-Basket-Double-Stainer.jpg", category: "kitchen" },
{ id: 60, title: "Table Top Chocolate Fountain", image: "images/Table-Top-Chocolate-Fountain.jpg", category: "kitchen" },
{ id: 61, title: "Black Marble Carving Lamp With 2 Bulb", image: "images/Black-Marble-Carving-Lamp-With-2-Bulb.jpg", category: "kitchen" },
{ id: 62, title: "Table Top Carving Lamp With 3 Bulb", image: "images/Table-Top-Carving-Lamp-With-3-Bulbs.jpg", category: "kitchen" },
{ id: 63, title: "Table Top Carving Lamp With 2 Bulb", image: "images/Table Top Carving lamp with 2 bulb.jpg", category: "kitchen" },
{ id: 64, title: "Nacho Warmer", image: "images/Nacho-Warmer.jpg", category: "kitchen" },
{ id: 65, title: "Candy Making Machine", image: "images/Candy-Making-Machine.jpg", category: "kitchen" },
{ id: 66, title: "Pop Corn Making Machine", image: "images/POPCORN-MACHINE.jpg", category: "kitchen" },
{ id: 67, title: "S.S Rectangle Chafing Dish With Full Insert", image: "images/S.S Rectangle Chafing Dish With Half Insert.jpg", category: "kitchen" },
{ id: 68, title: "S.S Soup Chafing Dish With Double Insert", image: "images/Rectangle-Soup-Chafing-Dish-With-Double-Insert.jpg", category: "kitchen" },
{ id: 69, title: "S.S Round Chafing Dish With Insert", image: "images/Round-Chafing-Dish.jpg", category: "kitchen" },
{ id: 70, title: "S.S Rectangle Chafing Dish With Half Insert", image: "images/S.S Rectangle Chafing Dish With Half Insert.jpg", category: "kitchen" },
{ id: 71, title: "Electric Soup Tourin With Insert", image: "images/Electric-Soup-Tourin-With-Insert.jpg", category: "kitchen" },
{ id: 72, title: "Dim Sum Steamer", image: "images/Dim-Sum-Streamer.jpg", category: "kitchen" },
{ id: 73, title: "Copper Chafing Dish With Hanger", image: "images/Copper-Chafing-Dish-With-Hanging-Stand.jpg", category: "kitchen" },
{ id: 74, title: "S.S 1/1 GN TRAY 2CM DEEP", image: "images/11-GN-Insert-6.5101520cm-1.jpg", category: "kitchen" },
{ id: 75, title: "S.S 2/1 GN TRAY 2CM DEEP", image: "images/21-GN-Tray-2cm.jpg", category: "kitchen" },
{ id: 76, title: "S.S KITCHE TROLLEY WITH 2 AND 3 LAYER", image: "images/S.S-Kitchen-Trolley-With-2-Layer.jpg", category: "kitchen" },
{ id: 77, title: "S.S 1/1 GN TROLLEY WITH 15 TRAYS", image: "images/GN-Trolley-With-15-Tray.jpg", category: "kitchen" },
{ id: 78, title: "S.S 2/1 GN TROLLEY WITH 15 TRAYS", image: "images/GN-Trolley-With-15-Tray.jpg", category: "kitchen" },
{ id: 79, title: "SS GN 1/2 FOOD INSERT 6.5CM,10CM,15CM WITH LID", image: "images/11-GN-Insert-6.5101520cm-1.jpg", category: "kitchen" },
{ id: 80, title: "S.S GN 1/1 FOOD INSERT 6.5CM,10CM,15CM,20CM", image: "images/11-GN-Insert-6.5101520cm-1.jpg", category: "kitchen" },

{ id: 81, title: "WHITE CERAMIC BOWL 21CM", image: "images/WHITE-CERAMIC-BOWL-21CM.jpg", category: "crockery" },
{ id: 82, title: "PASTA PLATE 23CM", image: "images/PASTA-PLATE-23CM.jpg", category: "crockery" },
{ id: 83, title: "PASTA PLATE 25.5CM", image: "images/PASTA-PLATE-25.5CM.jpg", category: "crockery" },
{ id: 84, title: "B&B PLATE", image: "images/BB-PLATE.jpg", category: "crockery" },
{ id: 85, title: "DESSERT PLATE", image: "images/DESSERT-PLATE.jpg", category: "crockery" },
{ id: 86, title: "DINNER PLATE", image: "images/DINNER-PLATE.jpg", category: "crockery" },
{ id: 87, title: "WHITE CERAMIC BOWL 15CM", image: "images/WHITE-CERAMIC-BOWL-15CM.jpg", category: "crockery" },
{ id: 88, title: "WHITE CERAMIC BOWL 12CM", image: "images/WHITE-CERAMIC-BOWL-12CM.jpg", category: "crockery" },
{ id: 89, title: "WHITE CERAMIC BOWL 10CM", image: "images/WHITE-CERAMIC-BOWL-10CM.jpg", category: "crockery" },
{ id: 90, title: "SOUP CUP AND SAUCER", image: "images/SOUP-CUP-AND-SAUCER.jpg", category: "crockery" },
{ id: 91, title: "EXPRESSO CUP AND SAUCER", image: "images/EXPRESSO-CUP-AND-SAUCER.jpg", category: "crockery" },
{ id: 92, title: "COFFEE CUPS AND SAUCER", image: "images/COFFEE-CUPS-AND-SAUCER.jpg", category: "crockery" },
{ id: 93, title: "TEA CUPS AND SAUCER", image: "images/TEA-CUPS-AND-SAUCER.jpg", category: "crockery" },
{ id: 94, title: "RECTANGLE PLATTER 42CM", image: "images/RECTANGLE-PLATTER-42CM.jpg", category: "crockery" },
{ id: 95, title: "OVAL PALTTER 39CM", image: "images/OVAL-PALTTER-39CM.jpg", category: "crockery" },
{ id: 96, title: "B&B KNIFE", image: "images/BB-KNIFE.jpg", category: "crockery" },
{ id: 97, title: "DESSERT KNIFE", image: "images/DESSERT-KNIFE.jpg", category: "crockery" },
{ id: 98, title: "DINNER KNIFE", image: "images/DINNER-KNIFE.jpg", category: "crockery" },
{ id: 99, title: "DESSERT FORK", image: "images/DESSERT-FORK.jpg", category: "crockery" },
{ id: 100, title: "DESSERT SPOON", image: "images/DESSERT-SPOON.jpg", category: "crockery" },
{ id: 101, title: "SOUP SPOON", image: "images/SOUP-SPOON.jpg", category: "crockery" },
{ id: 102, title: "DINNER SPOON", image: "images/DINNER-SPOON.jpg", category: "crockery" },
{ id: 103, title: "CAKE LIFTER", image: "images/CAKE-LIFTER.jpg", category: "crockery" },
{ id: 104, title: "SERVICE LADDLE", image: "images/SERVICE-LADDLE.jpg", category: "crockery" },
{ id: 105, title: "SERVICE FORK", image: "images/SERVICE-FORK.jpg", category: "crockery" },
{ id: 106, title: "SERVICE TONG", image: "images/SERVICE-TONG.jpg", category: "crockery" },
{ id: 107, title: "SERVICE SPOON", image: "images/SERVICE-SPOON.jpg", category: "crockery" },
{ id: 108, title: "DINNER FORK", image: "images/DESSERT-FORK.jpg", category: "crockery" },
{ id: 109, title: "TEASPOON", image: "images/DINNER-SPOON.jpg", category: "crockery" },
{ id: 100, title: "SALAD PLATE", image: "images/OVAL-PALTTER-39CM.jpg", category: "crockery" },

{ id: 109, title: "Chair Bow ( White, Golden, Orange, Red & Green)", image: "images/Chair-Bow.jpg", category: "tables" },
{ id: 110, title: "SQUARE TABLE 90 X 90CM", image: "images/SQUARE-TABLE-90-X-90CM.jpg", category: "tables" },
{ id: 111, title: "RECTANGLE TABLE 183 X 76CM", image: "images/RECTANGLE-TABLE-183-X-76CM.jpg", category: "tables" },
{ id: 112, title: "ROUND TABLE 5FT", image: "images/ROUND-TABLE-5FT.jpg", category: "tables" },
{ id: 113, title: "ROUND TABLE 6FT", image: "images/ROUND-TABLE-6FT.jpg", category: "tables" },
{ id: 114, title: "GOLDEN CHIVARI CHAIR WITH CUSHION", image: "images/GOLDEN-CHIVARI-CHAIR-WITH-CUSHION.jpg", category: "tables" },
{ id: 115, title: "WHITE CHIVARI CHAIR WITH WHITE CUSHION", image: "images/WHITE-CHIVARI-CHAIR-WITH-WHITE-CUSHION.jpg", category: "tables" },
{ id: 116, title: "BANQUETING CHAIR", image: "images/BANQUETING-CHAIR.jpg", category: "tables" },
{ id: 117, title: "Rectangle Stretchable Cloth ( White & Black)", image: "images/Rectangle-Stretchable-Cloth.jpg", category: "tables" },
{ id: 118, title: "Rectangle Table Cloth 250*185 (White & Black)", image: "images/Rectangle-Table-Cloth-250-185.jpg", category: "tables" },
{ id: 119, title: "Round Table Cloth 300cm (White & Black)", image: "images/Round-Table-Cloth-300cm.jpg", category: "tables" },
{ id: 120, title: "Round Table Cloth 330cm (White & Black)", image: "images/Round-Table-Cloth-330cm.jpg", category: "tables" },
{ id: 121, title: "Banquet Stretchable Chair Cloth (White & Black)", image: "images/Banquet-Stretchable-Chair-Cloth.jpg", category: "tables" },
{ id: 122, title: "Napkins Cloth (White, Black, And Golden)", image: "images/Napkins-Cloth.jpg", category: "tables" },
{ id: 123, title: "Overlay Table Cloth (GOLDEN, RED AND BLUE)", image: "images/Overlay-Table-Cloth.jpg", category: "tables" },

{ id: 124, title: "HI BAR CHAIR", image: "images/HI-BAR-CHAIR.jpg", category: "bar" },
{ id: 125, title: "RUBBER COATED SERVICE TRAY", image: "images/RUBBER-COATED-SERVICE-TRAY.jpg", category: "bar" },
{ id: 126, title: "BLACK SERVICE TRAY 36 CM", image: "images/BLACK-SERVICE-TRAY.jpg", category: "bar" },
{ id: 127, title: "BLACK SERVICE TRAY 42 CM", image: "images/BLACK-SERVICE-TRAY.jpg", category: "bar" },
{ id: 128, title: "BLACK GLASS 2 DOOR BOTTLE CHILLER", image: "images/BLACK-GLASS-2-DOOR-BOTTLE-CHILLER.jpg", category: "bar" },
{ id: 129, title: "FREE STANDING SINGLE GLASS DOOR CHILLER", image: "images/FREE-STANDING-SINGLE-GLASS-DOOR-CHILLER.jpg", category: "bar" },
{ id: 130, title: "FREE STANDING GLASS 2 DOOR CHILLER", image: "images/FREE-STANDING-GLASS-2-DOOR-CHILLER.jpg", category: "bar" },
{ id: 131, title: "COOL BOX OR IGLO BOXS", image: "images/COOL-BOX-OR-IGLO-BOXS.jpg", category: "bar" },
{ id: 132, title: "S.S UNDERCOUNTER 2 DOOR CHILLER WITH RACKS", image: "images/SS-UNDERCOUNTER-2-DOOR-CHILLER-WITH-RACKS.jpg", category: "bar" },
{ id: 133, title: "BAR MAT", image: "images/BAR-MAT.jpg", category: "bar" },
{ id: 134, title: "WINE BUCKET WITH STAND", image: "images/WINE-BUCKET-WITH-STAND.jpg", category: "bar" },
{ id: 135, title: "ICE BUCKETS", image: "images/ICE-BUCKETS.jpg", category: "bar" },
{ id: 136, title: "Cocktail Tables White & Black", image: "images/Cocktail-Tables-White-Black.jpg", category: "bar" },
{ id: 137, title: "Cocktail Table Stretchable Cloth (White & Black)", image: "images/Cocktail-Table-Stretchable-Cloth.jpg", category: "bar" },
{ id: 138, title: "Ice cube making machine", image: "images/ice cube making machine.jpg.jpeg", category: "bar" },
{ id: 139, title: "WHISKY GLASS", image: "images/WHISKY-GLASS.jpg", category: "glassware" },
{ id: 140, title: "WHITE WINE GLASS", image: "images/WHITE-WINE-GLASS.jpg", category: "glassware" },
{ id: 141, title: "RED WINE GLASS", image: "images/RED-WINE-GLASS.jpg", category: "glassware" },
{ id: 142, title: "CHAMPAGNE GLASS", image: "images/CHAMPAGNE-GLASS.jpg", category: "glassware" },
{ id: 143, title: "HI BALL GLASS", image: "images/HI-BALL-GLASS.jpg", category: "glassware" },
{ id: 144, title: "TOM COLLIN GLASS", image: "images/TOM-COLLIN-GLASS.jpg", category: "glassware" },
{ id: 145, title: "CHAMPAGNE SAUCER", image: "images/CHAMPAGNE-SAUCER.jpg", category: "glassware" },
{ id: 146, title: "BEER GLASS", image: "images/BEER-GLASS.jpg", category: "glassware" },
{ id: 147, title: "Margarita GLASS", image: "images/Margarita-GLASS.jpg", category: "glassware" },
{ id: 148, title: "MARTINI GLASS", image: "images/MARTINI-GLASS.jpg", category: "glassware" },
{ id: 149, title: "COCKTAIL GLASS", image: "images/COCKTAIL-GLASS.jpg", category: "glassware" },
{ id: 150, title: "RING ROCK GLASS", image: "images/RING-ROCK-GLASS.jpg", category: "glassware" },
{ id: 151, title: "SHOTTER GLASS", image: "images/SHOTTER-GLASS.jpg", category: "glassware" },
{ id: 152, title: "BEER GLASS MUG", image: "images/beer Glass mug.jpg.jpeg", category: "glassware" },
{ id: 153, title: " Juice GLASS", image: "images/Glass.jpg.jpeg", category: "glassware" },

{ id: 154, title: "CHILLER OR FREEZER TRUCK", image: "images/CHILLER-OR-FREEZER-TRUCK.jpg", category: "trucks" },
{ id: 155, title: "CLOSED OR OPEN TRUCK", image: "images/CLOSED-OR-OPEN-TRUCK.jpg", category: "trucks" }
];

/* ======================
   SYSTEM LOGIC
====================== */

const searchInput = document.getElementById("searchInput");
const chips = document.querySelectorAll(".chip-btn");
const sections = document.querySelectorAll(".category-section");

// Read category from URL (e.g. ?data-category=kitchen)
const params = new URLSearchParams(window.location.search);
const urlCategory = params.get("data-category");

let activeCategory = "all";

if (urlCategory && document.querySelector(`.chip-btn[data-category="${urlCategory}"]`)) {
  activeCategory = urlCategory;
  chips.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === activeCategory);
  });
}

function renderProducts(){

  sections.forEach(section=>{
    section.querySelector(".card-grid").innerHTML="";
  });

  const query = searchInput.value.toLowerCase();

  const filtered = products.filter(product =>
    (activeCategory==="all" || product.category===activeCategory) &&
    product.title.toLowerCase().includes(query)
  );

  filtered.forEach(product=>{
    const section = document.querySelector(
      `.category-section[data-category="${product.category}"]`
    );
    if(!section) return;

    const grid = section.querySelector(".card-grid");

    const card = document.createElement("div");
    card.className="subcard";

    card.innerHTML=`
      <div class="card-img">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="card-content">
        <div class="subcat-name">${toTitleCase(product.title)}</div>
      </div>
    `;

    grid.appendChild(card);
  });

  sections.forEach(section=>{
    const hasCards = section.querySelectorAll(".subcard").length>0;
    section.classList.toggle("hidden",!hasCards);
  });
}

chips.forEach(chip=>{
  chip.addEventListener("click",()=>{
    chips.forEach(btn=>btn.classList.remove("active"));
    chip.classList.add("active");
    activeCategory=chip.dataset.category;
    renderProducts();
  });
});
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
}


searchInput.addEventListener("input",renderProducts);

renderProducts();

// If a specific category is selected from home page, scroll to its section
if (activeCategory !== "all") {
  const targetSection = document.querySelector(
    `.category-section[data-category="${activeCategory}"]`
  );
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}