document.addEventListener("DOMContentLoaded", function () {
    // Đăng kí
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

    // Các đoạn xử lý input khi người dùng nhập vào
    document.getElementById('password').addEventListener('input', function () {
        const errorElement = this.nextElementSibling;
        if (this.value.length < 6) {
            errorElement.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        } else {
            errorElement.textContent = '';
        }
    });

    document.getElementById('confirm-password').addEventListener('input', function () {
        const errorElement = this.nextElementSibling;
        const passwordValue = document.getElementById('password').value;

        if (this.value !== passwordValue) {
            errorElement.textContent = 'Mật khẩu xác nhận không đúng';
        } else {
            errorElement.textContent = '';
        }
    });

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
});

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}













// Mở modal

document.addEventListener("DOMContentLoaded", function () {
    var authModal = document.getElementById("auth-modal");
    var loginForm = document.getElementById("login-form");
    var registerForm = document.getElementById("register-form");
    var openLogin = document.getElementById("open-login");
    var openRegister = document.getElementById("open-register");
    var switchToRegister = document.getElementById("switch-register");
    var switchToLogin = document.getElementById("switch-login");
    var closeModalButtons = document.querySelectorAll("#close-modal");
    var modalOverlay = document.querySelector(".modal__overlay");


    // tìm kiếm lịch sử 
    const searchBox = document.querySelector(".header__search");
    const searchHistory = document.querySelector(".header__search-history");



    // Mặc định ẩn form đăng ký
    registerForm.style.display = "none";

    function showLoginForm() {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }

    function showRegisterForm() {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

    function closeModal() {
        authModal.style.display = "none";
    }

    // Sự kiện mở modal
    openLogin.addEventListener("click", function () {
        authModal.style.display = "flex";
        showLoginForm();
    });

    openRegister.addEventListener("click", function () {
        authModal.style.display = "flex";
        showRegisterForm();
    });

    // Chuyển đổi giữa login và register
    switchToRegister.addEventListener("click", showRegisterForm);
    switchToLogin.addEventListener("click", showLoginForm);

    // Đóng modal
    closeModalButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            closeModal();
        });
    });

    modalOverlay.addEventListener("click", closeModal);

    //////////////////
    // lookfor history

});






/// khi click vào thì menu hiện ra 
document.addEventListener("DOMContentLoaded", function () {
    const userBtn = document.querySelector(".header__navbar-user");
    const userMenu = document.querySelector(".header__navbar-user-menu");

    userBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
        userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
    });

    // Đóng menu khi click ra ngoài
    document.addEventListener("click", function () {
        userMenu.style.display = "none";
    });

    // Ngăn chặn menu bị ẩn khi click vào chính nó
    userMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});


// Nếu click vào trái tym nó sẽ hiện đỏ
function toggleLike() {
    var emptyIcon = document.querySelector('.home-product-item__like-icon-empty');
    var fillIcon = document.querySelector('.home-product-item__like-icon-fill');

    if (emptyIcon.style.display !== 'none') {
        emptyIcon.style.display = 'none';
        fillIcon.style.display = 'inline-block';
    } else {
        emptyIcon.style.display = 'inline-block';
        fillIcon.style.display = 'none';
    }
}


