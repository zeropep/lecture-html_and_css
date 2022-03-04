const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const btn = document.getElementById("btn");
btn.disabled = true;

document.querySelector(".login-form").addEventListener("input", () => {
    let emailIn1 = email.value.includes("@");
    let pwdLen = pwd.value.length;
    if (pwdLen >= 8 && emailIn1) {
        btn.disabled = false;
    }
});
