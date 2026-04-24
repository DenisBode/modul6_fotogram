let popupImg;
let gallery;
let popup;

// render function

const IMAGES = [
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



function init() {
    gallery = document.getElementById('gallery');
    popup = document.getElementById('imagePopup');
    popupImg = document.getElementById('popupImg');

    htmlRender();
}


// function next <-> preview

function nextImage() {
    currentIndex = currentIndex + 1;

    if (currentIndex >= IMAGES.length) {
        currentIndex = 0;
    }

    popupImg.src = IMAGES[currentIndex].src;
    popupImg.alt = IMAGES[currentIndex].alt;

    showAltText();
    showCountPositionImg();
}

function prevImage() {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = IMAGES.length - 1;
    }

    popupImg.src = IMAGES[currentIndex].src;
    popupImg.alt = IMAGES[currentIndex].alt;
    showAltText();
    showCountPositionImg();
};



// function name of img 

function showAltText() {
    let altText = popupImg.alt;

    let output = document.getElementById('imgName');

    output.innerHTML = altText;
}

//popup close with click outside popup

function handleDialogClick(event) {
    if (event.target.id === 'imagePopup') {
        closeDialog();
    }
}

// count wich image in counted array

function showCountPositionImg() {
    let actualcount = currentIndex + 1;
    let counting = IMAGES.length;
    let output = actualcount + " / " + counting;

    document.getElementById('indexImages').innerHTML = output;
}

//new render function to render on time in html

function getImageTemplate(i) {
    return `
        <div class="img-box">
            <img src="${IMAGES[i].src}" 
                 alt="${IMAGES[i].alt}"
                 onclick="openDialog(${i})"
                 onkeydown="handleKeyPress(event, ${i})"
                 tabindex="0">
        </div>
    `;
}

function htmlRender() {
    let html = '';

    for (let i = 0; i < IMAGES.length; i++) {
        html += getImageTemplate(i);
    }

    gallery.innerHTML = html;
}


function openDialog(i) {
    currentIndex = i;
    popupImg.src = IMAGES[i].src;
    popupImg.alt = IMAGES[i].alt;
    popup.showModal();
    document.body.classList.add('no-scroll');
    showAltText();
    showCountPositionImg();
}

// function close popup with x

function closeDialog() {
    document.getElementById('imagePopup').close();
    document.body.classList.remove('no-scroll');
}

function handleKeyPress(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
        openDialog(index);
    }
}



