const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];
const scoreList = document.getElementById("score-list");
const avgScore = document.getElementById("average-score");

let total = 0;
scores.forEach(score => {
    const li = document.createElement("li");
    li.textContent = score;
    scoreList.appendChild(li);
    total += score;
});

avgScore.textContent = "Average Score: " + (total / scores.length).toFixed(2);