
// Khai báo DOM
const registerForm = document.querySelector("#register-form")
const fullName = document.querySelector(".fullname")
const email = document.querySelector(".email")
const dateOfBirth = document.querySelector(".date-of-birth")
const password = document.querySelector(".password")
const repeatPassword = document.querySelector(".repeat-password")

// Khai báo hàm thực thi việc đăng ký
function handleRegister(event) {
    event.preventDefault() // Xóa hành vi tải lại trang

    let fullNameValue = fullName.value
    let emailValue = email.value
    let dateOfBirthValue = dateOfBirth.value
    let passwordValue = password.value
    let repeatPasswordValue = repeatPassword.value

    // Kiểm tra xem đã điền đủ các trường hay chưa
    if (!fullNameValue || !emailValue 
        || !dateOfBirthValue || !passwordValue || !repeatPasswordValue) {
            alert("Vui lòng nhập đủ các trường!")
        }
    
    // Kiểm tra mật khẩu và nhắc lại mật khẩu đã giống nhau chưa
    if (passwordValue != repeatPasswordValue) {
        alert("Mật khẩu không khớp!")
    }

    // Lưu dữ liệu vào localstorage
    let userInfo = {
        fullName: fullNameValue,
        email: emailValue,
        dateOfBirth: dateOfBirthValue,
        password: passwordValue,
        repeatPassword: repeatPasswordValue,
    }

    // Lưu dữ liệu vào Localstorage (Trước khi lưu phải chuyển thành dạng chuỗi)
    localStorage.setItem("userInfo", JSON.stringify(userInfo))

    // Thông báo thành công
    alert("Đăng ký thành công!")
    
}

// Khi có sự kiện submit form đăng ký thì gọi hàm handleRegister
registerForm.addEventListener("submit", handleRegister)
