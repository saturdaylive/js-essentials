// environment per iteration

// for( var i = 1; i <= 5; i++ ) {
//     // Immeditaely Invoked Function Expression (IIFE)
//     (function( j ) {
//         setTimeout(function() {
//             console.log( j );
//         }, 1000);
//     })( i );
// }

for( let i = 1; i <= 5; i++ ) {
    setTimeout(function() {
        console.log( i );
    }, 1000);
}

console.log( 'after the loop (after 5 setTimeout calls)' );