'use strict';
/*  ************ a lot of this code is from broxsonl's git hub salmon cookies.  *********************
*/
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

var storeLocations = [];

var salmon = document.getElementById('store1');

function Stores(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.avgCustPerH = [];
  this.avgCookiesPerH = [];
  this.totalDailyCookies = 0;
  this.numOfCustPerHour();
  this.cookiesPerCust();
  storeLocations.push(this);
}

Stores.prototype.render = function () {
  var trRowName = document.createElement('tr');
  var tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (var i = 0; i < this.avgCookiesPerH.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.avgCookiesPerH[i];
    trRowName.appendChild(tdCell);
  }
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalDailyCookies;
  trRowName.appendChild(tdTotal);
  salmon.appendChild(trRowName);
};

Stores.prototype.numOfCustPerHour = function () {
  for (var i = 0; i < bizHours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.avgCustPerH.push(singleHourCustomers);

  }
};


Stores.prototype.cookiesPerCust = function () {
  for (var i = 0; i < bizHours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCustPerH[i] * this.avgCookies);

    this.avgCookiesPerH.push(singleHourCookies);
    this.totalDailyCookies += singleHourCookies;

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
  var totalTotal = 0;
  for (var i = 0; i < bizHours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeLocations.length; j++) {
      hourlyTotal = hourlyTotal + storeLocations[j].avgCookiesPerH[i];
      totalTotal += storeLocations[j].avgCookiesPerH[i];

    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = totalTotal;
  tableRow.appendChild(tdElement);
}

new Stores('1st & Pike', 23, 65, 6.3);
new Stores('SeaTac Airport', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 38, 2.3);
new Stores('Alki', 2, 16, 4.6);



makeHeaderRow();
renderAllStores();
makeFooterRow();