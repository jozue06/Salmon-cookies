'use strict';
//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var bizHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

//we need to create a place for our list of all locations to be placed whenwe create them
var locations = [];

//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal
var netTotal = 0;

//constructor function begin with an Uppercase letter

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  //a function called MakeLocation will be a template for creating new objects that represent other locations
  //the statements in this function add properties and or methods to the objects
  //the this keyword is used instead of the object name to indicate that th property or method belongs to the object that this function creates
  //this function has four parameters and each one sets the value of a property in the object
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  //why is this an array?
  this.randCustByHour = [];
  this.cookiesByHour = [];
  this.totalSales = 0;
  locations.push(this);
  //using the this keyword in front of the method to show that the method belongs to the object that this function creates
  // this.calcRandCustByHour = function() {
  // // METHODS GO HERE
  // //THINK ABOUT PROTOTYPES
  // };
}
function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capotol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}
makeStands();

//remember to call the METHODS in the constructor that are now prototypes available to the new objects the constructor will MakeLocation
// this.calcRandCustByHour();

//call the functions in a function if you want
//this constructor function creates five new objects with their own unique values used in properties of this object (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)


//time to create the table in javascript
//make header row
//table needs an id in html

// function makeHeaderRow() {
//   var stores = document.getElementById('store1');
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   trEl.appendChild(thEl);
//   for (var i = 0; i < bizHours.length; i++){
//     document.createElement('th');
//     trEl.textContent = bizHours[i];
//     thEl.appendChild(trEl);
//   }
// }
// makeHeaderRow();

function render(){
  var storeSection = document.getElementById('store1');
  var row = document.createElement('tr');
  var td = document.createElement('td');
  td.innerHTML = MakeLocation.name;
  row.appendChild(td);

  for (var i = -1; i < MakeLocation.cookiesByHour.length; i++) {
    var tdHourly = document.createElement('td');
    tdHourly.innerHTML = this.cookiesByHour[i];
    row.appendChild(tdHourly);
  }

  var total = document.createElement('td');
  total.innerHTML = this.totalSales;
  row.appendChild(total);
  storeSection.appendChild(row);
}

function generateTableHeading(){
  var storeSection = document.getElementById('store1');
  var thead = document.createElement('thead');
  storeSection.appendChild(thead);
  var row = document.createElement('tr');
  thead.appendChild(row);
  var td = document.createElement('td');
  td.innerHTML = 'Location';
  row.appendChild(td);
  for (var i = -1; i < bizHours.length; i++) {
    var td2 = document.createElement('td');
    td2.innerHTML = bizHours[i];
    row.appendChild(td2);
  }
  var tdTotal = document.createElement('th');
  tdTotal.textContent = MakeLocation.totalSales;
  tdTotal.innerHTML = 'Total';
  row.appendChild(tdTotal);
  storeSection.appendChild(row);
}

generateTableHeading();
render();


//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

