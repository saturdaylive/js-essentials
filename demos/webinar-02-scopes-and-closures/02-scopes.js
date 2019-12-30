// 'use strict';

// "Lexical scoping"
var x = 1; // x is available everywhere
console.log( 'x in global scope = ', x );

function outer() {
    // internally generated code
    // function inner() {
    //     var z = 3;

    //     console.log( 'x in inner scope = ', x );
    //     console.log( 'y in inner scope = ', y );
    //     console.log( 'z in inner scope = ', z );
    // }

    // var y = undefined;
    // var inner = undefined;
    
    
    // 'use strict';

    // console.log( 'hello' );

    var y = 2; // y is scoped to outer()

    // internally...
    // y = 2;

    // let y = 3;
    
    // an error to assign value to a variable that has not been declared with var etc.
    a = 2; // no var - global variable created (non-strict mode)
    
    console.log( 'x in outer scope = ', x );
    console.log( 'y in outer scope = ', y );

    inner(); // this does not works - due to "hoisting" - would have worked if function were delcared using declaration syntax

    var inner = function() {
        var z = 3;

        console.log( 'x in inner scope = ', x );
        console.log( 'y in inner scope = ', y );
        console.log( 'z in inner scope = ', z );
    };
}

// console.log( 'a in global scope = ', a );
outer();
console.log( 'y in global scope = ', y );

// inner(); // local to outer()