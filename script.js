let button = document.querySelector("#submit")
let message = document.querySelector(".message")

function passwordValidation (e){
    event.preventDefault()
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirm").value

    console.log(password)
    console.log(confirmPassword)
    if (password === confirmPassword){
        message.innerHTML= `
        <p class="passwordMessage">  Great! Password is correct </p>
        `
    } else {
        message.innerHTML= `
        <p class="wrongPasswordMessage"> Uh oh, Your passwords dont match! </p>
        `
    }
}