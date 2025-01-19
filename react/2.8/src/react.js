export class Component {
  constructor(props) {
    this.props = props;
  }
}

export const createDOM = (node) => {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  node.props &&
    Object.entries(node.props).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });

  node.children &&
    node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
};

const makeProps = (props, children) => {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
};

export const createElement = (tag, props, ...children) => {
  if (typeof tag === "function") {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    } else {
      if (children.length > 0) {
        return tag(makeProps(props, children));
      } else {
        return tag(props);
      }
    }
  } else {
    return { tag, props, children };
  }
};

export const render = (function () {
  let prevDom = null;

  return function (vdom, container) {
    if (prevDom === null) {
      prevDom = vdom;
    }

    // diff
    container.appendChild(createDOM(vdom));
  };
})();
