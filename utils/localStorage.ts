export function getDataFromLocalStorage<TType>(storedKey: string) {
  try {
    const jsonData = localStorage.getItem(storedKey);
    if (jsonData === null) return undefined;
    const data = JSON.parse(jsonData);
    return data as TType;
  } catch (e) {
    return undefined;
  }
}

export function saveDataInLocalStorage(key: string, data: unknown) {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (e) {}
}
