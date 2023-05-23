var main_sec = document.getElementById('main_sec');
var pop_up = document.getElementById('pop-up');
var overlay = document.getElementById('overlay');
// var blur = document.getElementsByClassName('blur');

var btn = document.getElementById('btn');
var cancel = document.getElementById('cancel');


btn.addEventListener('click', () => {
    overlay.style.display = 'block';
    pop_up.style.display = 'block';

})
cancel.addEventListener('click', () => {
    pop_up.style.display = 'none';
    overlay.style.display = 'none';
})