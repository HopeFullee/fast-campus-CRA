export const createDOM = (node) => {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
};

export const render = (vdom, container) => {
  container.appendChild(createDOM(vdom));
};

export const createElement = (tag, props, ...children) => {
  props = props ?? {};

  if (typeof tag === "function") {
    if (children.length > 0) {
      return tag({
        ...props,
        children: children.length === 1 ? children[0] : children,
      });
    }
    return tag();
  } else {
    return { tag, props, children };
  }
};
