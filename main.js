// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let foyer = new Room("foyer", "clouds of dust kick up with every step.");
let table = new Item("table", "made of clear glass, chipped on top. Surrounded by chairs.")
let  livingroom = new Room("living room", "Large dusty couch and coffee table infront");
let chairs = new Item("chairs", "Three small polished wooden chairs, with a small gold key laid on one")
let couch = new Item("couch", "an L shaped couch with grey seats with rips in almost all of them, nothing useful")
let diningroom = new Room("dining room", "theres a marble bar table with four stools around it, theres ")

// Put them in their spots

foyer.addItem(table);
foyer.addItem(livingroom);
livingroom.addItem(chairs);
livingroom.addItem(couch);
foyer.addItem(diningroom);
player.location = foyer

player.location.enter();
