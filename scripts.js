// render function

const images = [
    {
        src: './img/aperol_spritz.webp',
        alt: 'Aperol Spritz'
    },
    {
        src: './img/blue_lagoon.webp',
        alt: 'Blue Lagoon'
    },
    {
        src: './img/cuba_libre.webp',
        alt: 'Cuba Libre'
    },
    {
        src: './img/gin_tonic.webp',
        alt: 'Gin Tonic'
    },
    {
        src: './img/mojito.webp',
        alt: 'Mojito'
    },
    {
        src: './img/negroni.webp',
        alt: 'Negroni'
    },
    {
        src: './img/tequila_sunrise.webp',
        alt: 'Tequila Sunrise'
    },
    {
        src: './img/vodka_tonic.webp',
        alt: 'Vodka Tonic'
    },
    {
        src: './img/whisky_sour.webp',
        alt: 'Whisky Sour'
    },
    {
        src: './img/white_russian.webp',
        alt: 'White Russian'
    },
];

let currentIndex = 0;

const gallery = document.getElementById('gallery');
const popup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImg');

function render() {
    for (let i = 0; i < images.length; i++) {
        let img = document.createElement('img');
        img.src = images[i].src;
        img.alt = images[i].alt;

        console.log(images[i]);

        img.onclick = function () {
            currentIndex = i;
            popupImg.src = images[i].src;
            popupImg.alt = images[i].alt;
            popup.showModal();
            showAltText();
            // showCountImg();
            showCountPositionImg();
        };

        gallery.appendChild(img);
    }
}

render();

// function next <-> preview

document.getElementById('nextBtn').onclick = function () {
    currentIndex = currentIndex + 1;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    popupImg.src = images[currentIndex].src;
    popupImg.alt = images[currentIndex].alt;
    showAltText();
    showCountPositionImg();
};

document.getElementById('prevBtn').onclick = function () {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    popupImg.src = images[currentIndex].src;
    popupImg.alt = images[currentIndex].alt;
    showAltText();
    showCountPositionImg();
};



// function name of img 

function showAltText() {
    let altText = popupImg.alt;
    let output = document.getElementById('imgName');
    output.innerHTML = altText;
}

// function close popup with x

document.getElementById('closeBtn').onclick = closeDialog;

function closeDialog() {
    document.getElementById('imagePopup').close();
}

//popup close with click outside popup

popup.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.close();
    }
});

// count images in array

// function showCountImg() {
//     let count = images.length;
//     console.log("Anzahl: ", count);

//     document.getElementById('indexImages').innerHTML = count;
// }

// count wich image in counted array

function showCountPositionImg() {
    let actualcount = currentIndex + 1;
    let counting = images.length;
    let output = actualcount + " / " + counting;

    console.log("Position: ", output);

    document.getElementById('indexImages').innerHTML = output;

}