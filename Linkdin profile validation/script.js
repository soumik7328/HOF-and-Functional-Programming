let input = document.getElementById("url");
let button = document.getElementById("validate");
let result = document.getElementById("result");
let pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,29}[a-zA-Z0-9]$/;

button.addEventListener("click", function(){
    let linkedinurl = input.value;
    let check = pattern.test(linkedinurl);

    if(check){
        result.textContent = "Input URL is a valid LinkedIn profile URL.";
        result.style.color = "green"
    }
    else {
        // Display an error message
        result.textContent = "Input URL is not a valid LinkedIn profile URL.";
        result.style.color = "red";
    }

});