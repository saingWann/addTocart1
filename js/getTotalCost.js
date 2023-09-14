
// getting total cost in cart
export const getTotalCost = () =>{
    const totalCost = [...document.querySelectorAll('.item-cost-in-cart')];
    const allCost = totalCost.reduce((pv,cv) => pv + parseFloat(cv.innerHTML),0);
    const grandTotalCost = document.querySelector('[total-cost]');
    grandTotalCost.innerText = (allCost.toFixed());
    // console.log(allCost);
    const taxAmount = document.querySelector('[tax]');
    taxAmount.innerHTML = ((allCost / 100) * 5).toFixed();
    const totalBalance = document.querySelector('[total-balance]');
    totalBalance.innerText = (allCost + Number(taxAmount.innerHTML)).toFixed();

}
