import { camelCase } from "lodash"

export const toCamelCase = (str) => camelCase(str)

export const camelizeKeys = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(v => camelizeKeys(v));
    } else if (obj != null && obj.constructor === Object) {
      return Object.keys(obj).reduce(
        (result, key) => ({
          ...result,
          [camelCase(key)]: camelizeKeys(obj[key]),
        }),
        {},
      );
    }
    return obj;
  };