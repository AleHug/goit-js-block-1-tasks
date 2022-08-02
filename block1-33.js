function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
    if (message.lenght <= maxLength) {
      result = `${message}`
    }
    else {
        result = `${message.slice(0, maxLength)}...`;
    }
  /// Change code above this line
    return result;
}



const resultSlice = formatMessage("Curabitur ligula sapien", 16);
console.log(resultSlice);