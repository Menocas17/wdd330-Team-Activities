
import { loadHeaderFooter, getParams } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();
const category = getParams("category");
const categoryName = document.querySelector('#category-name');
categoryName.textContent = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
console.log(category)
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();
