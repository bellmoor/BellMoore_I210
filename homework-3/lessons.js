const insturments [Piano, Guitar. Violin. Drums, Saxophone, Flute]

const ul = document.querySelector("ul");

// Loop through the list of instruments
for (let i = 0; i < instruments.length; i++) {
    // Create a new li element
    const li = document.createElement("li");
    
    // Set the text content to the current instrument
    li.textContent = instruments[i];
    
    // Append the li to the ul
    ul.appendChild(li);
  }