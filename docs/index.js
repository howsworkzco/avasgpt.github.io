// 1. Create a list of possible explanations
const explanations = [
  "AvasGPT is trained on OpenWebText!",
  "Ye, it's still talking nonsense, right?",
  "well well well, who do weee have heeere...?",
  "blah blah blah",
  "AvasGPT is still quite stupid!"
];

// 2. Pick a random index from the array
const randomIndex = Math.floor(Math.random() * explanations.length);

// 3. Put the random explanation into the div
document.getElementById("explanation").textContent = explanations[randomIndex];
