import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
  }

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init () {
        const list = await this.dataSource.getData();
        const filteredList = this.filterTents(list, 179.99)
        this.renderList(filteredList);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }

    // method to filter the tents in order to only show the 4 needed
    filterTents(list, price) {
        const tents =list.filter (product => product.FinalPrice != price)

        return tents
    }
    
}