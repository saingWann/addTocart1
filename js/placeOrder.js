import { getTotalCost } from "./getTotalCost";
import Swal from "sweetalert2";
import { productIdInCart } from "./main";
import { calculateBadgeCount } from "./cartCount";

// place order btn related stuffs

const placeOrderBtnEle = document.querySelector('[place-order]');

const bsOffcanvas = new bootstrap.Offcanvas('#myCart');

export const placeOrderFunction = () => {

    const checkOut = [];
    const allItemIncart = document.querySelectorAll('.item-in-cart');
    const myOrder = {};
    const itemContainerInCart = document.querySelector('[item-container]');

    Swal.fire({
        title: 'Are you sure you want to check out?',
        text: "Please confrim to place order",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#212529',
        cancelButtonColor: '#dee2e6',
        confirmButtonText: 'Yes, place order now'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Successful',
            'Your order has been placed.',
            'success'
          )
          
          allItemIncart.forEach(container => {

            const item = {};
            item.productId = container.getAttribute('item-in-cart-id');
            item.quantity = container.querySelector('[quantity]').value;
            checkOut.push(item);
            return checkOut
    
        })

            myOrder.item = checkOut;
            myOrder.total = document.querySelector('[total-balance]').innerText;
            myOrder.user_id = 5;
            myOrder.order_id = "GSX2034AS"
            myOrder.user_name = "saing wann";
            console.log(myOrder);

            // to remove active state of  add to cart btn 
            myOrder.item.forEach(item => {
                // console.log(item.productId);
                const index = productIdInCart.indexOf(Number(item.productId));
                    
                if (index > -1) { // only splice array when item is found
                    productIdInCart.splice(index, 1); // 2nd parameter means remove one item only
                }
                
            })
        }


        const allAddToCartBtn = document.querySelectorAll(`[addToCartBtn]`);
        allAddToCartBtn.forEach(seenAddToCartBtn => {
            
            seenAddToCartBtn.classList.remove('active');
            seenAddToCartBtn.innerText = 'Add to Cart';

        })
     
          
        itemContainerInCart.innerHTML =null;
        getTotalCost();
        calculateBadgeCount(); 
        bsOffcanvas.hide();

    })    
}

placeOrderBtnEle.onclick = () => {
    console.log('clicked')
    const itemContainerInCart = document.querySelector('[item-container]');
    if(itemContainerInCart.querySelector('.item-in-cart')){
        placeOrderFunction()
        // remove the current item from cart
       
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please add item to place order',
            footer: '<a class = "text-dark" href="#footer">Why do I have this issue?</a>'
          })

          bsOffcanvas.hide();
    }
}