const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsContainer = document.querySelector(".result-container");

const fetchData = async () => {
  const response = await fetch("travel_recommendation_api.json");
  const data = await response.json();
  return data;
};

const searchRecommendations = async (keyword) => {
  const data = await fetchData();
  const filteredData = data.filter((place) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    const lowerCasePlace = place.name.toLowerCase();
    return (
      lowerCasePlace.includes(lowerCaseKeyword) ||
      (lowerCaseKeyword === "beach" && place.category === "beach") ||
      (lowerCaseKeyword === "temple" && place.category === "temple") ||
      (lowerCaseKeyword === "country" && place.category === "country")
    );
  });
  return filteredData;
};

const displayResults = (results) => {
  resultsContainer.innerHTML = ""; // Clear previous results
  if (!results.length) {
    resultsContainer.innerHTML = `<p>No results found for "${searchInput.value}".</p>`;
    return;
  }

  results.forEach((place) => {
    const resultElement = document.createElement("div");
    resultElement.classList.add("result");
    resultElement.innerHTML = `
      <img src="${place.imageUrl}" alt="${place.name}">
      <h3>${place.name}</h3>
      <p>${place.description}</p>
    `;
    resultsContainer.appendChild(resultElement);
  });
};

searchBtn.addEventListener("click", async () => {
  const keyword = searchInput.value.trim();
  if (!keyword) return; // Handle empty search

  const results = await searchRecommendations(keyword);
  displayResults(results);
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  resultsContainer.innerHTML = "";
});
