const DOMNodeCollection = require('./dom_node_collection');

window.$l = function (el) {
  // console.log(el);

  // wrapper
  if (el instanceof HTMLElement) {
    // console.log('cheese');
    return new DOMNodeCollection([el]);
  }
  // else {

  //   // selector
  //   let nodeList = document.querySelectorAll(el)
  //   console.log(nodeList);
  // }

}

// window.$l = $l
window.DOMNodeCollection = DOMNodeCollection;