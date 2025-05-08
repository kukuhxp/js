DOCUMENT INTERFACE		
Constructor	new Document()	
Instance Object	document	
Instance Properties	Status	Value
Socument.all	Writable	HTML Collection
Document.body	Writable 	Element
Document.cookie	Writable 	String
Document.domain	Writable	String 
Document.forms	Read-only	HTML Collection
Document.images	Read-only	HTML Collection
Document.title	Writable 	Element
Document.URL	Read-only	String 
Instance Methods	Parameters	Return Value
Document.createAttribute()	Attribute Name	Attr Node
Document.createElement()	Tag Name	Element 
Document.createTextNode()	Data	Text Node
Document.getElementById()	ID Value	Element 
Document.getElementsByClassName() [index]	Class Value	HTML Collection
Document.getElementsByTagName() [index]	Tag Name	HTML Collection
Document.querySelector() [index]	CSS Selectors	Element
Document.querySelectorAll() [index]	CSS Selectors	Node List (Static)
Document.write()	Markup	Undefined
Document.writln()	Markup	Undefined
ELEMENT INTERFACE		
Instance Properties	Status	Return Value
Element.attributes	Read-only	Name Node Map
Element.children	Read-only	HTML Collection
Element.classList	Read-only	DOM TOKEN LIST
Element.firstElementChild	Read-only	HTML Collection
Element.firstElementChild	Read-only	HTML Collection
Element.className	Writable	String
Element.tagName	Read-only	String
Element.clientHeight	Read-only	Number
Element.clientWidth	Read-only	Number
Element.id	Writable 	String
Element.innerHTML	Writable	String
Element.innerText	Writable	String
Element.nextElementSibling	Read-only	Element/Null
Element.outerHTML	Writable	String
Element.scrollHeight	Read-only	Number
Element.scrollWidth	Read-only	Number
Element.textContent	Writable	String
Instance Methods	Parameters	Return Value
Element.append()	Node, Node N	Undefined
Element.getAttribute()	Attribute Name	String/Null
Element.insertAdjacentElement()	Position, Element	Element/Null
Element.insertAdjacentHTML()	Position, Text	Undefined
Element.insertAdjacentTezt()	Where, Data	Undefined
Element.remove()	None	Undefined
Element.removeAttribute()	Attribute Name	Undefined
Element.replaceWith()	Node, Node N	Undefined
Element.setAttribute()	Attribute Name	String/Null
NODE INTERFACE		
Instance Properties	Status	Return Value
Element.childNodes	Read-only	Node List (Live)
Element.firstChild	Read-only	Node
Element.lastChild	Read-only	Node
Element.nodeName	Read-only	String
Element.nodeType	Read-only	String
Element.textContent	Writable	String
Instance Methods	Parameters	Return Value
Element.appendChild()	Node	Node
Element.replaceChld()	New Child, Old Child	Node
Element.removeChild()	Child	DOMException/TypeError
NODE LIST INTERFACE		
Instance Methods	Parameters	Return Value
NodeList.forEach()	Callback, Args	Undefined
DOM TOKEN LIST INTERFACE		
Instance Methods	Parameters	Return Value
"DOMTokenList.contains() "	Callback, Args	Undefined
INPUT ELEMENT INTERFACE		
Instance Properties	Status	Return Value
InputElement.value	Writable	String
InputElement.type	Writable	String
ANCHOR ELEMENT INTERFACE		
Instance Properties	Status	Return Value
AnchorElement.href	Writable	String
IMAGE ELEMENT INTERFACE		
Instance Properties	Status	Return Value
ImgElement.src	Writable	String
