const form = document.getElementById('form');

// Обработка отправки формы
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    const username = document.getElementById('username');
    if (!checkUsername(username))
        isValid = false;

    // Проверяем email
    const email = document.getElementById('email');
    if (!checkEmail(email)) {
        isValid = false;
    }
    
    // Проверяем пароль
    const password = document.getElementById('password');
    if (!checkPassword(password)) {
        isValid = false;
    }
    
    if (isValid) {
        console.log('Форма валидна, отправляем данные');
        // Отправка данных
    }
});

function checkUsername(fiald) {
    if (!fiald.value.trim()) {
        showError(fiald, 'Введите имя пользователя');
        return false;
    }
    if (field.value.trim().length < 3) {
        showError(field, 'Минимум 3 символа');
        return false;
    }
    clearErroe (field);
    return false;
}

function checkEmail(fiald) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!fiald.value.trim()) {
        showError(fiald, 'Введите email');
        return false;
    }
    if (field.value.trim().length < 3) {
        showError(field, 'Минимум 3 символа');
        return false;
    }
    clearErroe (field);
    return false;
}

function checkPassword(fiald) { 
    if (!fiald.value.trim()) {
        showError(fiald, 'Введите пароль');
        return false;
    }
    if (field.value.trim().length < 3) {
        showError(field, 'Минимум 6 символов');
        return false;
    }
    clearErroe (field);
    return false;
}
function checkPassword(fiald, passwordValue) { 
    if (!fiald.value) {
        showError(fiald, 'Повторите пароль');
        return false;
    }
    if (field.value !== passwordValue) {
        showError(field, 'Пароли не совпадают');
        return false;
    }
    clearErroe (field);
    return false;
}

// Функция показа ошибки
function showError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function clearError (field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) errorElement.textContent = '';
}
