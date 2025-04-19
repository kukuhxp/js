# **JavaScript Modules - Core & Web API**  
📦 *Modular Learning & Exploration of JavaScript*

Repositori ini berisi kumpulan modul JavaScript yang dibagi menjadi dua bagian utama: `core` dan `webapi`. Proyek ini bertujuan untuk mempelajari dan mengembangkan fitur dasar hingga lanjutan dari JavaScript, termasuk pemanfaatan Web API pada browser.

---

## **🧠 JavaScript Core**

### **🏗️ Constructors**
- `String`
- `Number`
- `Boolean`
- `Object`
- `Array`
- `Date`
- `RegExp`
- `Set`
- `Map`

### **📦 Static Objects**
- `Math`
- `JSON`
- `Atomics`

### **🔤 Data Types**
- `string`
- `number`
- `boolean` (`true`, `false`)
- `null`
- `undefined`
- `object`

> ℹ️ *Catatan: JavaScript tidak memiliki tipe data `integer` secara eksplisit. Semua angka bertipe `number`.*

---

## **🕒 JavaScript Version & Updates Log**

### **📘 ECMAScript 5 (ES5 / 2009)**
- `"use strict"`
- Akses `String[number]`
- Multiline strings
- `String.prototype.trim()`
- `Array.isArray()`
- Array Methods: `forEach()`, `map()`, `filter()`, `reduce()`, `every()`, dll.
- `JSON.parse()`, `JSON.stringify()`
- `Object.create()`, `Object.keys()`, `Object.defineProperty()`
- `Function.prototype.bind()`
- Trailing commas

### **📗 ECMAScript 6 (ES6 / 2015)**
- `let`, `const`, Arrow Functions
- Destructuring (`{}`, `[]`)
- Spread & Rest (`...`)
- `Map`, `Set`, `class`, `Promise`, `Symbol`
- `for...of`
- Default parameters, Rest parameters
- Array Methods: `find()`, `findIndex()`, dll.
- Math & Number additions
- JavaScript Modules

### **📘 ECMAScript 2016 (ES7 / 2016)**
- `**` (Exponentiation)
- `Array.prototype.includes()`

### **📙 ECMAScript 2017 (ES8 / 2017)**
- `Object.entries()`, `Object.values()`, `Object.getOwnPropertyDescriptors()`
- `String.padStart()`, `padEnd()`
- `async/await`
- Trailing commas in function params

### **📒 ECMAScript 2018 (ES9 / 2018)**
- `Promise.prototype.finally()`
- Asynchronous iteration: `for await...of`
- Rest/Spread properties untuk Object
- RegExp improvements
- Shared memory & Atomics

### **📘 ECMAScript 2019 (ES10 / 2019)**
- `String.prototype.trimStart()`, `trimEnd()`
- `Array.prototype.flat()`, `flatMap()`
- `Object.fromEntries()`
- `Symbol.prototype.description`
- Optional catch binding
- Improved `Function.prototype.toString()`

### **📗 ECMAScript 2020 (ES11 / 2020)**
- `BigInt`
- `Promise.allSettled()`
- `String.prototype.matchAll()`
- Optional Chaining (`?.`)
- Nullish Coalescing (`??`)
- Logical assignment operators (`&&=`, `||=`, `??=`)
- Dynamic `import()`

### **📙 ECMAScript 2021 (ES12 / 2021)**
- `String.prototype.replaceAll()`
- `Promise.any()`
- Numeric Separators (`_`)
- `WeakRef`, `FinalizationRegistry`

### **📒 ECMAScript 2022 (ES13 / 2022)**
- `.at()` pada Array & String
- `Object.hasOwn()`
- `Error.prototype.cause`
- Top-level `await`
- Public & Private Class Fields
- `RegExp /d` flag

### **📘 ECMAScript 2023 (ES14 / 2023)**
- Immutable array methods: `toReversed()`, `toSorted()`, `toSpliced()`, `with()`
- `findLast()`, `findLastIndex()`
- Shebang support (`#!`)
- Symbol key Weak collections

### **📗 ECMAScript 2024 (ES15 / 2024)**
- `Object.groupBy()`, `Map.groupBy()`
- `Promise.withResolvers()`
- Temporal API: `Temporal.PlainDate()`, `PlainTime()`, dst.
- Set operations: union, intersection, difference
- `RegExp /v` flag

---

## **🌐 JavaScript Web API**

### **📄 DOM (Document Object Model)**
- `document.querySelector()`, `getElementById()`
- `element.innerHTML`, `element.classList`, `element.style`
- `addEventListener()`, `click`, `input`, `submit`, dll.

### **🕹️ Events & Forms**
- Bubbling & Capturing
- Validasi form
- Keyboard & Mouse Events
- Custom Events

### **📡 Network API**
- `fetch()`, `XMLHttpRequest`
- `WebSocket`
- CORS & Same-Origin Policy

### **📦 Storage API**
- `localStorage`
- `sessionStorage`
- `IndexedDB`

### **📍 Geolocation API**
- `navigator.geolocation.getCurrentPosition()`

### **⏳ Timing API**
- `setTimeout()`, `setInterval()`, `requestAnimationFrame()`

### **⚙️ Other APIs**
- Clipboard API
- Notification API
- Fullscreen API
- Drag & Drop API
- Web Workers

---

## **🚀 Panduan Penggunaan Modul**

### **📁 Struktur Direktori**