// get the login button
const loginBtn = document.getElementById('LoginBtn');

// add event listener to the login button
loginBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const pin = document.getElementById('pin').value;
    const pinNumber = parseInt(pin);

    if ( pinNumber === 1234 ) {
        window.location.href = '../main.html';
    } else {
        alert('Apnar pin thik nei')
    }
})