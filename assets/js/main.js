
/* const album = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
] */

const newImages = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let imagesEl = document.getElementById('contenitore');
let marker = 2;

//display images into the dom

newImages.forEach((imageTitleText, index) => {
    let markup= 
        `
        <div class="col-12">
            <div class="card">

                <div class="card-img">
                    <img  class="img-fluid ${index === marker ? 'active' : ''} " src="./assets/${imageTitleText.image}" alt="">
                </div>

                <div class="card-img-overlay position-absolute bottom-0">
                    <h4 class="">${imageTitleText.title}</h4>
                    <p>${imageTitleText.text}</p>
                </div>

                <button id="button_up">
                    <i class="fa-solid fa-arrow-up"></i>
                </button>
                <button id="button_down">
                    <i class="fa-solid fa-arrow-down"></i>
                </button>
            </div>
        </div>
        `;
    document.querySelector('.row').innerHTML=markup;    
});

/* for (let i = 0 ; i < album.length ; i++){
    const imgCurrent = album[i];
    const singleImgElement = `<img  class="img-fluid ${i === marker ? 'active' : ''} " src="${imgCurrent}" alt="">`;    
    imagesEl.insertAdjacentHTML('afterbegin' , singleImgElement);
} */


const allImages = document.querySelectorAll('#contenitore > img');
//displau the next image
const previousButton = document.getElementById('button_up');
previousButton.addEventListener('click' , function() {

    console.log('precedente');
    const currentSlide = allImages[marker];
    currentSlide.classList.remove('active');    
    marker --;

    if (marker < 0){
        marker = album.length - 1;
    }

    const prevImage = allImages[marker];
    prevImage.classList.add('active');
})

//displau the previous image
const nextButton = document.getElementById('button_down');
nextButton.addEventListener('click' , function() {

    console.log('seguente');    
    const currentSlide = allImages[marker];
    currentSlide.classList.remove('active');

    marker ++;
    if(marker > album.length - 1){
        marker = 0;
    }

    const nextImage = allImages[marker];
    nextImage.classList.add('active');    
})



