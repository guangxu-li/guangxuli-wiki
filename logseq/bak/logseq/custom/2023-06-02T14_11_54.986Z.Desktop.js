
// Get all elements with the class name "inline"
const inlineElements = document.querySelectorAll(".inline");

// Filter elements that have empty content (ignoring whitespace)
const emptyInlineElements = Array.from(inlineElements).filter(element => {
  return element.textContent.trim() === "";
});

// Change the style of each empty inline element's great-great-great-great-great-great-great-grandparent if it has the attribute "haschild=false"
emptyInlineElements.forEach(element => {
  let ancestor = element;
  
  // Traverse up the DOM tree 8 times (8 parent levels)
  for (let i = 0; i < 8; i++) {
    if (ancestor.parentNode) {
      ancestor = ancestor.parentNode;
    } else {
      // If we've reached the top of the DOM tree, stop the loop
      break;
    }
  }

  // Get the value of the "haschild" attribute
  const hasChildValue = ancestor.getAttribute("haschild");

  // Check if the ancestor has the "haschild" attribute set to "false"
  if (hasChildValue === "false") {
    // Change the ancestor's style to "display: none !important"
    ancestor.style.setProperty("display", "none", "important");
  }
});
