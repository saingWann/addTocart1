
import { products } from "./data";
import { generateProductCard } from "./renderProducts";

export const productCardContainer = document.querySelector('.productCardContainer');

export const productsRender = (productsToRender) => {
    productCardContainer.innerHTML = null;
    productsToRender.forEach(product => {  
       productCardContainer.append(generateProductCard(product))
    });
   
}
productsRender(products);