export const isValidArray = (obj) => {
  return Array.isArray(obj) && obj.length > 0;
};

export const isValidObject = (obj) => {
  return obj !== null && obj !== undefined && typeof obj === "object";
};
