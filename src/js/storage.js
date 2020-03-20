const getFromStorage = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : false;
};

const removeFromStorage = (key) => {
  localStorage.getItem(key) ? localStorage.removeItem(key) : false;
};

const saveToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const groupData = (arr, field = 'Household') => {
  const result = arr.reduce((acc, item) => {
    let key = item[field]
    !acc[key] ? acc[key] = [] : acc[key].push(item);
    return acc;
  }, {});
  return Object.entries(result).map((x, i) => ({ id: i, name: x[0], accounts: x[1] }))
}

export {
  getFromStorage,
  saveToStorage,
  groupData,
  removeFromStorage,
};
