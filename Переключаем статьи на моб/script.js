document.querySelector('.left').addEventListener('click', articleLeft);
document.querySelector('.right').addEventListener('click', articleRight);

let section = document.querySelectorAll('article section');
let sectionCount = section.length; // !!!
let hash = 0; // //#

if (window.location.hash) {
    hash = window.location.hash; //#2
    hash = +hash.replace('#', '');
    showSection();
}

function articleLeft() {
    if (hash - 1 >= 0) {
        hash--;
    }
    else {
        hash = sectionCount - 1;
    }
    window.location.hash = hash;
    showSection();
}

function articleRight() {
    if (hash + 1 < sectionCount) {
        hash++;
    }
    else {
        hash = 0;
    }
    window.location.hash = hash;
    showSection();
}

function showSection() {
    section.forEach(elem => {
        elem.classList.add('hide-section');
    });
    section[hash].classList.remove('hide-section');
}

