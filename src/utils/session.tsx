export const setLocalStorage = (key:string, value:string) => {
   window.localStorage.setItem(key, value);
}

export const removeLocaleStorage = (key:string) => {
   window.localStorage.removeItem(key);
};

export const getLocaleStorage = (key:string) => {
   const persistedData = localStorage.getItem(key);
   return persistedData ? persistedData : "";
};

export const setLogout = () => {
   removeLocaleStorage("enuna_user");
   removeLocaleStorage("enuna_user_key");
   removeLocaleStorage("enuna_token");
   removeLocaleStorage("enuna_user_credential");
}

export const setClearRegister = () => {
   removeLocaleStorage("enuna_commerce_data");
   removeLocaleStorage("enuna_shopping_cart");
   removeLocaleStorage("enuna_booking");
}
