//writing async before function name has a simple meaning
//means always the function return a promise

//since the return value of this function inserted
//into promise.resolve method so
//we are able to use .then method
setTimeout(async function func() {
  return "Hello this is a async function";
}, 1000).then(data => {
  console.log(data);
});

console.log("after sync function");
