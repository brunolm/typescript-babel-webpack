async function foo() {
  const value = await bar();
  console.log(value);
}

function bar() {
  return new Promise((resolve, reject) => {
    return resolve(4);
  });
}

(async function run() {
  await foo();
}());
