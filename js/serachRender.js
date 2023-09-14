 import { productsRender } from "./productCardRender"
 import { products } from "./data"
 import Swal from "sweetalert2"
 
 export const searchErrorHandler = () => {
    if(document.querySelector('.productCardContainer').children.length === 0 ){

        Swal.fire({
            title: 'No such item found?',
            text: "Sorry we can't find the item that match the search word",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#212529',
            cancelButtonColor: '#dee2e6',
            confirmButtonText: 'Okay'
            })
          
        document.querySelector('.productCardContainer').innerHTML = `
            <h1 class = "display-5 text-center fw-bold">No Search Result Found!</h1>
        `
    }
}

export const searchProduct = (keyWord) => {

    // case sensitive solution from chat gpt :D
    const regexPattern = new RegExp(keyWord, 'i');
    productsRender(products.filter(product =>{

        return regexPattern.test(product.title) || regexPattern.test(product.description); 
    }
    ))
}

const searchBtnEle = document.querySelector('#search-btn');
const searchContainerParent = document.querySelector('.search-container');

searchBtnEle.onclick = () =>{

const searchContainer = document.createElement('div');
searchContainer.className = "search-bar-wrapper animate__animated ms-auto";
searchContainer.innerHTML = `
<div  class=" p-2 d-flex justify-content-between align-items-center bg-dark" >
    <span class="d-flex justify-content-between align-items-center" style="width: 10rem;">
        <input search-input type="text" class = 'w-sm-25'>
        <button cancel-search class=" ms-2 btn bg-dark text-white">
            <i class="bi bi-x-lg fw-bold text-white"></i>
        </button>
    </span>
    <button search-btn class="btn bg-dark-subtle fw-bold">Search</button>
</div>
`

// prevent from rendering multiple search box
// if the parent got no children then the search box will be generated
if(searchContainerParent.children.length === 0){

    document.querySelector('.search-container').append(searchContainer);
    searchContainer.classList.add('animate__fadeInDown')
    searchContainer.querySelector('[search-input]').focus();
    searchBtnEle.style.pointerEvent = 'none';
}else{
    // else we will just ignore
    console.log(`searchContainerParent.children.length:`,(searchContainerParent.children.length));
    return
}


const searchInputEle = document.querySelector('[search-input]');
const searchBtn = document.querySelector('[search-btn]');
searchBtn.onclick = () =>{
    
    searchProduct(searchInputEle.value);
    searchContainer.remove();
    searchErrorHandler()
}

const cancelSearch = document.querySelector('[cancel-search]');
cancelSearch.onclick = () => {
    

    searchContainer.classList.remove('animate__fadeInDown')
    searchContainer.classList.add('animate__fadeOutUp')
    searchContainer.addEventListener('animationend',() => {

        searchContainer.remove();
    })
    
    // searchProduct(searchInputEle.value);

}
}
