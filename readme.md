# Array method exercises

## Task 1

1.  Install dependencies with `yarn`
1.  Run `yarn test` to check that jest runs the tests but they fail for sensible reasons
1.  Consult [the tests](src/conversion/myFunctions.test.js)
    and edit [myFunctions.js](src/conversion/myFunctions.js)
1.  implement the functions in myFunctions.js until all tests pass.

## Rules:

### Rule: No explicit loops

Weirdly, your code should _not_ contain any loop structures (no `for` or `while` loops).

### Rule: use the built-in array methods

Unlike in some earlier katas, for this set of exercises you should try to make use of some of the built-in js array methods instead.

Specifically, you should research the following, to see which ones can help you. (You won't need them all.)

-   array.find
-   array.findLast
-   array.findIndex
-   array.filter
-   array.some
-   array.includes
-   array.indexOf
-   array.every

### Extra clarifications

-   It's fine to make little helper functions to get the work done
-   It's fine to use arrow functions or normal function declaration syntax wherever you like, except...
-   Don't change the signature (first line) of the given functions, nor their jsdoc, only their bodies.
    -   (so, also don't change the form of the _existing_ functions to be arrow functions.)
-   It should not be necessary to edit the test file. (though you are welcome to add MORE tests to give further clarity or visibility into any problem)
