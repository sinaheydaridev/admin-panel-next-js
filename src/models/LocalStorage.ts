class LocalStorage {
  static set(key: string, value: string) {
    return localStorage.setItem(key, value);
  }
  static get(key: string) {
    return localStorage.getItem(key);
  }
  static remove(key:string) {
    return localStorage.removeItem(key);
  }
}

export default LocalStorage;
