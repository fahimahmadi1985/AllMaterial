async function testAwait() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello Await"), 2000);
    });

    let result = await promise; // wait till the promise resolves (*)

    console.log(result); // "done!"
  } catch (err) {
    console.log(err.message);
  }
}

testAwait();
