var toggle = document.getElementsByClassName('nav-menu-toggle')[0];
var menu = document.getElementsByClassName('nav-menu')[0];
console.log(toggle);

toggle.addEventListener('click', function() {
    menu.classList.toggle('shown');
    if (toggle.getAttribute('src') === '/img/menu.svg') {
        toggle.setAttribute('src', '/img/close.svg')
    }
    else {
        toggle.setAttribute('src', '/img/menu.svg')
    }
}, false);