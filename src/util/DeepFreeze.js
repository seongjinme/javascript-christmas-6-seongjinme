function deepFreeze(object) {
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (value !== null && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  return Object.freeze(object);
}

export default deepFreeze;
