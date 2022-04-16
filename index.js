const lodash= require("lodash");

let characters=["a","b","c","d","e","f"];

let chunked=lodash.chunk(characters,2);

console.log(chunked);
console.log(lodash.difference([2,1],[2,3]));
var moment = require('moment');
  
console.log(moment().format());
  

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  

console.log(moment().format('dddd'));
  

console.log(moment().format("MMM Do YY"));
  


console.log(moment([2020-01-01]).isValid());
console.log(moment([2020-14-01]).isValid());

// console.log(moment.add(5, 'days'))
console.log(moment().add(7, 'days'));
console.log(moment().add(7, 'months'));
console.log(moment().add(7, 'years'));

console.log(moment().subtract(7, 'days'));
console.log(moment().subtract(7, 'months'));
console.log(moment().subtract(7, 'years'));


var x = new  moment([2014-11-11])
var y =  new moment([2015-09-11])
var duration = moment.duration(x.diff(y))
console.log(duration);


