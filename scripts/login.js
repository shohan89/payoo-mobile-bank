// get the login button
const loginBtn = document.getElementById('LoginBtn');
const pinInput = document.getElementById('pin');

// add event listener to the login button
loginBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(typeof pinInput);
    if ( pinInput === '1234' ) {
        // window.location.href = '../main.html';
    } else {
        alert('Apnar pin thik nei')
    }
})