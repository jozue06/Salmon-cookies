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

var storeArray = [];

var salmonTable = document.getElementById('store1'); //calls HTML to make the table before anyhthing is added and is a global variable at ID tag located in HTML


// Constructor for store info and push to storeArray:
function Stores(name, minCustPerHour, maxCustPerHour, avgCookies) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookies = avgCookies;
  this.randCustPerHour = [];
  this.cookiesPerHour = [];
  this.totalSales = 0;
  this.randCookiesPerH(); //function1
  this.cookiesPerCust(); // function2
  storeArray.push(this); //pushes info to storeArray
}

Stores.prototype.render = function () {//renders store names and data from the constructor, which got the numbers by the random number generator pushed to the arrays in the constructors
  var nameRow = document.createElement('tr'); //creates the row "left to right" starting with the name of the store, then taking all the data points in from the "Store" constructor.
  var storeColumn = document.createElement('td'); //creates the first column, where the store names will go
  storeColumn.textContent = this.name; // tells the computer to take the text from the this.name info in the constructor and put it in the location "storeColumn" that was created above.
  nameRow.appendChild(storeColumn); // makes nameRow get appended to the storeColumn, left to right, then to top to bottom.
  for (var i = 0; i < this.randCustPerHour.length; i++) { // this is a for loop to populate the cells and rows with the data related to the length of 'cookies per hour' array in the constructor, and generates random data each time it loops through.
    var dataCell = document.createElement('td'); // this creates the table detail row 'dataCell
    dataCell.textContent = this.randCustPerHour[i];  // takes the info in cookies per hour array, cycles through the array and puts that info into dataCell as text content.
    nameRow.appendChild(dataCell);
  }
  var totalData = document.createElement('td');
  totalData.textContent = this.totalSales;
  nameRow.appendChild(totalData);
  salmonTable.appendChild(nameRow);
};

Stores.prototype.randCookiesPerH = function () { //function1
  for (var i = 0; i < bizHours.length; i++) {
    var random = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.cookiesPerHour.push(random);
  }
};

Stores.prototype.cookiesPerCust = function () { //function2
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
  console.log(salmonTable);
  salmonTable.appendChild(tableRow);

}


function renderNames() {
  for (var i = 0; i < storeArray.length; i++) {
    storeArray[i].render();
  }
}

function footerRow() {
  var tableFootRow = document.createElement('tr');
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








//@jm6