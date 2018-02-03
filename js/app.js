'use strict';

var bizHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
];

var storeArray = [];

var salmonTable = document.getElementById('store1');

function myFunction() {
  document.getElementById('store1').style.cursor = 'default';
}
myFunction();

function Stores(name, minCustPerHour, maxCustPerHour, avgCookies) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookies = avgCookies;
  this.randCustPerHour = [];
  this.cookiesPerHour = [];
  this.totalSales = 0;
  this.randCookiesPerH();
  this.cookiesPerCust();
  storeArray.push(this);
}

Stores.prototype.render = function () {
  var nameRow = document.createElement('tr');
  var storeColumn = document.createElement('td');
  storeColumn.textContent = this.name;
  nameRow.appendChild(storeColumn);
  for (var i = 0; i < this.randCustPerHour.length; i++) {
    var dataCell = document.createElement('td');
    dataCell.textContent = this.randCustPerHour[i];
    nameRow.appendChild(dataCell);
  }
  var totalData = document.createElement('td');
  totalData.textContent = this.totalSales;
  nameRow.appendChild(totalData);
  salmonTable.appendChild(nameRow);
};

Stores.prototype.randCookiesPerH = function () {
  for (var i = 0; i < bizHours.length; i++) {
    var random = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.cookiesPerHour.push(random);
  }
};

Stores.prototype.cookiesPerCust = function () {
  for (var i = 0; i < bizHours.length; i++) {
    var hourCookies = Math.ceil(this.cookiesPerHour[i] * this.avgCookies);
    this.randCustPerHour.push(hourCookies);
    this.totalSales += hourCookies;
  }
};

function generateTableHeading() {
  var tableRow = document.createElement('tr');
  var thead = document.createElement('th');
  thead.textContent = null;
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(thead);
  for (var i = 0; i < bizHours.length; i++) {
    thead = document.createElement('th');
    thead.textContent = bizHours[i];
    tableRow.appendChild(thead);
  }
  thead = document.createElement('th');
  thead.textContent = 'Location Totals';
  tableRow.appendChild(thead);
  salmonTable.appendChild(tableRow);
}

function renderNames() {
  for (var i = 0; i < storeArray.length; i++) {
    storeArray[i].render();
  }
}

var tableFootRow = document.createElement('tr');
function footerRow() {
  tableFootRow.textContent = 'Totals';
  salmonTable.appendChild(tableFootRow);
  var totalTotal = 0;
  for (var i = 0; i < bizHours.length; i++) {
    var hTotal = 0;
    for (var j = 0; j < storeArray.length; j++) {
      hTotal = hTotal + storeArray[j].randCustPerHour[i];
      totalTotal += storeArray[j].randCustPerHour[i];
    }
    var tableData = document.createElement('td');
    tableData.textContent = hTotal;
    tableFootRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = totalTotal;
  tableFootRow.appendChild(tableData);
}

new Stores('1st & Pike', 23, 65, 6.3);
new Stores('SeaTac Airport', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 38, 2.3);
new Stores('Alki', 2, 16, 4.6);

generateTableHeading();
renderNames();
footerRow();

var formEle = document.getElementById('entryForm');

function eventListenFunction(event) {

  event.preventDefault();

  var newStoreName = event.target.storeLocal.value;
  var newMin = parseInt(event.target.minInput.value);
  var newMax = parseInt(event.target.maxInput.value);
  var newAvg = parseFloat(event.target.avgInput.value);

  if (!newStoreName || !newMin || !newMax || !newAvg) return alert('All Data Required');
  for (var i = 0; i < storeArray.length; i++) {
    if (newStoreName === storeArray[i].name) {
      return alert('Store name already exists');
    }
  }

  var newRow = newStoreName;
  var newStore = new Stores(newStoreName, 8, newMin, newMax, newAvg, newRow);
  newStore.randCookiesPerH();
  storeArray.push(newStore);
  storeArray[storeArray.length - 1].render();
  footerRow();

  event.target.storeLocal.value = null;
  event.target.minInput.value = null;
  event.target.maxInput.value = null;
  event.target.avgInput.value = null;
}

formEle.addEventListener('submit', (eventListenFunction));










//@jm6