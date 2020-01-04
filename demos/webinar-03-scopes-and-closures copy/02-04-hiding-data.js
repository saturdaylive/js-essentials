function getShoppingCart() {
    const items = [];

    function add( item ) {
        items.push( item );
    }

    function show() {
        console.log( items );
    }

    return {
        add: add,
        show: show
    };
}

const cart = getShoppingCart();

cart.add( 'Soap' );
cart.add( 'Shampoo' );

cart.show();

// singleton cart
// const cart = (function() {
//     const items = [];

//     function add( item ) {
//         items.push( item );
//     }

//     function show() {
//         console.log( items );
//     }

//     return {
//         add: add,
//         show: show
//     };
// })();