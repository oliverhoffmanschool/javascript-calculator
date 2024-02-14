let sum = ""; // Initialize sum to 0

const one = document.getElementById("one"),
  two = document.getElementById("two"),
  three = document.getElementById("three"),
  four = document.getElementById("four"),
  five = document.getElementById("five"),
  six = document.getElementById("six"),
  seven = document.getElementById("seven"),
  eight = document.getElementById("eight"),
  nine = document.getElementById("nine"),
  zero = document.getElementById("zero"),
  multiply = document.getElementById("multiplication"),
  divide = document.getElementById("division"),
  add = document.getElementById("plus"),
  subtract = document.getElementById("minus"),
  output = document.getElementById("outputbox"),
  clear = document.getElementById("clear"),
  lastChar = output.textContent.slice(-1),
  enter = document.getElementById("enter"),
  decimal = document.getElementById("dot"),
  deletechar = document.getElementById("delete"); // Declare output here

one.addEventListener("click", function () {
  sum += "1";
  output.textContent = sum;
});
two.addEventListener("click", function () {
  sum += "2";
  output.textContent = sum;
});
three.addEventListener("click", function () {
  sum += "3";
  output.textContent = sum;
});
four.addEventListener("click", function () {
  sum += "4";
  output.textContent = sum;
});
five.addEventListener("click", function () {
  sum += "5";
  output.textContent = sum;
});
six.addEventListener("click", function () {
  sum += "6";
  output.textContent = sum;
});
seven.addEventListener("click", function () {
  sum += "7";
  output.textContent = sum;
});
eight.addEventListener("click", function () {
  sum += "8";
  output.textContent = sum;
});
nine.addEventListener("click", function () {
  sum += "9";
  output.textContent = sum;
});
zero.addEventListener("click", function () {
  sum += "0";
  output.textContent = sum;
});
clear.addEventListener("click", function () {
  sum = "";
  output.textContent = sum;
});
add.addEventListener("click", function () {
  handleOperatorClick("+");
});

subtract.addEventListener("click", function () {
  handleOperatorClick("-");
});

multiply.addEventListener("click", function () {
  handleOperatorClick("*");
});

divide.addEventListener("click", function () {
  handleOperatorClick("/");
});
decimal.addEventListener("click", function () {
  sum += ".";
  output.textContent = sum;
});
enter.addEventListener("click", function () {
  if (output.textContent.length > 0) {
    sum = eval(output.textContent);
    output.textContent = sum;
  }
});
deletechar.addEventListener("click", function () {
  if (output.textContent.length > 0) {
    sum = sum.slice(0, -1);
    output.textContent = sum;
  }
});
//make it so that code runs from keyboard strokes and not only button presses
document.addEventListener("keydown", function (event) {
  if (event.key === "1") {
    sum += "1";
    output.textContent = sum;
  } else if (event.key === "2") {
    sum += "2";
    output.textContent = sum;
  } else if (event.key === "3") {
    sum += "3";
    output.textContent = sum;
  } else if (event.key === "4") {
    sum += "4";
    output.textContent = sum;
  } else if (event.key === "5") {
    sum += "5";
    output.textContent = sum;
  } else if (event.key === "6") {
    sum += "6";
    output.textContent = sum;
  } else if (event.key === "7") {
    sum += "7";
    output.textContent = sum;
  } else if (event.key === "8") {
    sum += "8";
    output.textContent = sum;
  } else if (event.key === "9") {
    sum += "9";
    output.textContent = sum;
  } else if (event.key === "0") {
    sum += "0";
    output.textContent = sum;
  } else if (
    event.key === "x" || event.key === "*"
  ) {
    handleOperatorClick("*");
  } else if (event.key === "+") {
    handleOperatorClick("+");
  } else if (event.key === "-") {
    handleOperatorClick("-");
  } else if (event.key === "÷" || event.key === "/" || event.key === "Slash") {
    handleOperatorClick("/");
  } else if (event.key === ".") {
    sum += ".";
    output.textContent = sum;
  } else if (
    (event.key === "=" || event.key === "Enter") &&
    output.textContent.length > 0
  ) {
    sum = eval(output.textContent);
    output.textContent = sum;
  } else if (event.key === "Backspace" && output.textContent.length > 0) {
    sum = sum.slice(0, -1);
    output.textContent = sum;
  }
});
function handleOperatorClick(operator) {
  if (output.textContent.length > 0) {
    const lastChar = output.textContent.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
      // If the last character is an operator, replace it with the new one
      sum = sum.slice(0, -1) + operator;
    } else {
      // Otherwise, append the operator
      sum += operator;
    }
    output.textContent = sum;
  }
}
