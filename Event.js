var OregonH = OregonH || {};
 
OregonH.Event = {};
 
<<<<<<< HEAD
// class Event {

//   let eventTypes = [
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'crew',
//     value: -3,
//     text: 'Food intoxication. Casualties: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'crew',
//     value: -4,
//     text: 'Dragon Pox outbreak. Casualties: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'food',
//     value: -10,
//     text: 'Worm infestation. Food lost: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'money',
//     value: -50,
//     text: 'Elves steal $'
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'oxen',
//     value: -1,
//     text: 'A potion exploded. Casualties: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'positive',
//     stat: 'food',
//     value: 20,
//     text: 'Found old potion. Potions added: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'positive',
//     stat: 'food',
//     value: 20,
//     text: 'Found old potion. Potions added: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'positive',
//     stat: 'oxen',
//     value: 1,
//     text: 'Found magic crystal. New crystal: '
//   },
//   {
//     type: 'SHOP',
//     notification: 'neutral',
//     text: 'You have found a shop',
//     products: [
//       {item: 'food', qty: 20, price: 50},
//       {item: 'potion', qty: 1, price: 200},
//       {item: 'weapon', qty: 2, price: 50},
//       {item: 'crew', qty: 5, price: 80}
//     ]
//   },
//   {
//     type: 'SHOP',
//     notification: 'neutral',
//     text: 'You have found a shop',
//     products: [
//       {item: 'food', qty: 30, price: 50},
//       {item: 'potion', qty: 1, price: 200},
//       {item: 'weapon', qty: 2, price: 20},
//       {item: 'crew', qty: 10, price: 80}
//     ]
//   },
//   {
//     type: 'SHOP',
//     notification: 'neutral',
//     text: 'Smugglers sell letious goods',
//     products: [
//       {item: 'food', qty: 20, price: 60},
//       {item: 'potion', qty: 1, price: 300},
//       {item: 'weapon', qty: 2, price: 80},
//       {item: 'crew', qty: 5, price: 60}
//     ]
//   },
//   {
//     type: 'ATTACK',
//     notification: 'negative',
//     text: 'Wizards are attacking you'
//   },
//   {
//     type: 'ATTACK',
//     notification: 'negative',
//     text: 'Elves are attacking you'
//   },
//   {
//     type: 'ATTACK',
//     notification: 'negative',
//     text: 'Pixies are attacking you'
//   }
// ];

// }

OregonH.Event.eventTypes = [
=======
class Event {
  constructor() {
    this.eventTypes = [
>>>>>>> 62e43ef59c932174350b7fcb193902d1ff376fc3
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'crew',
    value: -3,
    text: 'Food intoxication. Casualties: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'crew',
    value: -4,
    text: 'Dragon Pox outbreak. Casualties: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'food',
    value: -10,
    text: 'Worm infestation. Food lost: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'money',
    value: -50,
    text: 'Elves steal $'
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'oxen',
    value: -1,
    text: 'A potion exploded. Casualties: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'food',
    value: 20,
    text: 'Found old potion. Potions added: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'food',
    value: 20,
    text: 'Found old potion. Potions added: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'oxen',
    value: 1,
    text: 'Found magic crystal. New crystal: '
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'You have found a shop',
    products: [
      {item: 'food', qty: 20, price: 50},
      {item: 'potion', qty: 1, price: 200},
      {item: 'weapon', qty: 2, price: 50},
      {item: 'crew', qty: 5, price: 80}
    ]
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'You have found a shop',
    products: [
      {item: 'food', qty: 30, price: 50},
      {item: 'potion', qty: 1, price: 200},
      {item: 'weapon', qty: 2, price: 20},
      {item: 'crew', qty: 10, price: 80}
    ]
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'Smugglers sell letious goods',
    products: [
      {item: 'food', qty: 20, price: 60},
      {item: 'potion', qty: 1, price: 300},
      {item: 'weapon', qty: 2, price: 80},
      {item: 'crew', qty: 5, price: 60}
    ]
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Wizards are attacking you'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Elves are attacking you'
  },
  {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Pixies are attacking you'
  }
];
  

generateEvent(){
  let eventIndex = Math.floor(Math.random() * this.eventTypes.length);
  let eventData = this.eventTypes[eventIndex];
 
  //events that consist in updating a stat
  if(eventData.type == 'STAT-CHANGE') {
    this.stateChangeEvent(eventData);
  }
 
  //shops
  else if(eventData.type == 'SHOP') {
    //pause game
    this.game.pauseJourney();
 
    //notify user
    this.ui.notify(eventData.text, eventData.notification);
 
    //prepare event
    this.shopEvent(eventData);
  }
 
  //attacks
  else if(eventData.type == 'ATTACK') {
    //pause game
    this.game.pauseJourney();
 
    //notify user
    this.ui.notify(eventData.text, eventData.notification);
 
    //prepare event
    this.attackEvent(eventData);
  }
}

stateChangeEvent(eventData){
  //can't have negative quantities
  if(eventData.value + this.caravan[eventData.stat] >= 0) {
    this.caravan[eventData.stat] += eventData.value;
    this.ui.notify(eventData.text + Math.abs(eventData.value), eventData.notification);
  }
};

shopEvent(eventData){
  //number of products for sale
  let numProds = Math.ceil(Math.random() * 4);
 
  //product list
  let products = [];
  let j, priceFactor;
 
  for(let i = 0; i < numProds; i++) {
    //random product
    j = Math.floor(Math.random() * eventData.products.length);
 
    //multiply price by random factor +-30%
    priceFactor = 0.7 + 0.6 * Math.random();
 
    products.push({
      item: eventData.products[j].item,
      qty: eventData.products[j].qty,
      price: Math.round(eventData.products[j].price * priceFactor)
    });
  }
 
  this.ui.showShop(products);
};

attackEvent(eventData){
  let firepower = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_FIREPOWER_AVG);
  let gold = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_GOLD_AVG);
 
  this.ui.showAttack(firepower, gold);
};

}

// OregonH.Event.eventTypes = [
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'crew',
//     value: -3,
//     text: 'Food intoxication. Casualties: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'crew',
//     value: -4,
//     text: 'Dragon Pox outbreak. Casualties: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'food',
//     value: -10,
//     text: 'Worm infestation. Food lost: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'money',
//     value: -50,
//     text: 'Elves steal $'
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'negative',
//     stat: 'oxen',
//     value: -1,
//     text: 'A potion exploded. Casualties: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'positive',
//     stat: 'food',
//     value: 20,
//     text: 'Found old potion. Potions added: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'positive',
//     stat: 'food',
//     value: 20,
//     text: 'Found old potion. Potions added: '
//   },
//   {
//     type: 'STAT-CHANGE',
//     notification: 'positive',
//     stat: 'oxen',
//     value: 1,
//     text: 'Found magic crystal. New crystal: '
//   },
//   {
//     type: 'SHOP',
//     notification: 'neutral',
//     text: 'You have found a shop',
//     products: [
//       {item: 'food', qty: 20, price: 50},
//       {item: 'potion', qty: 1, price: 200},
//       {item: 'weapon', qty: 2, price: 50},
//       {item: 'crew', qty: 5, price: 80}
//     ]
//   },
//   {
//     type: 'SHOP',
//     notification: 'neutral',
//     text: 'You have found a shop',
//     products: [
//       {item: 'food', qty: 30, price: 50},
//       {item: 'potion', qty: 1, price: 200},
//       {item: 'weapon', qty: 2, price: 20},
//       {item: 'crew', qty: 10, price: 80}
//     ]
//   },
//   {
//     type: 'SHOP',
//     notification: 'neutral',
//     text: 'Smugglers sell letious goods',
//     products: [
//       {item: 'food', qty: 20, price: 60},
//       {item: 'potion', qty: 1, price: 300},
//       {item: 'weapon', qty: 2, price: 80},
//       {item: 'crew', qty: 5, price: 60}
//     ]
//   },
//   {
//     type: 'ATTACK',
//     notification: 'negative',
//     text: 'Wizards are attacking you'
//   },
//   {
//     type: 'ATTACK',
//     notification: 'negative',
//     text: 'Elves are attacking you'
//   },
//   {
//     type: 'ATTACK',
//     notification: 'negative',
//     text: 'Pixies are attacking you'
//   }
// ];
 
// OregonH.Event.generateEvent = function(){
//   //pick random one
//   let eventIndex = Math.floor(Math.random() * this.eventTypes.length);
//   let eventData = this.eventTypes[eventIndex];
 
//   //events that consist in updating a stat
//   if(eventData.type == 'STAT-CHANGE') {
//     this.stateChangeEvent(eventData);
//   }
 
//   //shops
//   else if(eventData.type == 'SHOP') {
//     //pause game
//     this.game.pauseJourney();
 
//     //notify user
//     this.ui.notify(eventData.text, eventData.notification);
 
//     //prepare event
//     this.shopEvent(eventData);
//   }
 
//   //attacks
//   else if(eventData.type == 'ATTACK') {
//     //pause game
//     this.game.pauseJourney();
 
//     //notify user
//     this.ui.notify(eventData.text, eventData.notification);
 
//     //prepare event
//     this.attackEvent(eventData);
//   }
// };
 
// OregonH.Event.stateChangeEvent = function(eventData) {
//   //can't have negative quantities
//   if(eventData.value + this.caravan[eventData.stat] >= 0) {
//     this.caravan[eventData.stat] += eventData.value;
//     this.ui.notify(eventData.text + Math.abs(eventData.value), eventData.notification);
//   }
// };
 
// OregonH.Event.shopEvent = function(eventData) {
//   //number of products for sale
//   let numProds = Math.ceil(Math.random() * 4);
 
//   //product list
//   let products = [];
//   let j, priceFactor;
 
//   for(let i = 0; i < numProds; i++) {
//     //random product
//     j = Math.floor(Math.random() * eventData.products.length);
 
//     //multiply price by random factor +-30%
//     priceFactor = 0.7 + 0.6 * Math.random();
 
//     products.push({
//       item: eventData.products[j].item,
//       qty: eventData.products[j].qty,
//       price: Math.round(eventData.products[j].price * priceFactor)
//     });
//   }
 
//   this.ui.showShop(products);
// };
 
// //prepare an attack event
// OregonH.Event.attackEvent = function(eventData){
//   let firepower = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_FIREPOWER_AVG);
//   let gold = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_GOLD_AVG);
 
//   this.ui.showAttack(firepower, gold);
// };