var toggle = document.getElementsByClassName('nav-menu-toggle')[0];
var menu = document.getElementsByClassName('nav-menu')[0];

toggle.addEventListener('click', function () {
    menu.classList.toggle('shown');
    if (toggle.textContent === 'Menu') {
        toggle.textContent = 'Close';
    }
    else {
        toggle.textContent = 'Menu';
    }
}, false);