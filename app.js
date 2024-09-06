const walkrosImages = [
    'images/Walkros/redEye.png',
    'images/Walkros/walkros-1.png',
    'images/Walkros/walkros-2.jpg',
    'images/Walkros/greenEye.png', 
    'images/Walkros/lobo.png',
    'images/Walkros/Josua.png',
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
createSlideshow(anotherSlideshowImages, 'slideshow-image-another', 3000);