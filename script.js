let password1 = document.getElementById("password").value
let password2 = document.getElementById("confirm").value

function passwordValidation (password1,password2){
    if (password1 === password2){
        console.log("Great! Password is correct")
    } else {
        console.log("Uh oh, Your passwords dont match!")
    }
}