
import { loadHeaderFooter, getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();
const category = getParams("category");
const categoryName = document.querySelector('#category-name');
categoryName.textContent = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
console.log(category)
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();
