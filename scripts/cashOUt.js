// get the cashout button element
const cashOutBtn = document.getElementById('cashOutBtn');

// function to get any element by id
function getById(elementId) {
    return document.getElementById(elementId);
}
// function to remove a class from an element
function removeClass(element, className) {
    element.classList.remove(className);
}

// function to add a class to an element
function addClass(element, className) {
    element.classList.add(className);
}

// add event listener to the button
cashOutBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();

    // get the cashout title
    const cashOutTitle = document.querySelector('.cashOutTitle');
    // change the title text to cash out
    cashOutTitle.innerText = 'Withdraw Money';

    // get the select bank container
    const selectBankContainer = getById('selectBankContainer');
    // remove "visible" class from the select bank container
    removeClass(selectBankContainer, 'visible');
    // add 'hidden' class to the container
    addClass(selectBankContainer, 'hidden');

    // get the account number container
    const accountNumContainer = getById('accountNumContainer');
    // remove 'hidden' class from the account number container
    removeClass(accountNumContainer, 'vidible');
    // add 'visible' class to the container
    addClass(accountNumContainer, 'hidden');

    // get the agent number container
    const agentNumContainer = getById('agentNumContainer');
    // remove 'hidden' class from the container
    removeClass(agentNumContainer, 'hidden');
    // add visible class to the container
    addClass(agentNumContainer, 'visible');

    // get the add money button
    const addMoneyBtn = document.getElementById('addMoneyBtn');
    // change the add money button text to cash out
    addMoneyBtn.innerText = 'Withdraw Money';

})