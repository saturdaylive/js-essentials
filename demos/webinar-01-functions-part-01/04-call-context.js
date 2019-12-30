// 'use strict';

function foo() {
    // "this" - function call context
    console.log( this );
}

foo(); // global object (window in browser / global in Node.js)

console.clear();

const obj = {
    x: 100,
    foo: foo
};

console.log( obj.foo === foo );

obj.foo(); // obj