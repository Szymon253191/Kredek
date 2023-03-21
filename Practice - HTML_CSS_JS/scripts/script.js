const photos = ["../1.jpg", "../2.jpg", "../3.jpg"];
let currentPhotoIndex = 0;
const photoElement = document.getElementById("photo");
const titleElement = document.querySelector("#text-container h1");
const descriptionElement = document.querySelector("#text-container p");

function changePhoto() {
  photoElement.style.opacity = 0;
  setTimeout(() => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photoElement.src = photos[currentPhotoIndex];
    photoElement.style.opacity = 1;
  }, 1000);
}

changePhoto();
setInterval(changePhoto, 5000);
