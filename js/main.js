import "../scss/app.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Swal from "sweetalert2";
import {productsRender} from './productCardRender';
import { placeOrderFunction } from "./placeOrder";
import { categoriesRender } from "./categoriesRender";
import { products } from "./data";
// import { categories } from "./categoriesRender";
import { searchProduct } from "./serachRender";



export const productIdInCart = [];


(()=>{

    // categoriesRender(categories);
    // productsRender(products);
})()


  



// scroll to top btn

// window.addEventListener("scroll", (event) => {
    
//     const jumpTopBtnEle = document.querySelector('[scrollToTop]');
//     console.log(event.scrollY);
//     let scroll = event.scrollY;
//     if(scroll < 300){
//         jumpTopBtnEle.style.display = 'none';
//     }else {
        
//         jumpTopBtnEle.style.display = 'flex';
//     }
// });


