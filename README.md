<div align="center">

# 🧮 JavaScript Calculator

**A sleek, fully functional calculator built with vanilla JavaScript**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

*Clean design • Smooth animations • Full keyboard support*

[Live Demo]([#](https://thedevsumit44.github.io/Calculator/)) • [Features](#-features) • [Getting Started](#-getting-started)

</div>

---

## 📖 About

A modern, responsive calculator application built with **vanilla JavaScript**. Features a clean interface, smooth animations, and supports both click and keyboard input for seamless user experience.

---

## ✨ Features

### 🎯 Core Functionality
- ➕ **Basic Operations** — Addition, subtraction, multiplication, division
- 🔢 **Decimal Support** — Handle floating-point calculations
- ⌫ **Backspace** — Delete last digit
- 🔄 **Clear (AC)** — Reset calculator
- ⚡ **Instant Results** — Real-time calculation display

### 🎨 User Experience
- ⌨️ **Keyboard Support** — Type numbers and operators directly
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop
- 🎭 **Button Animations** — Visual feedback on every press
- 🌈 **Modern UI** — Glassmorphism with gradient accents
- 🔊 **Click Feedback** — Smooth hover effects

### 🛡️ Error Handling
- ➗ **Division by Zero** — Displays "Error" instead of crashing
- 🚫 **Invalid Operations** — Prevents consecutive operators
- 🔢 **Number Limits** — Handles large numbers gracefully

---

## 🎮 How to Use

### Mouse/Touch
1. Click numbers to build your calculation
2. Click an operator (+, -, ×, ÷)
3. Click more numbers
4. Press **=** to see the result
5. Use **AC** to clear or **⌫** to delete last digit

### Keyboard
```
Numbers: 0-9
Operators: + - * /
Equals: Enter or =
Clear: Escape or C
Backspace: Backspace or Delete
Decimal: . (period)
```

---

## 🚀 Live Demo

Try it here: [Calculator Demo](https://thedevsumit44.github.io/Calculator/)

---

## 🛠️ Built With

**Technologies:**
- **HTML5** — Structure
- **CSS3** — Styling with Flexbox/Grid
- **JavaScript (ES6+)** — Logic and interactivity

**Key Features:**
- Event listeners for button clicks
- Keyboard event handling
- DOM manipulation
- State management with variables
- Error handling with try-catch

---

## 💻 Getting Started

### Installation
```bash
# Clone repository
git clone https://github.com/TheDevSumit44/Calculator.git

# Navigate to directory
cd Calculator

# Open in browser
open index.html
```

No dependencies required!

---

## 📂 Project Structure
```
Calculator/
├── index.html          # Main HTML structure
├── style.css           # Calculator styling
├── script.js           # Calculator logic
└── README.md           # Documentation
```

---

## 🎨 Design Features

### Color Scheme
- **Primary:** Gradient backgrounds (purple to blue)
- **Accent:** Orange for operators
- **Display:** Dark with light text
- **Buttons:** Glassmorphism effect

### Animations
```css
- Button hover: Scale transform + shadow
- Button active: Pressed effect
- Display: Smooth text transitions
- Error state: Red glow animation
```

---

## 🧠 Key Code Concepts

### State Management
```javascript
let currentInput = '';
let previousInput = '';
let operator = null;
```

### Operation Logic
```javascript
function calculate(a, operator, b) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        default: return b;
    }
}
```

### Keyboard Support
```javascript
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') handleNumber(e.key);
    if (['+', '-', '*', '/'].includes(e.key)) handleOperator(e.key);
    if (e.key === 'Enter' || e.key === '=') handleEquals();
    if (e.key === 'Escape') handleClear();
    if (e.key === 'Backspace') handleBackspace();
});
```

---

## 📚 What I Learned

Building this calculator helped me understand:

- ✅ **Event-driven programming** with click and keyboard events
- ✅ **State management** without frameworks
- ✅ **DOM manipulation** for dynamic updates
- ✅ **Error handling** for edge cases
- ✅ **CSS animations** for better UX
- ✅ **Responsive design** principles
- ✅ **JavaScript operators** and type handling

---

## 🔮 Future Enhancements

- [ ] Scientific mode (sin, cos, tan, √, x², etc.)
- [ ] History panel showing past calculations
- [ ] Theme switcher (light/dark mode)
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Percentage calculations
- [ ] Parentheses support for complex expressions
- [ ] Calculation history export
- [ ] Voice input support

---

## 🤝 Contributing

Improvements and suggestions welcome!

1. Fork the repository
2. Create feature branch (`git checkout -b feature/cool-feature`)
3. Commit changes (`git commit -m 'Add cool feature'`)
4. Push to branch (`git push origin feature/cool-feature`)
5. Open Pull Request

---

## 👨‍💻 Author

**Sumit**

- GitHub: [@TheDevSumit44](https://github.com/TheDevSumit44)
- Project: [JS Calculator](https://thedevsumit44.github.io/Calculator/)

---

<div align="center">

**🧮 Math made simple, design made beautiful**

*Built with vanilla JavaScript • No frameworks • Pure logic*

</div>
