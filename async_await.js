// The code will create an asynchronous fuction named (step 1) that will returns a promise, when fulfilled, will have a result in (step 1 result)
async function step1() {
  return "step 1 result";
}

// The code denfines (step 2) as a sync function that returns (step 2 result) string immediately and there is no async behavior incolved.
function step2() {
  return "step 2 result";
}

// The code define (step 3) as an async function that fetches data from (https://pokeapi.co/api/v2/pokemon/mewtwo) and by using fectch it will return a Promise with a string of (step 3 result + Pokemon name), and it will also try to catch error handling and logs any errors that may come up to the console.
async function step3() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");
    const json = await response.json();
    return `step 3 result ${json["name"]}`;
  } catch (error) {
    console.error(error);
  }
}

// The code define (step 4) as an async function that reutrn a promise resolved with ("step 4 result"). The code uses the promise constructor and the ('then') method to create this promise and the fucntion is ayanc and return a resloved promise asyncronously.
async function step4() {
  return new Promise((resolve, reject) => {
    resolve("step 4");
  }).then((result) => {
    return result + " result";
  });
}

async function steps() {
  let result1 = await step1();
  let result2 = step2();
  let result3 = await step3();
  let result4 = await step4();

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
}

steps();
