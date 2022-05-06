###


## setTimeOut
- this method calls after the given number of mulliseconds
- this methodis execute only once
- takes 2 argument , first one is function to be called, and second is the number of milliseconds of delay
- use clearTimeout to clear a particular time out

### clearInterval
- This method calls a function periodically after every n milliseconds.
- takes two arguments, first one is function to be called , and second is the number of milliseconds of interval
- use clearInterval to clear a particular interval

#### promises
-promise a result after some time
- if promise object is pending, a result is undefined
- If the promise object is fullfilled , the result is a value
- if promise is rejected, the result is an error object


----
- async keyword before a function makes the function return promise
-await keyword before function makes the function wait for a promise
-IMP =>await keyword can only be used inside an async function