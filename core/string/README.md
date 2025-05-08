# String Types

First, you can declare a string using the primitive type, and second, you can declare a string by creating an object (reference type).

# Static Methods
## 1. String.raw()

- **Parameters:** Strings, Sub N
- **Return Value:** String


# Instance Properties
## 1. constructor

- **Prototype Object:** String.prototype.constructor
- **Status:** Writable
- **Value:** Object


# Instance Methods
## 1. charAt()

- **Prototype Object:** String.prototype.charAt()
- **Parameters:** Index
- **Return Type:** String


## 2. concat()

- **Prototype Object:**  String.prototype.concat()
- **Parameters:** Object, String, Number
- **Return Type:** String


## 3. endsWith()

- **Prototype Object:** String.prototype.endsWith
- **Parameters:** String
- **Return Type:** Boolean 


## 4. String.prototype.includes()

- **Parameters:** String
- **Return Type:** Boolean


## 5. String.prototype.indexOf()

- **Parameters:** String
- **Return Type:** Number


## 6. String.prototype.lastIndexOf()

- **Parameters:** String
- **Return Type:** Number


## 7. String.prototype.repeat()

- **Parameters:** Numbers
- **Return Type:** String


## 8. String.prototype.replace()

- **Parameters:** Old String/RegEx, New String
- **Return Type:** String

> ## Example:
> ### `string.replace("Some", "Replaced");`
> - To avoid case sensitive of replace() method use the RegEx flag.
> ### `string.replace(/SOME/i, "Replaced");`
> - Using the insensitve flag
> ### `string.replace(/some/g, "Replaced");`
> - Using the global match flag

## 9. String.prototype.search()

- **Parameters:** Regex
- **Return Type:** Numbers

## 10. String.prototype.slice()

- **Parameters:** Start, End
- **Return Type:** String

## 11. String.prototype.split()

- **Parameters:** Separator/Whitespace, Limit
- **Return Type:** Array of Strings

## 12. String.prototype.startsWith()

- **Parameters:** String
- **Return Type:** Boolean 

## 13. String.prototype.substring()

- **Parameters:** Start, End
- **Return Type:** String

> ## Example:
> ### `string.substring(-5, 3);`
> - The return is \"Java\"
> - If the one of index is negative, the index becomes zero (0)
> - If the end index is negative, it swapped to start index

> ### `string.substring(3, -5);`
> - The return is "Jav"
> - If the start index > end index, the stringg is reversed
> - (3, -5) equivalent to (0, 3)

## 14. String.prototype.toLowerCase()	

- **Parameters:** None
- **Return Type:** String

## 15. String.prototype.toString()

- **Parameters:** None
- **Return Type:** String

## 16. String.prototype.toUpperCase()

- **Parameters:** None
- **Return Type:** String

## 17. String.prototype.trim()
- **Parameters:** None
- **Return Type:** String