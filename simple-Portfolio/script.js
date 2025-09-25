function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");

  if (recommendation.value && recommendation.value.trim() !== "") {
    // Call showPopup
    showPopup(true);

    // Create a new recommendation
    let element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    document.getElementById("all_recommendations").appendChild(element);

    // Reset the textarea
    recommendation.value = "";
  }
}

function showPopup(show) {
  let popup = document.getElementById("popup");
  popup.style.visibility = show ? "visible" : "hidden";
}

// script.js
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
