let images = Array.from(document.getElementsByClassName("imgCarousel"));
let mainPhotos = Array.from(document.getElementsByClassName("clickMainProductPic"));
let clickImages = Array.from(document.getElementsByClassName("clickImgCarousel"));
let currentIndex = 0;

//setting the chosen image as the main pic
function setMainPhoto(image) {
    mainPhotos.forEach(mainPhoto => {
        mainPhoto.src = image.src
    })
}

//updating the main pic with the chosen image
function updateImage(image, newIndex) {
    currentIndex = newIndex;
    setMainPhoto(image)
};

//showing the slideContainer when clicking on each image & updating the main img
images.forEach(function (image, index) {
    image.addEventListener("click", (event) => {
        document.getElementById("clickSlideContainer").style.display = 'flex';
        updateImage(event.target, index)
    })
})

//closing the slideContainer when clicking on closeIcon
document.getElementsByClassName("closeIcon")[0].addEventListener("click", () => {
    document.getElementById("clickSlideContainer").style.display = 'none';
})

//preButton functionality & looping through images when reaching the first one
let preButtons = document.querySelectorAll(".preButton, .mediaPreButton");
preButtons.forEach(element => {
    element.addEventListener('click', () => {
        if (currentIndex % 4 > 0) {
            currentIndex -= 1;
            let newImage = images[currentIndex];
            setMainPhoto(newImage)
        }
        else {
            currentIndex = clickImages.length - 1;
            let newImage = images[currentIndex];
            setMainPhoto(newImage)
        }
    });
})

//nextButton functionality & looping through images when reaching the last one
let nextButtons = document.querySelectorAll(".nextButton, .mediaNextButton");
nextButtons.forEach(element => {
    element.addEventListener('click', () => {
        if (currentIndex % 4 < 3) {
            currentIndex += 1;
            let newImage = images[currentIndex];
            setMainPhoto(newImage)
        }
        else {
            currentIndex = 0;
            let newImage = images[currentIndex];
            setMainPhoto(newImage)
        }
    });
})

//menuIcon on mobile design
// document.getElementsByClassName("menuIcon")[0].addEventListener("click", () => {
//     document.getElementsByClassName("mediaNavMenu")[0].style.display = 'flex'
// })