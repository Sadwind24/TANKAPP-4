document.querySelector(".burger").addEventListener('click', function () {
	this.classList.toggle("active");
	document.querySelector(".header__list").classList.toggle('open');
})

//---------------------------------------------------
const emailInput = document.getElementById("email");
// const emailInput = document.querySelector('.banner-registr__e-mail-1')
// Регулярное выражение для проверки email адреса
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Функция для проверки email адреса
function validateEmail(email) {
	return emailRegex.test(email);
}

// Обработчик события изменения инпута email
emailInput.addEventListener("input", function () {
	// Если email адрес валиден, то инпут будет иметь зеленую границу
	if (validateEmail(emailInput.value)) {
		emailInput.style.border = "2px solid green";
	} else {
		// Если email адрес не валиден, то инпут будет иметь красную границу
		emailInput.style.border = "2px solid red";
	}
});
const out1 = document.querySelector('.out-1');
// Обработчик события нажатия кнопки
document.querySelector(".banner-registr__btn").addEventListener("click", function () {
	// Проверяем, является ли email адрес валидным
	if (validateEmail(emailInput.value)) {
		// Отправляем форму
		emailInput.form.submit();
		// emailInput.value = ' ';
	} else {
		// Выводим сообщение об ошибке
		alert("Пожалуйста, введите правильный адрес электронной почты");
		out1.textContent = `Не коректный ввод данных`;
		// alert("Please enter a valid email address.");
	}
});
document.querySelector('.banner').addEventListener('click', function () {
	// emailInput.value = ' ';
	out1.textContent = ' ';
})
document.querySelector('.banner-registr').addEventListener('click', function (e) {
	e.stopPropagation();
})
//--------------------------------------------
//^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$
