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
let bar = new Item("marble bar", "rectangle marble bar with chips in it and four one stool on each side")
// Put them in their spots

foyer.addItem(table);
foyer.addItem(livingroom);
livingroom.addItem(chairs);
livingroom.addItem(couch);
foyer.addItem(diningroom);
diningroom.addItem(bar)


// Create the function
let jumpaction = /jump/;
let jump = function(action, player, object) {
  if (action == 'jump') {
    addLine('You jump. As you land, you hear a loud creak from the floor.');
  }
  return player
}

//To create a function that interacts with an object...
let eatAction = /eat/;
let eat = function(action, player, object) {
  if (action == 'eat') {
    object.eat();
  }
  return player;
}

//... then add a method to an object. This only works for the one object.
vase.eat = function() {
  addLine("You ate the " + this.name)
}

// You can also extend the class, adding an eat() method to all items in your game.
Item.prototype.eat = function () {
  addLine("You ate the " + this.name);
}

//Add the function to the action list
addAction(jumpaction, jump);
addAction(eatAction, eat);





player.move(foyer)
