function walkDOM(node) {
  console.log(node.tagName);
  const children = node.childNodes;
  if (children != null || children.length > 0) {
    children.forEach(element => walkDOM(element));
  }
}
