let form = document.querySelector(".form");
let button = document.querySelector(".form-submit");
// pseudo element reference
//let error = getComputedStyle(button, '::before');
const root = document.querySelector(":root"); //grabbing the root element


// Function to check if email is valid or invalid
function validate(){
    // Elements reference
    let email = document.querySelector('.form-input').value;
    //let error = document.querySelector(".error");
    let span = document.querySelector(".state");
    // Pattern to check if email is valid
    let pattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    
        if(email.match(pattern)){
            span.innerHTML = "This email is valid";
            span.style.color = "green";
           return true;
        }
        else{
            span.innerHTML = "Please provide a valid email";
            span.style.color = "hsl(0, 36%, 70%)";
            form.style.borderColor= "hsl(0, 93%, 68%)";
            root.style.setProperty("--error-icon", 'url(/images/icon-error.svg)');
        
        }

}

// Add event listener to button
button.addEventListener('click',validate,true)
