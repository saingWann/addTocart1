import { btnWrapper } from "./categoriesRender";
import { productsRender } from "./productCardRender";
import { products } from "./data";
// creating button coponent



export const renderByCategory = (categoryName,button) => {

    // the question mark here is to check if "btnWrapper has the children with class active"
    btnWrapper.querySelector('.active')?.classList.remove("active");
    button.classList.add('active')
    const productCardContainer = document.querySelector('.productCardContainer')

    productCardContainer.innerHTML = null;

    productsRender(products.filter(product =>
    
        product.category === categoryName || categoryName === 'all'
    ))

}