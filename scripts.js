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
const popupImg = document.getElementById('popupImg')

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
    console.log(altText);

    let output = document.getElementById('imgName');
    console.log(output);

    output.innerHTML = altText;
}

// function close popup with x

function closeDialog() {
    console.info("Clicked on x Btn in PopUp");
    document.getElementById('imagePopup').close();
}

//popup close with click outside popup

popup.addEventListener('click', function (event) {
    if (event.target === popup) {
        console.info("Clicked outside Popup");
        popup.close();
    }
});

// count wich image in counted array

function showCountPositionImg() {
    let actualcount = currentIndex + 1;
    let counting = images.length;
    let output = actualcount + " / " + counting;

    console.log("Position: ", output);

    document.getElementById('indexImages').innerHTML = output;
}

//new render function to render on time in html

function htmlrender() {
    console.log("Function htmlRender started");

    let container = document.getElementById('gallery');
    let html = '';
    for (let i = 0; i < images.length; i++) {
        html += `
    <div class="img-box">
        <img src="${images[i].src}" 
             alt="${images[i].alt}"
             onclick="openDialog(${i})"
             onkeydown="handleKeyPress(event, ${i})"
             tabindex="0">
    </div>
`;
    }
    container.innerHTML = html;
}

function openDialog(i) {
    currentIndex = i;
    popupImg.src = images[i].src;
    popupImg.alt = images[i].alt;
    popup.showModal();
    showAltText();
    showCountPositionImg();
}

function handleKeyPress(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
        openDialog(index);
    }
}

// start htmlrender function on load

window.onload = function () {
    htmlrender();
    closeBtn.onclick = closeDialog;
};

