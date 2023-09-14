import { products } from "./data";
import { getTotalCost } from "./getTotalCost";
import { deleteItemFromCart } from "./deleteFromCart";

export const renderItemToCart = (id) => {

    const currentProduct = products.find( product => product.id === id )
        const cartItemContainer = document.createElement('div');
        cartItemContainer.className = 'item-in-cart pb-2 mt-2 animate__animated ';
        cartItemContainer.setAttribute("item-in-cart-id",id)
        cartItemContainer.innerHTML = `
        <span class="px-2" >
            <img class="item-in-cart-img" src="${currentProduct.image}" alt="">
        </span>

        <div class="border py-3 px-2 bg-white">
            <span class="  d-flex justify-content-between align-items-center">

                <p class="fw-bold m-0 pt-3 text-truncate">${currentProduct.title}</p>
                <button deleteBtnEle class="btn text-danger">
                    <i class="bi bi-trash-fill"></i>
                </button>
                
            </span>

            <span class="pt-1 px-2 d-flex justify-content-between align-items-end">
                <span class= "fw-bold text-black-50"><span class="item-cost-in-cart">${currentProduct.price}
                </span>$</span>
                <span quantityControlBtnContainer class="w-50 d-flex justify-content-end align-items-center gap-2">
                    <button minusButton class="btn btn-dark text-white">
                        <i class="bi bi-dash"></i>
                    </button>
                    <input quantity type="number" min="1" value="1" class="form-control">
                    <button plusButton class="btn btn-dark text-white">
                        <i class="bi bi-plus"></i>
                    </button>
                </span>
            </span>
        </div>   
     `;

        const deleteBtnEle = cartItemContainer.querySelector('[deleteBtnEle]');

        deleteBtnEle.onclick = () => {
        deleteItemFromCart(id);
    }

    const decreaseQuantityBtnEle = cartItemContainer.querySelector('[minusButton]');
    const currentQuantity = cartItemContainer.querySelector('[quantity]')
    const itemCostInCart = cartItemContainer.querySelector('.item-cost-in-cart');

    // decrease quantity
    decreaseQuantityBtnEle.onclick = () => {

        // if user want to go lower than 1 that mean he might want to remove from cart
        if(parseFloat(currentQuantity.value) === 1){

            // sweet alert2
            deleteItemFromCart(id);
            return;
        }

        currentQuantity.value --;
        itemCostInCart.innerText = parseFloat(currentProduct.price) * Number(currentQuantity.value);
        getTotalCost();
        
    }

    // increase quantity
    const increaseQuantityBtnEle = cartItemContainer.querySelector('[plusButton]');
    increaseQuantityBtnEle.onclick = () => {
        currentQuantity.value ++;
        itemCostInCart.innerText = (parseFloat(currentProduct.price) * Number(currentQuantity.value)).toFixed();
        getTotalCost();
        
    }

    return cartItemContainer;

};
