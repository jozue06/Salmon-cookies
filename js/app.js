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

var salmonTable = document.getElementById('store2'); //calls HTML to make the table before anyhthing is added and is a global variable at ID tag located in HTML


// Constructor for store info and push to storeArray:
function Stores( name, minCustPerHour, maxCustPerHour, avgCookies) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookies = avgCookies;
  this.randCustPerHour = [];
  this.cookiesPerHour = [];
  this.totalSales = 0;
  this.randCookiesPerH(); //function1
  storeArray.push(this); //pushes info to storeArray
}

Stores.prototype.render = function () {//renders store names and data from the constructor, which got the numbers by the random number generator pushed to the arrays in the constructors
  var nameRow = document.createElement('tr'); //creates the row "left to right" starting with the name of the store, then taking all the data points in from the "Store" constructor.
  var storeColumn = document.createElement('td'); //creates the first column, where the store names will go
  storeColumn.textContent = this.name; // tells the computer to take the text from the this.name info in the constructor and put it in the location "storeColumn" that was created above.
  nameRow.appendChild(storeColumn); // makes nameRow get appended to the storeColumn, left to right, then to top to bottom.

  for (var i = 0; i < this.cookiesPerH.length; i++);{ // this is a for loop to populate the cells and rows with the data related to the length of 'cookies per hour' array in the constructor, and generates random data each time it loops through.
    var dataCell = document.createElement('td'); // this creates the table detail row 'dataCell
    dataCell.textContent = this.cookiesPerH[i];  // takes the info in cookies per hour array, cycles through the array and puts that info into dataCell as text content.
    
  }

};

Stores.prototype.randCookiesPerH = function(){ //function1
  for (var i = 0; i < bizHours.length; i++ ){
    var random = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.cookiesByHour.push(random);
  }
};



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

