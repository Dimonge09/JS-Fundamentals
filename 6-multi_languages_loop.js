const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];
console.log(messages.join("\n"));

const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let i = 0;
let result = "";

for (; i < messages.length; i++) {
  result += messages[i] + (i < messages.length - 1 ? "\n" : "");
}

console.log(result);
