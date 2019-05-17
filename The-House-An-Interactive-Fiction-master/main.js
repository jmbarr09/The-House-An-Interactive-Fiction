
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let foyer = new Room("foyer", "clouds of dust kick up with every step.");
let table = new Item("table", "made of clear glass, chipped on top. Surrounded by chairs.")
let  livingroom = new Room("living room", "Large dusty couch and coffee table infront");
let chairs = new Item("chairs", "Three small polished wooden chairs, with a small gold key laid on one")
let couch = new Item("couch", "an L shaped couch with grey seats with rips in almost all of them, nothing useful")
let diningroom = new Room("dining room", "theres a marble bar table with four stools around it and a fire place")
let fireplace = new Item("fire place", "made out of red bricks and has wood and metal gate blocking out the inside")
let stools = new Item("stools", "four red stools with metal polls keeping then attached to the floor")
let lamp = new Item("lamp", "black and has a broken light bulb")
let kitchen = new Room("kitchen", "dusty and has a fridge, sink, and a stove")
let fridge = new Item("fridge", "white and fading with a lock on the freezer and nothing but rotten beef in the fridge")
let sink = new Item("sink", "silver with spots on it and nothing but dirty dishes in it")
let stove = new Item("stove", "metal with the burners missing and nothing in the oven")
let bedroom = new Room("bed room", "light blue walls with small chips in the paint, there is nothing but a bed, dresser, and rug")
let bed = new Item("bed", "white with two flat pillows on it, nothing usefull")
let dresser = new Item("dresser", "wooden with a lock on the handles holding them closed")
let rug = new Item("rug", "faded blue with a square cut in it")
let guestroom = new Room("guest room", "dark yellow with chips in the wallpaper and a bed, curtains covering the window, and a closet")
let guestbed = new Item("guest bed", "small with dusty black sheets and two grey pillows on it")
let curtains = new Item("curtains", "almost transparent white with a boring window behind it")
let closet = new Item("closet", "")
// Put them in their spots

foyer.addItem(table);
foyer.addItem(livingroom);
livingroom.addItem(chairs);
livingroom.addItem(couch);
foyer.addItem(diningroom);
diningroom.addItem(fireplace);
diningroom.addItem(stools);
livingroom.addItem(lamp);
diningroom.addItem(kitchen);
kitchen.addItem(fridge);
kitchen.addItem(sink);
kitchen.addItem(stove);
foyer.addItem(bedroom);
bedroom.addItem(bed);
bedroom.addItem(dresser);
bedroom.addItem(rug);
livingroom.addItem(guestroom);
guestroom.addItem(guestbed);
guestroom.addItem(curtains);

player.move(foyer);
