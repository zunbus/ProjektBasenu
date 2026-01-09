const overlayEl1 = document.getElementById('overlay1');
const overlayEl2 = document.getElementById('overlay2');
const overlayEl3 = document.getElementById('overlay3');

function closePage(url) {
    overlayEl1.classList.remove('retract');
    overlayEl2.classList.remove('retract');
    overlayEl3.classList.remove('retract');

    overlayEl1.classList.add('expand');
    overlayEl2.classList.add('expand');
    overlayEl3.classList.add('expand');

    overlayEl3.addEventListener('animationend', function handler(){
        overlayEl3.removeEventListener('animationend', handler);
        window.location.href = url;
    })
}

function openPage() {
    overlayEl1.classList.remove('expand');
    overlayEl2.classList.remove('expand');
    overlayEl3.classList.remove('expand');

    overlayEl1.classList.add('retract');
    overlayEl2.classList.add('retract');
    overlayEl3.classList.add('retract');
}

window.addEventListener('DOMContentLoaded', openPage);