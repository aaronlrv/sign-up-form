let button = document.querySelector("#submit")

function passwordValidation (e){
    event.preventDefault()
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirm").value

    console.log(password)
    console.log(confirmPassword)
    if (password === confirmPassword){
        alert("Great! Password is correct")
    } else {
        alert("Uh oh, Your passwords dont match!")
    }
}