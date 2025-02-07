import { CalculateSubTotal } from "./ShoppingCart.mjs";
import { getLocalStorage, qs, FomartToDolars } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const subTotalNum = CalculateSubTotal();
const cartItems = getLocalStorage('so-cart');

const subTotal = qs('#sub-total');
const taxes = qs('#taxes');
const shipping = qs('#shipping');
const total = qs('#totalCost')

subTotal.textContent = FomartToDolars(subTotalNum);



const OrderSummary = (subTotalNum, tax=6) => {

    const taxesCal = (tax / 100) * subTotalNum;
   
    let shippingCostCal = 10;

    for (let i = 0 ; i < cartItems.length - 1; i++) {
        shippingCostCal += 2;
    }

    const totalCostCal = taxesCal + shippingCostCal + subTotalNum;

    taxes.textContent = FomartToDolars(taxesCal);
    shipping.textContent = FomartToDolars(shippingCostCal);
    total.textContent = FomartToDolars(totalCostCal);

};

OrderSummary(subTotalNum);



