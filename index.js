function receivesAFunction(callback) {
callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("function returned");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("this is an anonymous function")
    }
}