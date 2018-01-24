'use strict';

//copy and paste this app.js code into your console
var rachel = {
  age: 37,
  profession: 'instructor',
  hobbies: ['eating', 'reading', 'weeding', 'sleeping'],
  details: function() {
    return 'rachel likes ' + this.hobbies[0] + ' and ' + this.hobbies[1];  
  }
};
console.log( 'rachel likes ' + this.hobbies[0] + ' and ' + this.hobbies[1]);

function makeHTML() {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + rachel.details() + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for (var i = 0; i < rachel.hobbies.length; i++) {
    listArr.push('<li>' + rachel.hobbies[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

makeHTML();