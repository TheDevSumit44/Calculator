const display = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number");
const piBtn = document.querySelector(".pi-btn");
const clearBtn = document.getElementById("clear_btn");
const equalsBtn = document.getElementById("equals_btn");
const deleteBtn = document.getElementById("x-btn");

const operatorBtns = [
  document.getElementById("add-btn"),
  document.getElementById("subtract-btn"),
  document.getElementById("multiply-btn"),
  document.getElementById("divide-btn")
];

let currentInput = "";

// Update display
function updateDisplay() {
  display.textContent = currentInput || "0";
}

// Numbers
numberBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentInput += btn.textContent;
    updateDisplay();
  });
});

// π button
piBtn.addEventListener("click", () => {
  currentInput += "π";
  updateDisplay();
});

// Operators
operatorBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.trim();

    if (currentInput === "" && value !== "-") return;
    if (/[+\-*/]$/.test(currentInput)) {
      currentInput = currentInput.slice(0, -1);
    }
    currentInput += value;
    updateDisplay();
  });
});

// Delete
deleteBtn.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
});

// Clear
clearBtn.addEventListener("click", () => {
  currentInput = "";
  updateDisplay();
});

// Equals
equalsBtn.addEventListener("click", () => {
  try {
    let expression = currentInput.replace(/π/g, `(${Math.PI})`);
    let result = eval(expression);
    display.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    display.textContent = "Error";
    currentInput = "";
  }
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || e.key === ".") {
    currentInput += e.key;
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    if (currentInput === "" && e.key !== "-") return;
    if (/[+\-*/]$/.test(currentInput)) currentInput = currentInput.slice(0, -1);
    currentInput += e.key;
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (e.key === "Enter" || e.key === "=") {
    try {
      let expression = currentInput.replace(/π/g, `(${Math.PI})`);
      let result = eval(expression);
      display.textContent = result;
      currentInput = result.toString();
    } catch {
      display.textContent = "Error";
      currentInput = "";
    }
  } else if (e.key.toLowerCase() === "c") {
    currentInput = "";
  }
  updateDisplay();
});
