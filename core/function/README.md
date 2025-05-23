# FUNCTION

## Function Declaration

Function adalah sebuah object yang dapat menjalankan beberapa baris perintah. Function terdiri dari name, parameter dan body.

**Syntax:**

```
function functionName(parameter, parameter n) {
  functionBody
}
```

## Function Expression

Function yang dideklarasikan di dalam sebuah variabel.

**Syntax:**

```
variable = function (parameter, parameter n) {
 statements;
}
```

## Named Function Expression (NFE)

Sebuah function expression yang memiliki nama.

**Syntax:**

```
variable = function functionName (parameter, parameter n) {
    statements;
}
```

## Arrow Function

Deklarasi function terbaru dari ES6.

**Syntax:**

```
variable = (parameter, parameter n) => {
 statements;
}
```

**Syntax:**

`variable = parameter => statement:`

## Function Constructor

Deklarasi sebuah function melalui constructor.

`variable = new Function(args, return);`

## Generator Function

**Syntax:**

```
function* nameFunction(parameter, parameter n) {
  yield value;
}

// Generator object
variable = nameFunction();

// next() is instance method
object.next();
```

## Immediately Invoked Function Expression (IIFE)

**Syntax:**

```
(function(parameter, parameter n) {
  statements;
})();
```
**Syntax:**

```
((parameter, parameter n) => {
  statements;
})()
```

## Callback

Callback adalah sebuah function yang dikirim melalui argumen function atau method.

**Named Callback Syntax:**

 ```
// Function declaration 1
function functionName (parameter, callbackName) {
 callbackName();
}

// Function declaration 2 (Callback)
function functionName (parameter) {
 statements;
}

// Invocation
functionName(args, callbackName);

```

**Anonymous Callback Syntax**:

```
// Function declaration
function functionName (parameter, callbackName) {
 callbackName();
}

// Invocation
functionName(args, function (e) {
 statements;
});
```

## Closure

Closure adalah

## Anonymous

Anonymous adalah istilah yang merujuk kepada function yang tidak memiliki nama.

## Asynchronous

Asynchronous adalah

# PARAMETERS

## General Parameter

## Optional Parameter

## Default Parameter

## Rest Parameter

## Object Parameter

## Array Parameter

## Callback Function