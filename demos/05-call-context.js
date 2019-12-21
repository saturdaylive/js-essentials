const obj = {
    x: 100,
    foo: function() {
        console.log( this );
    }
};

obj.foo();

const bar = obj.foo;
console.log( bar === obj.foo ); // true
bar(); // global object