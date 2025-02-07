import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();


const totalPrice = document.querySelector('#total-cost');

const cartItems = getLocalStorage('so-cart')

if (cartItems.lenght !== 0) {
    const totalText = document.querySelector('.total-text');
    totalText.classList.remove('hide');

    let amount = 0;

    for (const item of cartItems){
        amount += Number(item.FinalPrice)
    }

    const formatedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    })

    totalPrice.textContent = formatedAmount.format(amount)
}

