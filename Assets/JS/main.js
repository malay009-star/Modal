var main_sec = document.getElementById('main_sec');
var pop_up = document.getElementById('pop-up');
// var blur = document.getElementsByClassName('blur');

var btn = document.getElementById('btn');
var cancel = document.getElementById('cancel');


btn.addEventListener('click', () => {
    main_sec.classList.toggle('blur-sm');
    pop_up.style.display = 'block';

})
cancel.addEventListener('click', () => {
    pop_up.style.display = 'none';
    main_sec.classList.toggle('blur-none');
})