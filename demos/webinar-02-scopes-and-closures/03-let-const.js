function foo() {
    if( true ) {
        var x = 1; // global variable
        let y = 1; // block-scoped variable

        console.log( 'x within block = ', x );  
        console.log( 'y within block = ', y );  
    }

    console.log( 'x outside block = ', x );  
    // console.log( 'y outside block = ', y ); // error
}

foo();

// console.log( 'x outside block = ', x ); // error - x is scoped to foo function

{
    let p = 100;
    console.log( p );
}

console.log( p );