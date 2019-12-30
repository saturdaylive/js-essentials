console.log( sum( 15, 16 ) );

function sum( x, y ) {
    return x + y;
}

console.log( sum( 12, 13 ) );

const sum3 = function sum2( x, y ) {
    return x + y;
};

console.log( sum3( 17, 18 ) );

console.log( sum3( 13, 14 ) );
// console.log( sum2( 13, 14 ) ); // error - sum2 is not defined in this scope