const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')
const searchResults = document.querySelector('.search-results')
const container = document.querySelector('.container')
const accordionBtns = document.querySelectorAll('.accordion-btn')
const accordions = document.querySelectorAll('.accordion')
const APP_ID = 'b92bed07'
const APP_KEY = `f01fb47383d71cae1ddeaa57bd8b8c15`

// event listeners for click and enter key for searchbar 

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let searchQuery = e.target.value;
        fetchAPI()
    }
})
searchBtn.addEventListener('click', () => {
    let searchQuery = searchInput.value;
    fetchAPI()
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
                    <button class="accordion-btn text-center">See Details<span class="btn-arrow"><i
                    class="fas fa-chevron-right"></i></span></button>
                    <div class="accordion">
                    <p><span class="bold">Dish type: </span>${result.recipe.dishType}</p>
                    <p><span class="bold">Cuisine type: </span>${result.recipe.cuisineType}</p>
                    <p><span class="bold">Est. Prep Time: </span>${result.recipe.totalTime}</p>
                    <p class="search-item-data text-center">Calories: ${result.recipe.calories.toFixed(0)}</p>
                    </div>

                </div>
            </div>
        `
    })
    searchResults.innerHTML = renderedHTML;
}

/*
const tabitem = document.querySelectorAll('.tabitem')
const tabpar = document.querySelectorAll('.tabitem p')

tabitem.forEach(tab => {
    tab.addEventListener('click', () => {
        let child = tab.children
        child[1].classList.toggle('hide')
       console.log(child)
    })
})
*/

const tabContainer = document.querySelector('.tabs-container')
const tabItem = document.querySelectorAll('.tab')
const tabItemContent = document.querySelectorAll('.tab-content')
const tabBtns = document.querySelectorAll('.tab-btns button')









