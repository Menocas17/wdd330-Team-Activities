import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item, itemQuant) {

  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${itemQuant}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    const itemQuant = cartItems.reduce(
      (quantity, item) => {
          quantity[item.Id] = (quantity[item.Id] || 0) + 1;
          return quantity
      }, {}
    );
    console.log (itemQuant)
    const nonDuplicatesCart = cartItems.filter ((item, index, cart) => cart.findIndex(i => i.Id === item.Id) === index);
    // console.log(nonDuplicatesCart);
    const htmlItems = nonDuplicatesCart.map((item) => cartItemTemplate(item, itemQuant[item.Id]));
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
  }
}

export function CalculateSubTotal () {
const cartItems = getLocalStorage('so-cart')

if (cartItems.length !== 0) {
    
    let amount = 0;

    for (const item of cartItems){
        amount += Number(item.FinalPrice)
    }
    
    return amount;
} 
} 