//⚙️ JavaScript: добавляем действие кнопке

const button = document.getElementById("mybutton");
button.addEventListener("click", () => {
    alert("Кнопка была кликнута!");
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
  loop: true, // бесконечная прокрутка
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});
