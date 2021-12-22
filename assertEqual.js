//
//The console.assert function prints to the console for us, the developer, when an expected outcome is not met (fails) so that we can look into why.
//make own fn that compare if identical/non-identical strings/numbers and return pass/Fail msg

const assertEqual = (act, exp) => {
  (act === exp) ? console.log(`🔫 🔫 🔫 Assertion Passed:[${act}]===[${exp}]`) : console.log(`🛑🛑🛑 Assertion failed:[${act}] != [${exp}]`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);