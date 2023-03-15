const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')
const searchResults = document.querySelector('.search-results')
const container = document.querySelector('.container')
const accordionBtns = document.querySelectorAll('.accordion-btn')
const accordions = document.querySelectorAll('.accordion')
const resetBtn = document.querySelector('.clear-search')
const fixedImage = document.querySelector('.fixed-img')
const APP_ID = 'b92bed07'
const APP_KEY = `f01fb47383d71cae1ddeaa57bd8b8c15`

// event listeners for click and enter key for searchbar 

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchResults.classList.remove('hide')
        searchResults.classList.add('show')
        fetchAPI()
    }
})
searchBtn.addEventListener('click', () => {
    searchResults.classList.remove('hide')
    searchResults.classList.add('show')
    fetchAPI()
})
resetBtn.addEventListener('click', () => {
    searchResults.classList.remove('show')
    searchResults.classList.add('hide')
    fixedImage.classList.remove('increase-opacity')
})



async function fetchAPI() {

    const baseURL = `https://api.edamam.com/api/recipes/v2?type=any&q=${searchInput.value}&app_id=${APP_ID}&app_key=${APP_KEY}
`;
    const response = await fetch(baseURL);
    const data = await response.json();
    renderHTML(data.hits);
    console.log(data)
}

function renderHTML(results) {
    let renderedHTML = '';
    results.map(result => {
        renderedHTML +=
            `
        <div class="search-item">
                <img src="${result.recipe.image}" alt="food">
                <div class="search-item-details">
                    <h2 class="text-center">${result.recipe.label}</h2>
                    <a href="${result.recipe.url}" class="recipe-btn" target="_blank">Get Recipe<span class="btn-arrow"><i
                                class="fas fa-chevron-right"></i></span></a>
                </div>
            </div>
        `
    })
    searchResults.innerHTML = renderedHTML;
    fixedImage.classList.add('increase-opacity')
}












