
function receivesAFunction(cb) {
    return cb()
}
receivesAFunction(function () {console.log("I receive a function")})

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I am a named function.")
    } 
}
returnsANamedFunction()()

function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am an anonymous function.")
    } 
}
returnsAnAnonymousFunction()()