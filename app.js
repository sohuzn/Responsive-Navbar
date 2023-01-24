var btn = document.querySelector('#btn');
var btnClose = document.querySelector('.close');
var btnOpen = document.querySelector('.open');
var nav = document.querySelector('.nav');
btn.addEventListener('click', function () {
    nav.classList.toggle('active');
    btnOpen.classList.add('off');
    btnClose.classList.add('active');
    nav.classList.toggle('style');
})
btnClose.addEventListener('click', function () {
    nav.classList.toggle('active');
    btnOpen.classList.remove('off');
    btnClose.classList.remove('active');
})