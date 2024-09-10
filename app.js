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