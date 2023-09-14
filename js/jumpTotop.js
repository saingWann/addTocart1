// scroll to top btn
const jumpTopBtnEle = document.querySelector('[scrollToTop]');

window.addEventListener("scroll", (event) => {

    let scroll = this.scrollY;
    if(scroll < 300){
        jumpTopBtnEle.style.display = 'none';
    }else {
        
        jumpTopBtnEle.style.display = 'flex';
    }
});
