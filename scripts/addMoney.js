// get the dom elements
const addMoneyBtn =document.getElementById('addMoneyBtn');

// add event listener to the button
addMoneyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // get the amount value
    const amountValue = document.getElementById('amountInput').value;
    const amount = parseInt(amountValue);
    // get the main balance innerText
    const mainBalanceInput = document.getElementById('mainBalanceInput');
    const mainBalanceText = mainBalanceInput.innerText;
    const mainBalance = parseInt(mainBalanceText);

    // calculate the new balanec
    const newBalance = mainBalance + amount;

    // set the new balance to the main balance input
    mainBalanceInput.innerText = newBalance;

    // clear the amount input field
    amountInput.value = '';
})