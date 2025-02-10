import {loadHeaderFooter, getLocalStorage, FomartToDolars } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import { CalculateSubTotal } from "./ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();

const cartItems = getLocalStorage('so-cart');




if (cartItems.length !== 0) {
    const totalPrice = document.querySelector('#total-cost');
    const totalText = document.querySelector('.total-text');
    const checkoutButton = document.querySelector('.check-out');
    const subTotal = CalculateSubTotal();
    
    totalText.classList.remove('hide');
    checkoutButton.classList.remove('hide');
    totalPrice.textContent = FomartToDolars(subTotal);
}




