/* Full Disclosure! Examples taken from google search, gitHub, stackOverflow */

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
console.log(pikePlace.bizHours);
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
});