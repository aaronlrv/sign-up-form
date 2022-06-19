let button = document.querySelector("#submit")

function passwordValidation (password1,password2){
    if (password1 === password2){
        e.preventDefault()
        alert("Great! Password is correct")
    } else {
        e.preventDefault()
        alert("Uh oh, Your passwords dont match!")
    }
}

button.addEventListener,("click", () => {
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm").value

    passwordValidation(password,confirmPassword)
    e.preventDefault()
})