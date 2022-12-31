window.onload = function () {
    let images = Array.from(document.getElementsByClassName("imgCarousel"));
    let mainPhoto = document.getElementById("clickMainProductPic");
    let clickImages = Array.from(document.getElementsByClassName("clickImgCarousel"));

    let currentIndex = 0;

    function updateImage(image, newIndex) {
        currentIndex = newIndex;
        mainPhoto.src = image.src;
    };

    images.forEach(function (image, index) {
        image.addEventListener("click", (event) => {
            document.getElementById("clickSlideContainer").style.display = 'flex';
            updateImage(event.target, index)
        })
    })

    document.getElementsByClassName("closeIcon")[0].addEventListener("click", () => {
        document.getElementById("clickSlideContainer").style.display = 'none';
    })

    document.getElementById("preButton").addEventListener("click", () => {
        if (currentIndex % 4 > 0) {
            currentIndex -= 1;
            let newImage = images[currentIndex];
            mainPhoto.src = newImage.src;
        }
        else {
            currentIndex = clickImages.length - 1;
            let newImage = images[currentIndex];
            mainPhoto.src = newImage.src;
        }
    })

    document.getElementById("nextButton").addEventListener("click", () => {
        if (currentIndex % 4 < 3) {
            currentIndex += 1;
            let newImage = images[currentIndex];
            mainPhoto.src = newImage.src;
        }
        else {
            currentIndex = 0;
            let newImage = images[currentIndex];
            mainPhoto.src = newImage.src;
        }
    })

}