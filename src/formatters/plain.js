import _ from "lodash";

const checkValueForCompexity = (value) => {
  if (_.isObject(value)) {
    return "[complex value]";
  }
  if (typeof value === "string") {
    return `'${value}'`;
  }

  return String(value);
};

const plainDiffTree = (diffTree) => {
  const iter = (data, path = []) => {
    const lines = data.flatMap((node) => {
      const { key, type } = node;
      const newPath = [...path, key];
      const complexPath = node.children ? newPath : newPath.join(".");

      switch (type) {
        case "nested":
          return iter(node.children, complexPath);
        case "added":
          return `Property '${complexPath}' was added with value: ${checkValueForCompexity(node.value)}`;
        case "deleted":
          return `Property '${complexPath}' was removed`;
        case "changed":
          return `Property '${complexPath}' was updated. From ${checkValueForCompexity(node.value1)} to ${checkValueForCompexity(node.value2)}`;
        case "unchanged":
          return [];
        default:
          throw new Error(`Unknown node type: '${type}'`);
      }
    });

    return lines.join("\n");
  };

  return iter(diffTree);
};

export default plainDiffTree;
