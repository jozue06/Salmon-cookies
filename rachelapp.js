'use strict'

var bizHours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'];


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
      console.log(this.makeSalesPerH);
    }
  },
  calcCookiesSoldByHour: function(){
    for (var j = 0; j < bizHours.length; j++){
      this.calcCookiesSoldByHour.push(Math.round(this.avgCookie * this.randomCust[j]));
    }
  },
  render: function() {
    var pikePlace = document.getElementById('pikePlace'); //this is the getter!

  }
};