'use strict';
/*  ************ this is from broxsonl's git hub salmon cookies. my code is commeted out below this. I'm trying to do this, but it is not working very well.   *********************
*/
var bizHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

var storeLocations = [];

var salmon = document.getElementById('store1');

function Stores(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  this.numOfCustPerHour();
  this.cookiesPerCust();
  storeLocations.push(this);
}

Stores.prototype.render = function() {
  var trRowName = document.createElement('tr');
  var tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (var i = 0; i < this.averageCookiesPerHour.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.averageCookiesPerHour[i];
    trRowName.appendChild(tdCell);
  }
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trRowName.appendChild(tdTotal);
  salmon.appendChild(trRowName);
};

Stores.prototype.numOfCustPerHour = function() {
  for (var i = 0; i < bizHours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(singleHourCustomers);
  }
};


Stores.prototype.cookiesPerCust = function() {
  for (var i = 0; i < bizHours.length; i++) {
    var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = null;
  salmon.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (var i = 0; i < bizHours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = bizHours[i];
    tableRow.appendChild(thElement);


  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  console.log(salmon);
  salmon.appendChild(tableRow);
}


function renderAllStores() {
  for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }
}
function makeFooterRow() {
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  salmon.appendChild(tableRow);
  var bigTotal = 0;
  for (var i = 0; i < bizHours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeLocations.length; j++) {
      hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
      bigTotal += storeLocations[j].averageCookiesPerHour[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = bigTotal;
  tableRow.appendChild(tdElement);
}

new Stores('1st & Pike', 23, 65, 6.3);
new Stores('SeaTac Airport', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 38, 2.3);
new Stores('Alki', 2, 16, 4.6);

//new Stores('First and Pike', 23, 65, 6.3);
//new Stores('SeaTac Airport', 3, 24, 1.2);
//new Stores('Seattle Center', 11, 38, 3.7);
//new Stores('Capitol Hill', 20, 38, 2.3);
//new Stores('Alki', 2, 16, 4.6);




makeHeaderRow();
renderAllStores();
makeFooterRow();


///////////////////////////////// My try at the same stuff //////////////////////////////////

// 'use strict';

// var bizHours = [
//   '6am',
//   '7am',
//   '8am',
//   '9am',
//   '10am',
//   '11am',
//   '12pm',
//   '1pm',
//   '2pm',
//   '3pm',
//   '4pm',
//   '5pm',
//   '6pm',
//   '7pm',
//   '8pm'
// ];

// var locations = [];

// function Stores( name, minCustPerHour, maxCustPerHour, avgCookies) {
//   this.name = name;
//   this.minCustPerHour = minCustPerHour;
//   this.maxCustPerHour = maxCustPerHour;
//   this.avgCookies = avgCookies;
//   this.randCustByHour = [];
//   this.cookiesByHour = [];
//   this.totalSales = 0;
//   this.randCookies();
//   locations.push(this);
// }

// Stores.prototype.randCookies = function(){
//   for (var i = 0; i < bizHours.length; i++ ){
//     var random = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
//     this.cookiesByHour.push(random);
//     //console.log(random);
//     //might think of adding the 
//   }
// };



// function generateTableHeading(){
//   var hourHead = document.getElementById('thead');
//   var thead = document.createElement('thead');
//   hourHead.appendChild(thead);
//   var row = document.createElement('tr');
//   thead.appendChild(row);

//   for (var i = -1; i < bizHours.length; i++) {
//     var td = document.createElement('th');
//     td.textContent = bizHours[i];
//     row.appendChild(td);
//   }
// }
// generateTableHeading();

// function renderNames(){
//   var hourHead = document.getElementById('tbody');
//   var td = document.createElement('tr');
//   hourHead.appendChild(td);
//   for (var i = 0; i < locations.length; i++) {
//     var tr = document.createElement('tr');
//     tr.textContent = locations[i].name;
//     td.appendChild(tr);
//   }
//   var numbers = document.getElementById('tbody');
//   var th = document.createElement('tr');
//   numbers.appendChild(th);

//   for (var j = 0; j < bizHours.length; j++) {
//     var list = document.getElementById('tbody');
//     var tr = document.createElement('tr');
//     td.textContent = locations[j].cookiesByHour;
//     list.appendChild(tr);
//   }
// }
// renderNames();


// function renderNumbers(){
  
// renderNumbers();
// console.log(renderNumbers);

// var dataPoints = document.getElementById('store1');
//   var thead1 = document.createElement('th');
//   dataPoints.appendChild(thead1);
//   var tr1 = document.createElement('tr');
//   thead1.appendChild(tr1);

//   for (var j = 0; j < locations.length; j++) {
//     var td1 = document.createElement('tr');
//     var cphArr = locations[j].cookiesByHour;
//     console.log('__CPH_ARR__: ', cphArr);
//     td1.textContent = cphArr;
//     thead.appendChild(td);
//   }
// }

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




