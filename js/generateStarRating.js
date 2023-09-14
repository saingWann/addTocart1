// generating star rating base on the api value
export const generateStars = (rate) =>{
    let starHtml = ``;

    for(let i = 1 ; i <=5 ; i++){

        starHtml += rate >= i 
        ? `<i class = "bi bi-star-fill me-2"></i>` 
        : `<i class = "bi bi-star me-2"></i>`

    }
    return starHtml;
}
