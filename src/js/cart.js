import {loadHeaderFooter, getLocalStorage, FomartToDolars } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import { CalculateSubTotal } from "./ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();


const totalPrice = document.querySelector('#total-cost');
const totalText = document.querySelector('.total-text');
const cartItems = getLocalStorage('so-cart')


const subTotal = CalculateSubTotal();

if (cartItems.length !== 0) {
    totalText.classList.remove('hide');
    totalPrice.textContent = FomartToDolars(subTotal);
}




