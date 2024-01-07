const imageContainer = document.querySelector('.images-container')
const added = document.querySelector('.save-confirmation')
const loader = document.querySelector('.loader')
const navbar = document.querySelector('.nav')

const count = 10;
const apiKey = 'akyqKVPrd3SuygSnsjExaGqnaF0HcnWJCe5fIJLB'
const api = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`

let resultsArray =[]
let favorites = {}


function showContent(){
  window.scrollTo({top:0 , behavior:"smooth"})
  loader.classList.add('hidden');

}

function createDOMNodes(page){
  const currentArray = page=== "result" ? resultsArray :Object.values(favorites);
  console.log(page,currentArray)
 currentArray.forEach((result)=>{
    // First part
    // Card
    const card = document.createElement('div');
    card.classList.add('card')
    // Link
    const link = document.createElement('a');
    link.href = result.hdurl;
    link.target = '_blank';
    link.title = "View Full Image";
    // Image
    const image = document.createElement('img');
    image.alt = "Nasa Picture Of The Day";
    image.loading = 'lazy';
    image.src = result.url;
    image.classList.add('card-img-top');
    // Second Part

    // Card
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    // Card Title
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = result.title;
    // Save text
    const saveText = document.createElement('p');
    saveText.classList.add('clickable');
    if(page=== "result"){
      saveText.textContent = "Add To Favorite";
      saveText.setAttribute('onclick',`saveFavorite('${result.url}')`)
    }
    else {
      saveText.textContent = "Remove From Favorite";
      saveText.setAttribute('onclick',`removeFavorite('${result.url}')`)
    }
    // Card Text
    const cardText = document.createElement('p');
    cardText.textContent = result.explanation;
    // Footer
    const footer = document.createElement('small');
    footer.classList.add('text-small')
    // Date
    const date = document.createElement('strong');
    date.textContent = result.date;
    // CopyRight
    const copyRight =document.createElement('p');
    copyRight.textContent = result.copyright;
    // Append
    footer.append(date,copyRight);
    cardBody.append(title,saveText,cardText,footer);
    link.appendChild(image);
    card.append(link,cardBody);
    imageContainer.appendChild(card)
  })
}

function updateDOM(page){
  if(localStorage.getItem('nasaFavorites')) {
    favorites = JSON.parse(localStorage.getItem('nasaFavorites'))
    console.log("Local Storage Fav",favorites)
  }
  imageContainer.textContent = ''
  createDOMNodes(page);
  showContent()
}
  
  


// Getting Data From Nasa Api
async function data(){
  loader.classList.remove('hidden');
    try {
        const result =await fetch(api);
        resultsArray = await result.json();
        updateDOM("result");
    }
    catch (error){
        // console.log(error)
    }
   
}

// Onload
data()


// Save Favorite

function saveFavorite(itemurl){
  resultsArray.forEach((item)=>{
    if(item.url.includes(itemurl) && !favorites[itemurl]){
      favorites[itemurl] = item;
      // Show Added Message
      added.hidden  =false
      setTimeout(()=>{
        added.hidden = true
      },2000)
      // Save in Local storage
      localStorage.setItem('nasaFavorites',JSON.stringify(favorites))
    }
  })
}

// Remove from favorite

function removeFavorite(itemUrl){
  if(favorites[itemUrl]){
    delete favorites[itemUrl];
    // Save in Local storage
    localStorage.setItem('nasaFavorites',JSON.stringify(favorites));
    updateDOM('favorites')
  }
}