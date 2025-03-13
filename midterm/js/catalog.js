const photos = [
    "https://fastly.picsum.photos/id/804/300/400.jpg",
    "https://fastly.picsum.photos/id/185/300/400.jpg",
    "https://fastly.picsum.photos/id/229/300/400.jpg",
    "https://fastly.picsum.photos/id/211/300/400.jpg",
    "https://fastly.picsum.photos/id/229/300/400.jpg",
    "https://fastly.picsum.photos/id/229/300/400.jpg",
];

const products = [
    "My First Fire",
    "Handy Hand",
    "NapSack",
    "Hot Tub Wildlife Feeder",
    "Toilet Meadow",
    "Pudding Pouch"
]

const catalogSection = document.getElementById("catalog-section");
photos.forEach((photo, index) => {
    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Image " + (index + 1);
    img.height = 300;
    catalogSection.appendChild(img);
});
