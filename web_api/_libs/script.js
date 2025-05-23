const body = document.body;
function print(tag, txt) {
        // If tag == falsy
        if(!tag) {
            body.append(txt);
            return body;
        }
        const element = document.createElement(tag);
        const text = document.createTextNode(txt);
        element.append(text);
        // body.append(element.append(text));
        // body.append(undefined)
        body.append(element);
        return body;
    }
  
function br(times = 1) {
        const frag = document.createDocumentFragment();
        for (let i = 0; i < times; i++) {
            frag.appendChild(document.createElement("br"));
        }
        body.append(frag);
        return body;
    }

function hr() {
    body.append(document.createElement("hr"));
    return body;
}