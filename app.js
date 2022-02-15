



function updatProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    
    else if(productInput.value > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // caseInput.value = caseInput.value;
    const caseTotal = document.getElementById(product +'-total');
    caseTotal.innerText = productNumber * price;
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}


function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax-amount').innerText = taxAmount;
     document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    updatProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updatProductNumber('phone', 1219, false);
})



document.getElementById('case-plus').addEventListener('click', function(){
    updatProductNumber('case', 59, true);

    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;

});
    
document.getElementById('case-minus').addEventListener('click', function(){
    updatProductNumber('case', 59, false);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    
});