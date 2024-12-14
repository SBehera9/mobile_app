import { useState, useCallback } from 'react';

type StorageListName = 'dreamList' | 'cart';

const useLocalStorageList = (name: StorageListName) => {
  // Fetch the list directly from localStorage
  const getList = useCallback(() => {
    return JSON.parse(localStorage.getItem(name) || '[]') as string[];
  }, [name]);

  // Initialize state with the current list
  const [list, setList] = useState<string[]>(getList);

  // Add a product to the list and update localStorage
  const addProduct = (productId: string) => {
    const updatedList = [...getList(), productId];
    localStorage.setItem(name, JSON.stringify(updatedList));
    setList(updatedList);
  };

  // Remove a product from the list and update localStorage
  const removeProduct = (productId: string) => {
    const updatedList = getList().filter((id) => id !== productId);
    localStorage.setItem(name, JSON.stringify(updatedList));
    setList(updatedList);
  };

  return { list, addProduct, removeProduct };
};

export default useLocalStorageList;
