import { getLocalStorage, FomartToDolars } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

const services = new ExternalServices();

function packageItems(items) {
    const simplifiedItems = items.map((item) => {
      return {
        id: item.Id,
        price: item.FinalPrice,
        name: item.Name,
        quantity: 1,
      };
    });
    return simplifiedItems;
  }
  
  function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};
  
    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
  
    return convertedJSON;
  }
export default class CheckoutProcess {
    constructor(subTotalNum, taxes, shipping, total, list) {
        this.subTotalNum = subTotalNum;
        this.taxes = taxes;
        this.shipping = shipping;
        this.total = total;
        this.tax = 6;
        this.list = list;
    }

    OrderSummary () {
        
        const taxesCal = (this.tax / 100) * this.subTotalNum;
       
        let shippingCostCal = 10;
    
        for (let i = 0 ; i < this.list.length - 1; i++) {
            shippingCostCal += 2;
        }
    
        const totalCostCal = taxesCal + shippingCostCal + this.subTotalNum;
    
        this.taxes.textContent = FomartToDolars(taxesCal);
        this.shipping.textContent = FomartToDolars(shippingCostCal);
        this.total.textContent = FomartToDolars(totalCostCal);
    
    };


    async checkout() {
        const formElement = document.forms["payment-form"];
    
        const json = formDataToJSON(formElement);
        // add totals, and item details
        json.orderDate = new Date();
        json.orderTotal = this.total.textContent;
        json.tax = this.taxes.textContent;
        json.shipping = this.shipping.textContent;
        json.items = packageItems(this.list);
        console.log(json);
        try {
          const res = await services.checkout(json);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
}
