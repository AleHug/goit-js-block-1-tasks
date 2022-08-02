function checkForSpam(message) {
  let result;
  // Change code below this line
  const normalizedLowerCaseInput = message.toLowerCase();
    result =
      normalizedLowerCaseInput.includes("spam") ||
        normalizedLowerCaseInput.includes("sale");
    
    // Второй вариан!

    // result =
    //   message.toLowerCase().includes("spam") ||
    //   message.toLowerCase().includes("sale");

  // Change code above this line
    return result;
}

const resultVorSpam = checkForSpam("Latest technology news");
console.log(resultVorSpam)



// const normalizedToUpperCaseInput = userInput.toUpperCase();
// toLowerCase();

// const productName = "Repair droid";

// console.log(productName.includes("a")); // true
// console.log(productName.includes("A")); // false
// console.log(productName.includes("droid")); // true
// console.log(productName.includes("Droid")); // false
// console.log(productName.includes("Repair")); // true
// console.log(productName.includes("repair")); // false
