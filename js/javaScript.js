const menu_btn = document.getElementById('static-menu-btn');
const footer = document.getElementById('footer');

menu_btn.onclick = function () {
    let menu = document.getElementById('top-nav-bottom');
    if (menu.className === 'top-nav-bottom') {
        menu.className += ' top-nav-bottom-block';
        menu_btn.className += ' btn-animation';
    }
    else {
        menu.className = 'top-nav-bottom';
        menu_btn.className = 'static-menu-btn';
    }
}

footer.onclick = function (ev) {
    let my_ul1 = undefined;;
    if (ev.target.className === "li1") {
        my_ul1 = document.getElementById('ul1');
    }
    else if (ev.target.className === "li2") {
        my_ul1 = document.getElementById('ul2');
    }
    else if (ev.target.className === "li3") {
        my_ul1 = document.getElementById('ul3');
    }
    else if (ev.target.className === "li4") {
        my_ul1 = document.getElementById('ul4');
    }
    else if (ev.target.className === "li5") {
        my_ul1 = document.getElementById('ul5');
    }

    if (my_ul1 == undefined)
        return;

    if (my_ul1.className === '')
        my_ul1.className = 'ul-show';
    else
        my_ul1.className = '';
}