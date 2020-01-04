# Webinar 2 - Scopes and Closures

## Flow
- What is scope of variables?
- How is it different from lifetime of objects?
- Phases of JS execution - compilation and execution
- Lexical scoping (Scope of variables assigned at compile-time) - program is controlled entirely by the placement of functions, blocks, and scopes, in relation to each other
- How eval, with, dynamically alter scope
- Variables created when scope entered for execution
- Variables assigned values on declaration line in code
- global, function and block scopes - var, let and const
- var - global and function scope
- let, const - global, function, and block scope
- Prefer let, const
- Environment per iteration for let and const - also, why const fails as for loop iteration variable
- Handling of redeclarations
- Scope chain and Shadowing
- let can shadow var, var cannot shadow let
- The global object - let, const variables can be global but not mirrored as properties on the global object
- Hoisting of function declarations, variable / function expressions
- var variables initialized with undefined. let, const remain uninitialized (with accompanying Temporal Dead Zone - TDZ)
- Case of missing var/let/const - how to prevent this usage using "use strict" directive
- Note on source and target usage of identifiers
- POLE principle - scoping with blocks
- Scoping with functions - pre-ES2015 way of "block scoping"
- IIFEs to prevent global variables
- Scope of error variable in catch block - other variables declared within behave as expected
- Scope of Function Declarations in Block (FiB) - Exception in browsers (and Node.js)
- Note on ES2015 module scope

## References
https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures