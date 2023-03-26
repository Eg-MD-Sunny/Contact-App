let lActive = document.getElementById('l-active-btn');
let sActive = document.getElementById('s-active-btn');

let l_active_el = document.querySelector('.l-active');
let s_active_el = document.querySelector('.s-active');

sActive.onclick = function() {
    s_active_el.style.opacity = "0";
    s_active_el.classList = "animate__animated animate__fadeOutUp active-box s-active";
    l_active_el.style.opacity = "1";
    l_active_el.style.zIndex = "1";
    l_active_el.classList = "animate__animated animate__fadeInDown active-box l-active";
}

lActive.onclick = function() {
    l_active_el.style.opacity = "0";
    l_active_el.classList = "animate__animated animate__fadeOutUp active-box s-active";
    s_active_el.style.opacity = "1";
    s_active_el.style.zIndex = "1";
    s_active_el.classList = "animate__animated animate__fadeInDown active-box l-active";
}
