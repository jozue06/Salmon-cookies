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
// var netTotal = 0;
// var totalCookiesByHour = 0;
function MakeLocation( name, minCustPerHour, maxCustPerHour, avgCookies) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookies = avgCookies;
  this.randCustByHour = [];
  this.cookiesByHour = 0;
  this.totalSales = 0;
  locations.push(this);
}
// MakeLocation();
console.log(MakeLocation);

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}
makeStands();
console.log(locations);

function generateTableHeading(){
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
}
generateTableHeading();
console.log(generateTableHeading);


function renderNames(){
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

  for (var j = 0; j < bizHours.length; j++) {
    var td1 = document.createElement('td');
    td1.textContent = locations[j].minCustPerHour;
    thead1.appendChild(td1);
  }
}
renderNames();

console.log(renderNames);



// function renderData(){
//   var dataPoints = document.getElementById('store1');
//   var thead = document.createElement('th');
//   dataPoints.appendChild(thead);
//   var td = document.createElement('td');
//   thead.appendChild(td);

//   for (var i = 0; i < locations.length; i++) {
//     var tr = document.createElement('tr');
//     tr.textContent = locations[i].minCustPerHour;
//     thead.appendChild(renderNames.tr);
//   }
// }
// renderData();

// console.log(renderData);







//@jm6




