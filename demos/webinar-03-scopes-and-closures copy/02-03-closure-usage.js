// hiding data
function foo() {
    var x = 1;

    function bar() {
        console.log( x );
    }

    return bar;
}

var fn = foo();
fn();

// lots of code follows this line...