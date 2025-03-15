document.getElementById("start").addEventListener("click", startAdventure);

function startAdventure() {
    const storyRef = document.getElementById("story");
    const choicesRef = document.getElementById("choices");
    
    storyRef.innerText = "You're feeling hungry! Where do you want to eat?";
    choicesRef.innerHTML = "";

    createChoice("Restaurant", () => chooseRestaurant());
    createChoice("Home", () => chooseHome());
}

function chooseRestaurant() {
    const storyRef = document.getElementById("story");
    const choicesRef = document.getElementById("choices");
    
    storyRef.innerText = "You're driving out to a restaurant! Do you want fast food or fine dining?";
    choicesRef.innerHTML = "";

    createChoice("Fast Food", () => chooseFastFood());
    createChoice("Fine Dining", () => chooseFineDining());
}

function chooseHome() {
    const storyRef = document.getElementById("story");
    const choicesRef = document.getElementById("choices");
    
    storyRef.innerText = "You decide to cook at home! What do you want to make?";
    choicesRef.innerHTML = "";

    createChoice("Pasta", () => cookPasta());
    createChoice("Sandwich", () => makeSandwich());
}

function chooseFastFood() {
    const storyRef = document.getElementById("story");
    const choicesRef = document.getElementById("choices");

    let confirmChoice = confirm("Do you want a burger?");
    storyRef.innerText = confirmChoice ? "You enjoy a delicious burger with fries!" : "You try the tacos, but they're too spicy!";
    choicesRef.innerHTML = "";
}

function chooseFineDining() {
    const storyRef = document.getElementById("story");
    const choicesRef = document.getElementById("choices");

    let mealChoice = prompt("Do you order 'steak' or 'seafood'?");
    if (mealChoice.toLowerCase() === "steak") {
        storyRef.innerText = "Your steak is cooked to perfection!";
    } else if (mealChoice.toLowerCase() === "seafood") {
        storyRef.innerText = "Your fish tastes amazing, yum!";
    } else {
        storyRef.innerText = "You hesitated too long and left the restaurant hungry.";
    }
    choicesRef.innerHTML = "";
}

function cookPasta() {
    const storyRef = document.getElementById("story");
    const choicesRef = document.getElementById("choices");

    let extraCheese = confirm("Do you add extra cheese?");
    storyRef.innerText = extraCheese ? "Your cheesy pasta is amazing!" : "It's good, but missing some flavor.";
    choicesRef.innerHTML = "";
}

function makeSandwich() {
    const storyRef = document.getElementById("story");
    const choicesRef = document.getElementById("choices");

    let breadType = prompt("Do you use 'white' or 'wheat' bread?");
    storyRef.innerText = (breadType.toLowerCase() === "white") ? "Classic choice! Your sandwich is simple yet satisfying." 
                     : (breadType.toLowerCase() === "wheat") ? "You feel healthy, but the bread is a bit dry."
                     : "You couldn't decide, so you just had a snack instead.";
    choicesRef.innerHTML = "";
}

function createChoice(text, callback) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.classList.add("choice-btn");
    btn.addEventListener("click", callback);
    document.getElementById("choices").appendChild(btn);
}
