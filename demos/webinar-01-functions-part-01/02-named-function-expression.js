const sum3 = function sum2( x, y ) {
    // sum2( x + 1, y + 1 );
    console.log( sum2 );
    return x + y;
};

console.log( sum3( 13, 14 ) );
// console.log( sum2( 13, 14 ) ); // error

setTimeout(function() {
    foo();
}, 1000);