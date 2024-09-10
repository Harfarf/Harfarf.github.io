const walkrosImages = [
    'images/Walkros/redEye.png',
    'images/Walkros/walkros-1.png',
    'images/Walkros/walkros-2.png',
    'images/Walkros/greenEye.png', 
    'images/Walkros/lobo.png',
    'images/Walkros/Josua.png',
];
const dieAndSeekImages = [
    'images/DieAndSeek/image2.png',
    'images/DieAndSeek/image4.png',
    'images/DieAndSeek/image3.png',
];
const abejuegoImages = [
    'images/Abejuego/title.png',
    'images/Abejuego/gameplay.jfif',
    'images/Abejuego/howToPlay.jpg',
];
const hagakureImages = [
    'images/Hagakure/background.png',
    'images/Hagakure/image1.png',
    'images/Hagakure/image3.jpeg',
    'images/Hagakure/image2.png',
    'images/Hagakure/image4.jpeg',
];
const marteImages = [
    'images/M-arte/marte-image1.png',
    'images/M-arte/marte-image2.png',
    'images/M-arte/marte-image3.png',
    'images/M-arte/marte-image4.png',
    'images/M-arte/marte-image5.png',
    'images/M-arte/marte-image6.png',
    'images/M-arte/marte-image7.png',
    'images/M-arte/marte-image8.png',
];
const lostInHangoverImages = [
    'images/LostInHangover/MENU.png',
    'images/LostInHangover/LostInHangover.png',
    'images/LostInHangover/Game.png',
]



function CreateAlert(text){
    alert(text)
}

function createSlideshow(imageArray, elementId, interval) {
    let currentIndex = 0;
    const slideshowElement = document.getElementById(elementId);

    function changeImage() {
        currentIndex = (currentIndex + 1) % imageArray.length;
        slideshowElement.src = imageArray[currentIndex];
    }

    setInterval(changeImage, interval);
}
createSlideshow(walkrosImages, 'slideshow-image-walkros', 2000);
createSlideshow(dieAndSeekImages, 'slideshow-image-dieAndSeek', 2000);
createSlideshow(abejuegoImages, 'slideshow-image-abejuego', 2000);
createSlideshow(hagakureImages, 'slideshow-image-hagakure', 2000);
createSlideshow(marteImages, 'slideshow-image-marte', 2000);
createSlideshow(lostInHangoverImages, 'slideshow-image-lostInHangover', 2000);