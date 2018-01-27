'use strict';

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

var locations = [];
var netTotal = 0;
var totalCookiesByHour = 0;

//constructor function begin with an Uppercase letter
function MakeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capotol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}
MakeStands();

function MakeLocation( name, minCustPerHour, maxCustPerHour, avgCookies) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookies = avgCookies;
  this.randCustByHour = [];
  this.cookiesByHour = [];
  this.totalSales = 4;
  locations.push(this);
  
  function render(){
  }
  var storeSection = document.getElementById('store1');
  var row = document.createElement('td');
  var td = document.createElement('td');
  td.textContent = this.name;
  row.appendChild(td);

  for (var j = 0; j < bizHours.length; j++) {
    var tdHourly = document.createElement('td');
    var minCust = document.createElement('th');
    minCust.textContent = this.minCustPerHour;
    tdHourly.textContent = this.avgCookies;
    row.appendChild(tdHourly);
  }

  var total = document.createElement('th');
  total.textContent = this.totalSales[i];
  row.appendChild(total);
  storeSection.appendChild(row);

  for (var i = 0; i < locations.length; i++) {
    var tdNames = document.createElement('th');
    tdNames.textContent = this.totalSales[i];
    row.appendChild(tdNames);
  }

  function generateTableHeading(){
    var storeSection = document.getElementById('store1');
    var thead = document.createElement('thead');
    storeSection.appendChild(thead);
    var row = document.createElement('tr');
    thead.appendChild(row);
    var td = document.createElement('th');
    row.appendChild(td);

    for (var i = 0; i < bizHours.length; i++) {
      var td2 = document.createElement('th');
      td2.textContent = bizHours[i];
      row.appendChild(td);
    }
  }
  generateTableHeading();

  //using the this keyword in front of the method to show that the method belongs to the object that this function creates
  // this.calcRandCustByHour = function() {
  // // METHODS GO HERE
  // //THINK ABOUT PROTOTYPES
  // };
}


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


//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

