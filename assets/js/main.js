

const album = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
]


let imagesEl = document.getElementById('contenitore');
let marker = 2;
const allImages = document.querySelectorAll('#contenitore > img')  

//display images into the dom
for (let i = 0 ; i < album.length ; i++){
    const imgCurrent = album[i];
    const singleImgElement = `<img  class="img-fluid ${i === marker ? 'active' : ''} " src="${imgCurrent}" alt="">`;    
    imagesEl.insertAdjacentHTML('afterbegin' , singleImgElement);
}

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



