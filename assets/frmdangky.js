document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessages = document.querySelectorAll('.error');

    // Xoá tất cả thông báo lỗi
    errorMessages.forEach(error => error.textContent = '');

    // Kiểm tra tên đăng nhập
    if (username.value.trim() === '') {
        showError(username, 'Tên đăng nhập không được để trống');
        isValid = false;
    }

    // Kiểm tra email
    if (email.value.trim() === '') {
        showError(email, 'Email không được để trống');
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Email không hợp lệ');
        isValid = false;
    }

    // Kiểm tra mật khẩu
    if (password.value.trim() === '') {
        showError(password, 'Mật khẩu không được để trống');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Mật khẩu phải có ít nhất 6 ký tự');
        isValid = false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, 'Xác nhận mật khẩu không được để trống');
        isValid = false;
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        showError(confirmPassword, 'Mật khẩu xác nhận không đúng');
        isValid = false;
    }

    // Nếu hợp lệ, hiển thị kết quả
    if (isValid) {
        console.log("Đăng ký thành công với thông tin:");
        console.log("Tên đăng nhập:", username.value);
        console.log("Email:", email.value);
        console.log("Mật khẩu:", password.value);
        alert('Form đã đăng ký thành công');
    }
});

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Kiểm tra mật khẩu trong khi nhập
document.getElementById('password').addEventListener('input', function () {
    const errorElement = this.nextElementSibling;
    if (this.value.length < 6) {
        errorElement.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
    } else {
        errorElement.textContent = '';
    }
});

// Kiểm tra xác nhận mật khẩu trong khi nhập
document.getElementById('confirm-password').addEventListener('input', function () {
    const errorElement = this.nextElementSibling;
    const passwordValue = document.getElementById('password').value;

    if (this.value !== passwordValue) {
        errorElement.textContent = 'Mật khẩu xác nhận không đúng';
    } else {
        errorElement.textContent = '';
    }
});


// Xoá lỗi khi người dùng nhập lại
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim() !== '') {
            const errorElement = this.nextElementSibling;
            if (errorElement) {
                errorElement.textContent = '';
            }
        }
    });
});

// Hàm kiểm tra định dạng email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
