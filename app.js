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