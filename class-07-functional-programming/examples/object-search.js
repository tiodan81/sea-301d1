// Check an object for a substring
// This can be run in node or Chrome console

var people = [
  {
    name: 'Barack Obama',
    title: 'President of the United States of America'
  },
  {
    name: 'Valdimir Putin',
    title: 'President of Russia'
  }
];

// This would not work
// TypeError: TypeError: people.includes is not a function
// var result people.includes('Barack');

// We can borrow includes from String
var result = String.prototype.includes.call( people, { name: 'Barack Obama'} );

console.log( result );
