import { CalculateSubTotal } from "./ShoppingCart.mjs";
import { getLocalStorage, qs, FomartToDolars } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./checkoutprocess.mjs";

loadHeaderFooter();

const subTotalNum = CalculateSubTotal();
const subTotal = qs('#sub-total');
const taxes = qs('#taxes');
const shipping = qs('#shipping');
const total = qs('#totalCost');
const cartItems = getLocalStorage('so-cart');
const chekcoutProcess = new CheckoutProcess(subTotalNum, taxes, shipping, total, cartItems);

subTotal.textContent = FomartToDolars(subTotalNum);

chekcoutProcess.OrderSummary();

document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
    e.preventDefault();
  
    const myForm = document.forms["payment-form"];
    const chk_status = myForm.checkValidity();
    myForm.reportValidity();
    if(chk_status){
        chekcoutProcess.checkout();
    }
    
  });



