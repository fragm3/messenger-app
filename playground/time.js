// new Date().getTime()
//
// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar']
// console.log(date.getMonth());
// var moment = require('moment');
//
// var date = moment();
// date.add(100, 'year').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'));

var moment = require('moment');

var date = moment();
console.log(date.format('H:mm A'))
