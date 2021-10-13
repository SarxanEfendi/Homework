let inputName = document.querySelector("#name");
let inputSurname = document.querySelector("#surname");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#your-password");
let myBtn = document.querySelector("#submit-btn");

let changeName;
let changeSurname;
let changeEmail;
let changePassword;


inputName.addEventListener("change", (e) =>{
    changeName=e.target.value;
})

inputSurname.addEventListener("change", (e) =>{
    changeSurname=e.target.value;
})

inputEmail.addEventListener("change", (e) =>{
    changeEmail=e.target.value;
})

inputPassword.addEventListener("change", (e) =>{
    changePassword=e.target.value;
})


myBtn.addEventListener("click", ()=>{
    document.querySelector("#form-body").innerHTML = `<p>New user <br> Name: ${changeName} <br> Surname: ${changeSurname} <br> Email: ${changeEmail} <br> Password: ${changePassword}</p>`
})

