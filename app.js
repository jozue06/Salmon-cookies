//the hours of opperation variable:
var bizHours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'];
//the first store info object:

//constructors create new objects like a factory.


//create list of locations:

var allLocations = [];


var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  salesPerH: [],
  totalSales: 0,
  //creates random totals from customer info
  randomCust: function(){
    return Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer;
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
      tableEle.appendChild(rowEle); //renders
    }
    //makes a seperate LI for just total sales all day
    var totalEle = document.createElement('li');
    totalEle.textContent = 'Total: ' + this.totalSales;
    tableEle.appendChild(totalEle);
    storeEle.textContent = this.name;
    storeEle.appendChild(tableEle);
  }

};

document.getElementById('store1').addEventListener('click',function(){
  showTable('store1');
});
function showTable(){
  {
    alki.makeTable();

  }
}
//alki.makeTable();
//calls the elements, store and all its info, and all the functions inside the object


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

document.getElementById('store2').addEventListener('click',function(){
  showTable2('store2');
});
function showTable2(){
  {
    pikePlace.makeTable();
  }
}
//pikePlace.makeTable();


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

document.getElementById('store3').addEventListener('click',function(){
  showTable3('store3');
});
function showTable3(){
  {
    seaTac.makeTable();
  }
}
//seaTac.makeTable();

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

document.getElementById('store4').addEventListener('click',function(){
  showTable4('store4');
});
function showTable4(){
  {
    seaCen.makeTable();
  }
}

//seaCen.makeTable();


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

document.getElementById('store5').addEventListener('click',function(){
  showTable5('store5');
});
function showTable5(){
  {
    capHill.makeTable();
  }
}

//capHill.makeTable();
