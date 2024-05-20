document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("recommend_btn").addEventListener("click", addRecommendation);
});

function addRecommendation() {
  var newRecommendationText = document.getElementById("new_recommendation").value;
  if (newRecommendationText) {
    var allRecommendations = document.getElementById("all_recommendations");
    var newRecommendation = document.createElement("div");
    newRecommendation.className = "recommendation";
    newRecommendation.innerHTML = `<span>&#8220;</span> ${newRecommendationText} <span>&#8221;</span>`;
    allRecommendations.appendChild(newRecommendation);
    showPopup(true);
    // Clear the input field after adding the recommendation
    document.getElementById("new_recommendation").value = "";
  }
}

function showPopup(show) {
  var popup = document.getElementById("popup");
  popup.style.display = show ? "block" : "none";
}
