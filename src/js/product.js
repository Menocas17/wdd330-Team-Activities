import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { getParams } from "./utils.mjs";
import ProductDetails from './ProductDetails.mjs';
import { loadHeaderFooter } from "./utils.mjs";



const dataSource = new ProductData("tents");

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);


// creating the product object with all the detials within 
const productId = getParams ('product');

const product = new ProductDetails(productId, dataSource);
product.init();


loadHeaderFooter();



