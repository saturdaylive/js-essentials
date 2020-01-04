var g = 100;

function foo() { // closure( foo ) = { g, x, ... }
    var x = 1; // x is local to foo function

    function bar() { // closure( bar ) = { y, g, x, ... }
        var y = 1;
        console.log( 'x = ', x );
    }

    // bar();
    return bar;
}

var fn = foo(); // foo called and finished execution
fn(); // bar()