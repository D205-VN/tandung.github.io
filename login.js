const User = document.querySelector('.User');
const Email = document.querySelector('.Email');
const Password = document.querySelector('.Password');
const btnLogin = document.querySelector('.btn');

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