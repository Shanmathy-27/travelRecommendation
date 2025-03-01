// Search Button Functionality
function searchDestination() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase().trim();  // Get and clean up the search term
    const recommendationsContainer = document.getElementById('recommendations');
    recommendationsContainer.innerHTML = '';  // Clear previous results

    let recommendations = [];

    // Check for singular/plural and match keywords
    if (searchValue === 'beach' || searchValue === 'beaches') {
        recommendations = data.beaches;
    } else if (searchValue === 'temple' || searchValue === 'temples') {
        recommendations = data.temples;
    } else if (searchValue === 'country' || searchValue === 'countries') {
        recommendations = data.countries;
    }

    // If there are recommendations, display them
    if (recommendations.length > 0) {
        recommendations.forEach(place => {
            const recommendationElement = document.createElement('div');
            recommendationElement.classList.add('recommendation');
            recommendationElement.innerHTML = `
                <h3>${place.name}</h3>
                <img src="${place.imageUrl}" alt="${place.name}">
                <p>${place.description}</p>
            `;
            recommendationsContainer.appendChild(recommendationElement);
        });
    } else {
        recommendationsContainer.innerHTML = '<p>No results found. Try a different search keyword.</p>';
    }
}
