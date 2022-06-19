let password1 = document.getElementById("password").innerText
let password2 = document.getElementById("confirm").innerText

function passwordValidation (password1,password2){
    if (password1 === password2){
        console.log("Great! Password is correct")
    } else {
        console.log("Uh oh, Your passwords dont match!")
    }
}