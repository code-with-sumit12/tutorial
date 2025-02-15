window.onscroll = function() {
    makeSticky();
};

const navbar = document.getElementById("navbar");
const stickyOffset = 50; // Number of pixels before the navbar becomes sticky

function makeSticky() {
    if (window.scrollY >= stickyOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}



    class TypeWriter {
        constructor(element, words, wait = 3000) {
            this.element = element;
            this.words = words;
            this.txt = '';
            this.wordIndex = 0;
            this.wait = parseInt(wait, 10);
            this.type();
            this.isDeleting = false;
        }

        type() {
            const current = this.wordIndex % this.words.length;
            const fullTxt = this.words[current];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.element.innerHTML = `<span class="wrap">${this.txt}</span>`;

            let typeSpeed = 200;

            if (this.isDeleting) {
                typeSpeed /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                typeSpeed = this.wait;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.wordIndex++;
                typeSpeed = 500;
            }

            setTimeout(() => this.type(), typeSpeed);
        }
    }

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        const element = document.querySelector('.typewrite');
        const words = JSON.parse(element.getAttribute('data-type'));
        const wait = element.getAttribute('data-period');
        new TypeWriter(element, words, wait);
    }

