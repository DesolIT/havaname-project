export const checkKeyForVar = ({ keyObject, vars }) => {
  if (typeof keyObject === 'object' && !Array.isArray(keyObject)) {
    let newTheme = {};
    Object.keys(keyObject).forEach((key) => {
      if (key !== 'var') {
        const keyChecked = checkKeyForVar({ keyObject: keyObject[key], vars });
        newTheme = { ...newTheme, [key]: keyChecked };
      }
    });
    return newTheme;
  }
  if (typeof keyObject === 'string' && !Array.isArray(keyObject) && vars) {
    let newValue = keyObject;
    Object.keys(vars).forEach((v) => {
      if (newValue.includes(v)) {
        newValue = newValue.replace(v, vars[v]);
      }
    });

    return newValue;
  }
  return keyObject;
};

export const checkTheme = ({ theme }) => {
  let newTheme = {};
  Object.keys(theme).forEach((key) => {
    if (key !== 'var') {
      const keyChecked = checkKeyForVar({ keyObject: theme[key], vars: theme.vars });
      newTheme = { ...newTheme, [key]: keyChecked };
    }
  });
  return newTheme;
};
