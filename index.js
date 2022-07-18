function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    let hello = function(){console.log("do something");};
    return hello;
}
function returnsAnAnonymousFunction(){
    return function (){console.log("do something");};
}
