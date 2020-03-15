const getFromStorage = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : false;
};

const removeFromStorage = (key) => {
  localStorage.getItem(key) ? localStorage.removeItem(key) : false;
};

const saveToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export {
  getFromStorage,
  saveToStorage,
  removeFromStorage,
};
