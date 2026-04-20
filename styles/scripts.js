const images = [
    './img/aperol_spritz.webp',
    './img/blue_lagoon.webp',
    './img/cuba_libre.webp',
    './img/gin_tonic.webp',
    './img/tequila_sunrise.webp',
    './img/vodka_tonic.webp'
];

function renderGallery() {
    const gallery = document.getElementById('gallery');

    gallery.innerHTML = '';

    images.forEach((imgUrl) => {
        gallery.innerHTML += `
            <figure>
                <img src="${imgUrl}" alt="Foto aus meinem Album">
            </figure>
        `;
    });
}

renderGallery();