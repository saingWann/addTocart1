import { renderByCategory } from "./rednderByCategory";

 export const btnWrapper = document.querySelector('[btnWrapper]');

export const categories = [
    `all`,`women's clothing` , 'jewelry' , `men's clothing` , 'electronics'
]

 const creatCategoriesBtn = (categoryName) => {

    const btnEle = document.createElement('button');
    btnEle.className = 'categoryBtn border border-dark mt-3 mt-lg-0 px-2 py-1 rounded-1 fw-normal me-2';
    btnEle.innerText = categoryName;

    btnEle.onclick = () =>{
        
        renderByCategory(categoryName,btnEle)
    
    }
    return btnEle;
}

// generating category buttons
export const categoriesRender = (categories) =>{
    categories.forEach(category => {

        btnWrapper.append(creatCategoriesBtn(category));
        
    })
    btnWrapper.children[0].classList.add('active');
}

categoriesRender(categories)
