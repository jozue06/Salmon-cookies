// 'use strict';

// var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

// var storeLocations = [];

// var salmonTable = document.getElementById('store1');

// function Store(name, minCustomers, maxCustomers, avgCookies) {
//   this.name = name;
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.avgCookies = avgCookies;
//   this.averageCustomersPerHour = [];
//   this.averageCookiesPerHour = [];
//   this.totalCookiesPerDay = 0;
//   this.numOfCustomersPerHour();
//   this.cookiesPerCustomer();
//   storeLocations.push(this);
// }

// Store.prototype.render = function() {
//   var trRowName = document.createElement('tr');
//   var tdStore = document.createElement('td');
//   tdStore.textContent = this.name;
//   trRowName.appendChild(tdStore);
//   for (var i = 0; i < this.averageCookiesPerHour.length; i++) {
//     var tdCell = document.createElement('td');
//     tdCell.textContent = this.averageCookiesPerHour[i];
//     trRowName.appendChild(tdCell);
//   }
//   var tdTotal = document.createElement('td');
//   tdTotal.textContent = this.totalCookiesPerDay;
//   trRowName.appendChild(tdTotal);
//   salmonTable.appendChild(trRowName);
// };

// Store.prototype.numOfCustomersPerHour = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//     this.averageCustomersPerHour.push(singleHourCustomers);
//   }
// };


// Store.prototype.cookiesPerCustomer = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
//     this.averageCookiesPerHour.push(singleHourCookies);
//     this.totalCookiesPerDay += singleHourCookies;
//   }
// };

// function makeHeaderRow() { 
//   var tableRow = document.createElement('tr');
//   var thElement = document.createElement('th');
//   thElement.textContent = null;
//   salmonTable.appendChild(tableRow);
//   tableRow.appendChild(thElement);
//   for (var i = 0; i < hours.length; i++) {
//     thElement = document.createElement('th');
//     thElement.textContent = hours[i];
//     tableRow.appendChild(thElement);


//   }
//   thElement = document.createElement('th');
//   thElement.textContent = 'Location Total';
//   tableRow.appendChild(thElement);
//   console.log(salmonTable);
//   salmonTable.appendChild(tableRow);
// }


// function renderAllStores() {
//   for (var i = 0; i < storeLocations.length; i++) {
//     storeLocations[i].render();
//   }
// }
// function makeFooterRow() { //eslint-disable-line
//   var tableRow = document.createElement('tr');
//   tableRow.textContent = 'Totals';
//   salmonTable.appendChild(tableRow);
//   var bigStupidTotal = 0;
//   for (var i = 0; i < hours.length; i++) {
//     var hourlyTotal = 0;
//     for (var j = 0; j < storeLocations.length; j++) {
//       hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
//       bigStupidTotal += storeLocations[j].averageCookiesPerHour[i];
//     }
//     var tdElement = document.createElement('td');
//     tdElement.textContent = hourlyTotal;
//     tableRow.appendChild(tdElement);
//   }
//   tdElement = document.createElement('td');
//   tdElement.textContent = bigStupidTotal;
//   tableRow.appendChild(tdElement);
// }

// new Store('Alki', 2, 16, 4.6); //eslint-disable-line
// new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
// new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
// new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
// new Store('1st & Pike', 23, 65, 6.3); //eslint-disable-line




// makeHeaderRow();
// renderAllStores();
// makeFooterRow();




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

function Stores( name, minCustPerHour, maxCustPerHour, avgCookies) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookies = avgCookies;
  this.randCustByHour = [];
  this.cookiesByHour = [];
  this.totalSales = 0;
  locations.push(this);
}

var pike = new Stores('First and Pike', 23, 65, 6.3);
var sea = new Stores('SeaTac Airport', 3, 24, 1.2);
var cen = new Stores('Seattle Center', 11, 38, 3.7);
var cap = new Stores('Capitol Hill', 20, 38, 2.3);
var alki = new Stores('Alki', 2, 16, 4.6);

Stores.prototype.randCookies = function(){
  for (var i = 0; i < bizHours.length; i++ ){
    var random = Math.ceil(Math.random() * locations.avgCookies);
    Stores.cookiesByHour = random;
    console.log(random);
  }
};
Stores.prototype.randCookies();

Stores.prototype.generateTableHeading = function(){
  var hourHead = document.getElementById('store1');
  var thead = document.createElement('thead');
  hourHead.appendChild(thead);
  var row = document.createElement('tr');
  thead.appendChild(row);

  for (var i = -1; i < bizHours.length; i++) {
    var td = document.createElement('th');
    td.textContent = bizHours[i];
    row.appendChild(td);
  }
};

Stores.prototype.generateTableHeading();

Stores.prototype.render = function(){
  var hourHead = document.getElementById('store1');
  var thead = document.createElement('th');
  hourHead.appendChild(thead);
  var row = document.createElement('td');
  thead.appendChild(row);

  for (var i = 0; i < locations.length; i++) {
    var tr = document.createElement('tr');
    tr.textContent = locations[i].name;
    row.appendChild(tr);
  }
  var dataPoints = document.getElementById('store1');
  var thead1 = document.createElement('th');
  dataPoints.appendChild(thead1);
  var tr1 = document.createElement('tr');
  thead1.appendChild(tr1);

  for (var j = 0; j < locations.length; j++) {
    var td1 = document.createElement('tr');
    td1.textContent = locations[j].cookiesByHour[i];
    thead1.appendChild(td1);
  }
};
Stores.prototype.render();



//console.log(generateTableHeading);




// function renderData(){
//   var dataPoints = document.getElementById('store1');
//   var thead = document.createElement('th');
//   dataPoints.appendChild(thead);
//   for (var i = 0; i < locations.length; i++) {
//     var tr = document.createElement('tr');
//     tr.textContent = locations[i].maxCustPerHour;
//     thead.appendChild(tr);
//   }
// }
// renderData();

// function renderData2(){
//   var dataPoints = document.getElementById('store1');
//   var thead = document.createElement('th');
//   dataPoints.appendChild(thead);

//   for (var i = 0; i < locations.length; i++) {
//     var tr = document.createElement('tr');
//     tr.textContent = locations[i].avgCookies;
//     thead.appendChild(tr);
//   }
// }
// renderData2();

// console.log(renderData);







//@jm6




