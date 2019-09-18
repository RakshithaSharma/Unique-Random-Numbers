## Async Numbers

To complete the challenge, you need to generate a list of 50 unique numbers.
We provide the API you'll need to call to generate each individual number.

The implementation should be in the `solution.js` file.  This file should export a function that returns an array of numbers.  See the `test.js` file to see how it is used.

You must use the provided API function to get each individual number.  Here is an example of how the function is used:

``` javascript
var getNumber = require('./lib/get-number')
getNumber((number) => {
})
```

Note that `getNumber` is an asynchronous function that returns a random number after a random delay.

Do not modify the `test.js` file - this is used to validate your solution.  To validate your solution, run:

```
node test.js
```
