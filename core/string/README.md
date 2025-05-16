# STRING TYPES

First, you can declare a string using the primitive type, and second, you can declare a string by creating an object (reference type).


# STATIC METHODS

## raw()

**Parameters:** Strings, Sub N

**Return Value:** String


# INSTANCE PROPERTIES

## constructor

**Prototype Object:** String.prototype.constructor

**Status:** Writable

**Value:** Object


# INSTANCE METHODS

## charAt()

**Prototype Object:** String.prototype.charAt()

**Parameters:** Index

**Return Type:** String


## concat()

**Prototype Object:**  String.prototype.concat()

**Parameters:** Object, String, Number

**Return Type:** String


## endsWith()

**Prototype Object:** String.prototype.endsWith()

**Parameters:** String

**Return Type:** Boolean 


## includes()

**Prototype Object:** String.prototype.includes

**Parameters:** String

**Return Type:** Boolean


## indexOf()

**Prototype Object:** String.prototype.indexOf

**Parameters:** String

**Return Type:** Number


## lastIndexOf()

**Prototype Object:** String.prototype.lastIndexOf

**Parameters:** String

**Return Type:** Number


## repeat()

**Prototype Object:** String.prototype.repeat

**Parameters:** Numbers

**Return Type:** String


## replace()

**Prototype Object:** String.prototype.replace

**Parameters:** Old String/RegEx, New String

**Return Type:** String

**Example:**

To avoid case sensitive of replace() method, use the RegExp flag.

`string.replace("Some", "Replaced");`

Using the insensitive flag of RegExp

`string.replace(/SOME/i, "Replaced");`

Using the global match flag of RegExp

`string.replace(/some/g, "Replaced");`

## search()

**Prototype Object:** String.prototype.search

**Parameters:** Regex

**Return Type:** Numbers

## slice()

**Prototype Object:** String.prototype.slice

**Parameters:** Start, End

**Return Type:** String

## split()

**Prototype Object:** String.prototype.split

**Parameters:** Separator/Whitespace, Limit

**Return Type:** Array of Strings

## startsWith()

**Prototype Object:** String.prototype.startsWith

**Parameters:** String

**Return Type:** Boolean 

## substring()

**Prototype Object:** String.prototype.substring

**Parameters:** Start, End

**Return Type:** String

**Example:**

If the one of index is negative, the index becomes zero (0). If the end index is negative, it swapped to start index

`string.substring(-5, 3);`

If the start index > end index, the string is reversed. (3, -5) equivalent to (0, 3)

`string.substring(3, -5);`

## toLowerCase()	

**Prototype Object:** String.prototype.toLowerCase

**Parameters:** None

**Return Type:** String

## toString()

**Prototype Object:** String.prototype.toString

**Parameters:** None

**Return Type:** String

## toUpperCase()

**Prototype Object:** String.prototype.toUpperCase

**Parameters:** None

**Return Type:** String

## trim()

**Prototype Object:** String.prototype.trim

**Parameters:** None

**Return Type:** String