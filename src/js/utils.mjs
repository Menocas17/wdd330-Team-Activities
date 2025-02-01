// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : []; 
}
// save data to local storage

export function setLocalStorage(key, data) {
  let cartItems = getLocalStorage(key);

  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }
  cartItems.push(data);
  localStorage.setItem(key, JSON.stringify(cartItems));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// retrieve the query data from the URL 

export function getParams (param) {
  const queryString = window.location.search;
  const UrlParams = new URLSearchParams(queryString);
  const product = UrlParams.get('product');

  return product;
}