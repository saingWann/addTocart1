import { productIdInCart } from "./main";
import { renderItemToCart } from "./renderItemToCart";
import { getTotalCost } from "./getTotalCost";
import { calculateBadgeCount } from "./cartCount";
import { Toast } from "./deleteFromCart";
// add to cart fucntion
export const itemCartsContainer = document.querySelector('[item-container]');


export const addToCart = (productId) => {

    const cartBtnEle = document.querySelector('#cart-btn');
    // current product card
    const currentProductCard = document.querySelector(`[product-id = '${productId}']`);
    const currentProductImgCard = currentProductCard.querySelector('[product-img]');
    // creat new img with Imgae constructor
    const tempImg = new Image();
    tempImg.src = currentProductImgCard.src; //the same src with the img we want to clone
    tempImg.style.transition = '500ms ease-in-out'
    // using objext assign to add bunch of css line to an element
    Object.assign(tempImg.style, {
        position: 'fixed',
        top: `${currentProductImgCard.getBoundingClientRect().top +'px'}`,
        left : `${currentProductImgCard.getBoundingClientRect().left +'px'}`,
        height : `${currentProductImgCard.getBoundingClientRect().height + 'px'}`,
        scale: '0.6',
        zIndex : '2',
    });

    // add the temp-img to the dom
    currentProductCard.querySelector('.productImgaeContainer').prepend(tempImg);
    const cartIcon = document.querySelector('#cart-icon');

    setTimeout(() => {
        
        Object.assign(tempImg.style, {
            position: 'fixed',
            left: `${cartIcon.getBoundingClientRect().left + 'px'}`,
            top : `${cartIcon.getBoundingClientRect().top + 'px'}`,
            height : `${cartIcon.getBoundingClientRect().height + 'px'}`,
            zIndex : '1',
            rotate : '720deg',
        });
     
    }, 100);

    tempImg.addEventListener('transitionend',()=>{
        cartBtnEle.classList.add('animate__tada');
        tempImg.remove();
    })
    cartBtnEle.addEventListener('animationend',()=>{
        cartBtnEle.classList.remove('animate__tada');

    })

    const currentAddToCartBtn = document.querySelector(`[add-to-cart-btn-id = '${productId}']`);
    currentAddToCartBtn.classList.add('active')
    currentAddToCartBtn.innerText = 'Added'
    // addToCardBtnEle.style.pointerEvents = "none"

    productIdInCart.push(productId);
    itemCartsContainer.append(renderItemToCart(productId));
    console.log('gettotalcost not wrokdign');
    getTotalCost();
    calculateBadgeCount();

    Toast.fire({
        icon: 'success',
        title: 'Add to cart successfully'
      })
};