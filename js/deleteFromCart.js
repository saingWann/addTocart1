import { productCardContainer } from "./productCardRender"
import Swal from "sweetalert2"
import { productIdInCart } from "./main"
import { getTotalCost } from "./getTotalCost"
import { calculateBadgeCount } from "./cartCount"



// add to cart toast
export const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  
// delete item from cart
export const deleteItemFromCart = (id) => {
    const currentProductInCartToDelete = document.querySelector(`[item-in-cart-id = '${id}']`)
    const currentAddToCartBtn = productCardContainer.querySelector(`[add-to-cart-btn-id = '${id}']`)
 
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this from cart?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#212529',
        cancelButtonColor: '#dee2e6',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
    
            Toast.fire({
                icon: 'success',
                title: 'Item remove has been remove from cart.'
              })
            // the add-to-cart will remain the same whenever re-render with category
            const index = productIdInCart.indexOf(id);
            if (index > -1) { // only splice array when item is found
                productIdInCart.splice(index, 1); // 2nd parameter means remove one item only
            }
            
            currentProductInCartToDelete.classList.add('animate__zoomOutRight')
            // currentProductInCartToDelete.classList.add('animate__hinge')
            currentProductInCartToDelete.addEventListener('animationend',()=>{
                currentProductInCartToDelete.remove();
                if(!currentAddToCartBtn){
                    
                    /*
                    this could happen when user is in the specific category
                    and trigger this function it will not able to find 
                    the button with the ID we gave above so we will just return
                    === we don't need to worry because when we generate the product
                    cards ,we have a fucntion to check whether the item is in the cart
                    if it is the btn will remain active
                    */

                    getTotalCost();
                    calculateBadgeCount();   
                    // console.log('not found in the container');
                    return;
                }else{

                    currentAddToCartBtn.classList.remove('active');
                    currentAddToCartBtn.innerText = 'Add to Cart';
                    getTotalCost();
                    calculateBadgeCount();     
                }
                
            })
            getTotalCost();
                     
        }
        })
    }


