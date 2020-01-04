function sum( x, y ) {
    // setTimeout is a non-blocking function
    setTimeout(function() {
        console.log( x + y );
    }, 1000);
    console.log( 'after setTimeout call' ); // executed immediately - not after 1 second
}

sum( 12, 13 );
console.log( 'after sum call' );