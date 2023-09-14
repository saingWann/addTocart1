import {generateStars} from './generateStarRating';
import { productIdInCart } from './main';
import {addToCart} from './addToCardBtn'
import { getTotalCost } from './getTotalCost';

export const generateProductCard = (product) => {
    const newDiv = document.createElement('div');
    newDiv.className  = 'productsContainer col-12 col-md-6 col-lg-4';
    newDiv.setAttribute('product-id',`${product.id}`)
    const newCard = `
                <div  class="productImgaeContainer" >
                    <img src="${product.image}" alt="photo" product-img>
                </div>
                <div class="productInfo border">
                    <h3 class="product-name ">${product.title}</h3>
                    <p productDescription class="">${product.description}</p>
                    <div rating class="d-flex justify-content-between mb-2">
                    <div>
                    ${generateStars(product.rating.rate.toFixed())}
                    </div>
                    <p rating class="m-0">(${product.rating.rate}/5)</p>
                    </div>
                    <hr>
                    <spanclass="fw-bold"><span price>${product.price}</span>$</span>
                    <button addToCartBtn class="border-0 px-3 fw-bold w-100 py-1 rounded">Add to Cart</button>
                </div>
    `;
    newDiv.innerHTML = newCard;
    const addToCardBtnEle = newDiv.querySelector('[addToCartBtn]');
    addToCardBtnEle.setAttribute('add-to-cart-btn-id',product.id);
    // console.log(addToCardBtnEle);

    // check if the item already in the cart 
    if(productIdInCart.includes(product.id)){
        // if it is already in cart set the button to active state
        addToCardBtnEle.classList.add('active');
        addToCardBtnEle.innerText = 'Added';

    }

    addToCardBtnEle.onclick = () => {
        
        if(addToCardBtnEle.classList.contains("active")){
            // console.log("already added");
            deleteItemFromCart(product.id);
            getTotalCost();

        }else{
            //add to cart button state will change to 
            addToCart(product.id);
            getTotalCost();
        }
    
    }

    return newDiv;
}
