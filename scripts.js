// render images script

const images = [
    './img/aperol_spritz.webp',
    './img/blue_lagoon.webp',
    './img/cuba_libre.webp',
    './img/gin_tonic.webp',
    './img/tequila_sunrise.webp',
    './img/vodka_tonic.webp'
];

const gallery = document.getElementById('gallery');
const popup = document.querySelector('#imagePopup');
const popupImg = document.querySelector('#popupImg');
const closeBtn = document.querySelector('#closeBtn');

function render() {
    gallery.innerHTML = '';

    images.forEach((url) => {
        const fig = document.createElement('figure');
        fig.innerHTML = `<img src="${url}" alt="Cocktail">`;

        fig.onclick = () => {
            popupImg.src = url;
            popup.showModal();
        };

        gallery.appendChild(fig);
    });
}

closeBtn.onclick = () => popup.close();

render();

// popup script

let currentIndex = 0;

function render() {
    gallery.innerHTML = '';
    images.forEach((url, index) => {
        const fig = document.createElement('figure');
        fig.innerHTML = `<img src="${url}">`;
        fig.onclick = () => {
            currentIndex = index;
            openPopup();
        };
        gallery.appendChild(fig);
    });
}

function openPopup() {
    popupImg.src = images[currentIndex];
    popup.showModal();
}


document.getElementById('nextBtn').onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    popupImg.src = images[currentIndex];
};

document.getElementById('prevBtn').onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    popupImg.src = images[currentIndex];
};