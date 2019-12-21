function foo() {
    console.log( 'i am foo' );
};

const bar = foo;

foo();
bar();

console.log( foo === bar );

console.clear();

function f( g ) {
    g();
}

function h() {
    console.log( 'i am h' );
}

f( h ); // g = h;

console.clear();

function e() {
    function d() {
        console.log( 'd' );
    }

    return d;
}

const c = e(); // c = d;
c();