// Find all HTML elements with the class name "block-ref"
const elements = document.querySelectorAll('.block-ref');

// Iterate over each matched element
elements.forEach(element => {
  // Create the "[[" text node
  const openingTextNode = document.createTextNode('[[');

  // Create the "]]" text node
  const closingTextNode = document.createTextNode(']]');

  // Add the opening and closing text nodes as the first and last child of the element
  element.insertBefore(openingTextNode, element.firstChild);
  element.appendChild(closingTextNode);
});
