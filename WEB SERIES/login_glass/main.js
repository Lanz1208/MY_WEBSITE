const loginBtn= document.querySelector("#login");
const registerBtn= document.querySelector("#signup");
const loginForm= document.querySelector(".login_form");
const registerForm= document.querySelector(".register_form");

loginBtn.addEventListener('click',()=>{
    loginBtn.style.backgroundColor= "#21264D";
    registerBtn.style.backgroundColor= "rgba(255,255,255,0.2)";

    loginForm.style.left="50%";
    registerForm.style.left="-50%";

    loginForm.style.opacity=1;
    registerForm.style.opacity=1;
})

registerBtn.addEventListener('click',()=>{
    loginBtn.style.backgroundColor= "rgba(255,255,255,0.2)";
    registerBtn.style.backgroundColor= "#21264D";

    loginForm.style.left="150%";
    registerForm.style.left="50%";

    loginForm.style.opacity=0;
    registerForm.style.opacity=1;
})

const loginField= document.getElementById("logPassword");
const loginIcon= document.getElementById("log_pass_icon");


const regField= document.getElementById("regPassword");
const regIcon= document.getElementById("reg_pass_icon");

function myLogPassword(){
    if (loginField.type === "password"){
        loginField.type = "text";

        loginIcon.name = "eye-off-outline";
        loginIcon.style.cursor="pointer";

    }else{
        loginField.type="password";
        loginIcon.name="eye-outline";
        loginIcon.style.cursor="pointer";
    }
}

function myRegPassword(){
    if (regField.type === "password"){
        regField.type = "text";

        regIcon.name = "eye-off-outline";
        regIcon.style.cursor="pointer";

    }else{
        regField.type="password";
        regIcon.name="eye-outline";
        regIcon.style.cursor="pointer";
    }
}

function changeIcon(value){
    if(value.length > 0){
        loginIcon.name = "eye-outline";
        regIcon.name = "eye-outline";
    }else{
        loginIcon.name = "lock-closed-outline";
        regIcon.name = "lock-closed-outline";
    }
}