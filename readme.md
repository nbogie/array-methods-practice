# Array method exercises

## Task 1 - various

1.  Install dependencies with `yarn`
1.  Run `yarn test` to check that jest runs the tests but they fail for sensible reasons
1.  Consult [the tests](src/conversion/myFunctions.test.js)
    and edit [myFunctions.js](src/conversion/myFunctions.js)
1.  implement the functions in myFunctions.js until all tests pass.

## Task 2 - map practice

1. Follow the setup steps as per task 1 if you have not already done so
1. run `yarn test mapPractice` to only run the tests for this task
1. Consult the tests in [mapPractice.test.js](src/conversion/mapPractice.test.js)
1. and edit the functions in [mapPractice.js](src/conversion/mapPractice.js)
1. implement the functions until all tests pass.

You should use the `array.map` function in your solution for each of these functions.

### Conveniences

**Run tests on every change**

By adding `--watch` to an instruction to jest, you can cause tests to be re-run every time a relevant file is changed. E.g.

```bash
yarn test mapPractice --watch
```

**Run only one test**

Note that you can amend a test to be the only one to run, when you want to focus on it, as follows:

```js
    test.only("square all numbers"
```

instead of

```js
    test("square all numbers"
```

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
-   array.map

### Extra clarifications

-   It's fine to make little helper functions to get the work done
-   It's fine to use arrow functions or normal function declaration syntax wherever you like, except...
-   Don't change the signature (first line) of the given functions, nor their jsdoc, only their bodies.
    -   (so, also don't change the form of the _existing_ functions to be arrow functions.)
-   It should not be necessary to edit the test file. (though you are welcome to add MORE tests to give further clarity or visibility into any problem)
