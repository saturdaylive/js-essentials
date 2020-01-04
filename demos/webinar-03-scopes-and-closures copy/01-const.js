// same rules for const and let variables as far as scopes is concerned
const y = 1;
// y = 2; // error

const obj = {
    x: 100
};

obj.z = 200;
console.log( obj );

obj.x++;
console.log( obj );

// obj = { // error
//     x: 300
// };