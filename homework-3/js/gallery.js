const photos = [
    "https://fastly.picsum.photos/id/804/300/400.jpg",
    "https://fastly.picsum.photos/id/185/300/400.jpg",
    "https://fastly.picsum.photos/id/229/300/400.jpg",
    "https://fastly.picsum.photos/id/211/300/400.jpg"
];

const gallerySection = document.getElementById("gallery-section");
photos.forEach((photo, index) => {
    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Image " + (index + 1);
    img.height = 300;
    gallerySection.appendChild(img);
});
