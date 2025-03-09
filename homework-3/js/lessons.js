const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];
const ul = document.getElementById("instrument-list");

instruments.forEach(instrument => {
    const li = document.createElement("li");
    li.textContent = instrument;
    ul.appendChild(li);
});