window.onload = function () {
    let images = Array.from(document.getElementsByClassName("imgCarousel"));
    let mainPhotos = Array.from(document.getElementsByClassName("clickMainProductPic"));
    let clickImages = Array.from(document.getElementsByClassName("clickImgCarousel"));

    let currentIndex = 0;

    function setMainPhoto(image) {
        mainPhotos.forEach(mainPhoto => {
            mainPhoto.src = image.src
        })
    }

    function updateImage(image, newIndex) {
        currentIndex = newIndex;
        setMainPhoto(image)
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

    document.getElementsByClassName("menuIcon")[0].addEventListener("click", () => {
        document.getElementsByClassName("mediaNavMenu")[0].style.display = 'flex'
    })
}