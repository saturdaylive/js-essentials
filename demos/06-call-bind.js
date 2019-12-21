function foo() {
    console.log( this );
}

const ctx = { x : 1 };
foo.call( ctx ); // foo()

const ctxBoundFoo = foo.bind( ctx );
ctxBoundFoo(); // foo.call( ctx );
ctxBoundFoo(); // foo.call( ctx );
ctxBoundFoo(); // foo.call( ctx );

const anotherBoundFoo = ctxBoundFoo.bind( { x: 100 } );
anotherBoundFoo();
