# 💰 CodeClube Currency Converter

![Currency Converter Screenshot](./money.jpg)

A simple web app for converting between Brazilian Real (R$) and US Dollar (USD).

## Features ✨
- Real-time currency conversion
- Clean, intuitive interface
- Supports BRL to USD conversion
- Displays both original and converted amounts

## Tech Stack 🛠️
- HTML5
- CSS3
- JavaScript (ES6)

## Usage Example 🚀
```javascript
// Sample conversion function (simplified)
function convertCurrency(amount, rate) {
  return (amount * rate).toFixed(2);
}

const brlAmount = 20;
const exchangeRate = 0.171; // Example rate (BRL to USD)
const usdAmount = convertCurrency(brlAmount, exchangeRate);

console.log(`R$${brlAmount} = $${usdAmount}`);
