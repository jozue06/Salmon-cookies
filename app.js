//the hours of opperation variable:
var bizHours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm', '8pm'];
//the first store info object:
var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  salesPerH: [],
  totalSales: 0,
  //creates random customer info
  randomCust: function(){
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  //pushes the random info into the sales per hour array with the bizhour info
  makeSalesPerH: function(){
    for (var i = 0; i < bizHours.length; i++ ){
      var random = Math.floor(this.randomCust() * this.avgCookie);
      this.salesPerH.push(random);
      this.totalSales += random;
    }
  },
  //creates the table with the info from "this.sales per h"
  makeTable: function(){
    this.makeSalesPerH();
    var storeEle = document.getElementById('store1');
    var tableEle = document.createElement('ul');
    //takes biz hours info and sales per that biz hour and contactinates them in the LI's
    for (var i = 0; i < bizHours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = bizHours[i] + ': ' + this.salesPerH[i] + ' cookies';
      tableEle.appendChild(rowEle);
    }
    //makes a seperate LI for just total sales all day
    var totalEle = document.createElement('li');
    totalEle.textContent = 'Total: ' + this.totalSales;
    tableEle.appendChild(totalEle);
    storeEle.textContent = this.name;
    storeEle.appendChild(tableEle);
  }
};
alki.makeTable(); //calls the elements, store and all its info, and all the functions inside the object


var pikePlace  = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  salesPerH: [],
  totalSales: 0,
  randomCust: function(){
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  makeSalesPerH: function(){
    for (var i = 0; i < bizHours.length; i++ ){
      var random = Math.floor(this.randomCust() * this.avgCookie);
      this.salesPerH.push(random);
      this.totalSales += random;
    }
  },
  makeTable: function(){
    this.makeSalesPerH();
    var storeEle = document.getElementById('store2');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < bizHours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = bizHours[i] + ': ' + this.salesPerH[i] + ' cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent = 'Total: ' + this.totalSales;
    tableEle.appendChild(totalEle);
    storeEle.textContent = this.name;
    storeEle.appendChild(tableEle);
  }
};
pikePlace.makeTable();


var seaTac  = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  salesPerH: [],
  totalSales: 0,
  randomCust: function(){
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  makeSalesPerH: function(){
    for (var i = 0; i < bizHours.length; i++ ){
      var random = Math.floor(this.randomCust() * this.avgCookie);
      this.salesPerH.push(random);
      this.totalSales += random;
    }
  },
  makeTable: function(){
    this.makeSalesPerH();
    var storeEle = document.getElementById('store3');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < bizHours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = bizHours[i] + ': ' + this.salesPerH[i] + ' cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent = 'Total: ' + this.totalSales;
    tableEle.appendChild(totalEle);
    storeEle.textContent = this.name;
    storeEle.appendChild(tableEle);
  }
};
seaTac.makeTable();

var seaCen  = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  salesPerH: [],
  totalSales: 0,
  randomCust: function(){
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  makeSalesPerH: function(){
    for (var i = 0; i < bizHours.length; i++ ){
      var random = Math.floor(this.randomCust() * this.avgCookie);
      this.salesPerH.push(random);
      this.totalSales += random;
    }
  },
  makeTable: function(){
    this.makeSalesPerH();
    var storeEle = document.getElementById('store4');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < bizHours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = bizHours[i] + ': ' + this.salesPerH[i] + ' cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent = 'Total: ' + this.totalSales;
    tableEle.appendChild(totalEle);
    storeEle.textContent = this.name;
    storeEle.appendChild(tableEle);
  }
};
seaCen.makeTable();


var capHill  = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  salesPerH: [],
  totalSales: 0,
  randomCust: function(){
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  makeSalesPerH: function(){
    for (var i = 0; i < bizHours.length; i++ ){
      var random = Math.floor(this.randomCust() * this.avgCookie);
      this.salesPerH.push(random);
      this.totalSales += random;
    }
  },
  makeTable: function(){
    this.makeSalesPerH();
    var storeEle = document.getElementById('store5');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < bizHours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = bizHours[i] + ': ' + this.salesPerH[i] + ' cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent = 'Total: ' + this.totalSales;
    tableEle.appendChild(totalEle);
    storeEle.textContent = this.name;
    storeEle.appendChild(tableEle);
  }
};
capHill.makeTable();

/*
var bizHours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm', '8pm'];
var table = document.getElementById('locations');
var stores = [];
var pikePlace = stores.push(new FishStore ('Pike Place', 8, 17, 88, 5.2, 'pikeRow'));
var seaTac = stores.push(new FishStore ('Sea Tac Airport', 24, 1.2,8, 5,'seaRow'));
console.log(seaTac);

function FishStore(storeLoc, bizHours, min, max, avg, storeRow) {
  this.name = storeLoc;
  this.minCustomer = min;
  this.maxCustomer = max;
  this.avgCookie = avg;
  this.row = storeRow;
  this.hourlySales = [];
  this.totalSales = 0;
}

FishStore.prototype.getRandomcust = function() {
  return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
};
FishStore.prototype.getHourlySales = function () {
  for (var i = 0; i< bizHours.length; i++) {
    var rand = Math.floor(this.getRandomcust() * this.avgCookie);
    this.hourlySales.push(rand);
    this.totalSales += rand;
  }
};

FishStore.prototype.render = function() {
  var storeSection = document.getElementById('stores');
  var row = document.createElement('tr');
  var td = document.createElement('td');
  td.innerHTML = this.name;
  row.appendChild(td);

  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdHourly = document.createElement('td');
    tdHourly.innerHTML = this.hourlySales[i];
    row.appendChild(tdHourly);
  }

  var total = document.createElement('td');
  total.innerHTML = this.totalSales;
  row.appendChild(total);

  storeSection.appendChild(row);
};
console.log(pikePlace.minCustomer);
function generateTableHeading(){
  var storeSection = document.getElementById('stores');
  var thead = document.createElement('thead');
  storeSection.appendChild(thead);
  var row = document.createElement('tr');
  thead.appendChild(row);
  var td = document.createElement('td');
  td.innerHTML = 'Location';
  row.appendChild(td);

  for (var i = 0; i < bizHours.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = bizHours[i];
    row.appendChild(td);
  }

  var tdTotal = document.createElement('th');
  tdTotal.textContent = this.totalSales;
  tdTotal.innerHTML = 'Total';
  row.appendChild(tdTotal);
  storeSection.appendChild(row);
}

generateTableHeading();
stores.forEach(function(store){
  store.getHourlySales();
  store.render();
});

/*var clearFields = function(event){
  event.target.storeLocal.value = null;
  event.target.minInput.value = null;
  event.target.maxInput.value = null;
  event.target.avgInput.value = null;
};
*/
/*
var formEle = document.getElementById('entryForm');
formEle.addEventListener('submit', function(event) {
  event.preventDefault();
  var newStoreName = event.target.storeLocal.value;
  var newMin = parseInt(event.target.minInput.value);
  var newMax = parseInt(event.target.maxInput.value);
  var newAvg = parseFloat(event.target.avgInput.value);
  var newRow = newStoreName + 'Row';
  var newStore = new FishStore(newStoreName, 8, newMin, newMax, newAvg, newRow);
  newStore.getHourlySales();
  newStore.render();
  stores.push(newStore);
});*/