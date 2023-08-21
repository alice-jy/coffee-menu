//connect the two javascript files by importing the data from coffee_menu.js
const coffeeMenu = require('./coffee_data');

//print an array of all the drinks on the menu
const allDrinks = coffeeMenu.map(item => item.name);
console.log(allDrinks);

//print an array of drinks that cost 5 and under
const cheapDrinks = coffeeMenu.filter(item => item.price <= 5);
console.log(cheapDrinks);

//print an array of drinks that are priced at an even number 
const evenPricedDrinks = coffeeMenu.filter(item => item.price % 2 === 0);
console.log(evenPricedDrinks);

//print the total if you were to order one of every drink 
const totalCost = coffeeMenu.reduce((total, item) => total + item.price, 0);
console.log(totalCost);

//print an array with all the drinks that are seasonal 
const seasonalDrinks = coffeeMenu.filter(item => item.seasonal);
console.log(seasonalDrinks);

//print all the seasonal drinks with the words "with imported beans" after the item name. 
const seasonalImportedDrinks = coffeeMenu
    .filter(item => item.seasonal)
    .map(item => `${item.name} with imported beans`);
console.log(seasonalImportedDrinks);