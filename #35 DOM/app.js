/* DOM = DOCUMENT OBJECT MODEL
          Object{} that represents the page you see in the web browser and provides you with an API to interact with it..
          Web Browser constructs the DDOM when it loads an HTML document,and structure all the element in a tree-like representation.
          Javascript can access the DOM to dynamically change the content,structure and style of  web page.
*/

const username = ""
const welcomemsg = document.getElementById("welcome-msg");

welcomemsg.textContent += username === "" ? `Guest`: username;