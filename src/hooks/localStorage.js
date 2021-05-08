const { useState } = require("react")

export const useLocalStorage = (key, value) => {

  const [storedValue, setStoredValue] = useState('');

  if (value === '') {
    try {
      const savedValue = window.localStorage.getItem(key);
      setStoredValue(JSON.parse(savedValue));
        } catch (error) {
          console.log(error);
        }
  } else {
    try {
      const valueToSave = JSON.stringify(value);
      setStoredValue(valueToSave);
      window.localStorage.setItem(key, storedValue);
    } catch (error) {
      console.log(error);
    }
  }
  return storedValue;
}