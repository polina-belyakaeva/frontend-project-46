// import * as path from "path";
import yaml from "js-yaml";

// const parseFile = (filePath, data) => {
//   const extension = path.extname(filePath);

//   switch (extension) {
//     case ".json":
//       return JSON.parse(data);
//     case ".yaml":
//       return yaml.load(data);
//     case ".yml":
//       return yaml.load(data);
//     default:
//       throw new Error(`Unknown extension: ${extension}`);
//   }
// };

// export default parseFile;

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default (data, extension) => parsers[extension](data);
