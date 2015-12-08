// Based on Dan Abramov's Eggehead.io lesson on avoiding Array Mutations
// pronounced "exes"
var xs = [];

// concat does not mutate xs
xs.concat(1);

console.log(xs);   // xs = []

ys = xs.concat(1);
zs = ys.concat(2);
as = zs.concat(3);

console.log(as);  // ys = [1,2,3]

function removeItem(list, index) {
  return list
    .slice(0, index)
    .concat( list.slice( index + 1) );
}

console.log( removeItem( as, 2 ) ); // as = [ 1, 2 ]

console.log( as ); // [ 1, 2, 3 ]

function incrementItem(list, index) {
  return list
    .slice(0, index)
    .concat( [ list[index] + 1 ] )
    .concat( list.slice( index + 1) );
}

console.log( incrementItem(as, 1) ); // [ 1, 3, 3 ]
console.log( as ); // [ 1, 2, 3 ]
