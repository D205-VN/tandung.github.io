const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnRegister = document.querySelector('.btnRegister');
const User = document.querySelector('.User');
const Email = document.querySelector('.Email');
const Password = document.querySelector('.Password');
const btnLogin = document.querySelector('.btn');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        User.value === "" ||
        Email.value === "" ||
        Password.value === ""
    ) {
        alert("vui lòng không để trống");
    } else {
        // array user
        const user = {
            username: User.value,
            email: Email.value,
            password: Password.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(User.value, json);
        localStorage.setItem(Email.value, json);
        localStorage.setItem(Password.value, json);
        alert("Đăng Ký Thành Công");
        window.location.href = "login.html";
    }
});
btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (Email.value === "" || Password.value === "") {
        alert("vui lòng không để trống");
    } else {
        const user = JSON.parse(localStorage.getItem(Email.value));
        if (
            user.email === Email.value &&
            user.password === Password.value
        ) {
            alert("Đăng Nhập Thành Công");
            window.location.href = "login.html";
        } else {
            alert("Đăng Nhập Thất Bại");
        }
    }
});