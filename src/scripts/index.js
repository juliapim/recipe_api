// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const key= '3a8032dee10693aec68a02179fad4fa9';
const appId = '1f72d685';
const baseUrl = 'https://api.edamam.com/search';
const searchInput = document.querySelector('#search');

const result = document.querySelector('.result');
const button = document.querySelector('button')



function submit(e){
    e.preventDefault();
    const searchValue = searchInput.value;
    fetch(`${baseUrl}?q=${searchValue}&app_id=${appId}&app_key=${key}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        for(let i=0; i<data.hits.length; i++){
            result.innerHTML += 
      ` 
      <div class="recipe">
      <img src="${data.hits[i].recipe.image}" alt="image here">
      <h2>${data.hits[i].recipe.label}</h2>
      <p>Diet: ${data.hits[i].recipe.dietLabels}</p>
      <p>Prepare: ${data.hits[i].recipe.ingredientLines} min</p>
      <a href="${data.hits[i].recipe.shareAs}" target="_blank">To Recipe</a>
      </div>
      `;
        }
    })
}


button.addEventListener('click', submit)


  
  
