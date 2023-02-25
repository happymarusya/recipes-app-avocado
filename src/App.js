import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "6d4b15f6";
  const MY_KEY = "bb791abfced19debc31854c463d41043";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    const getRecipes = async() => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    console.log(response);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits); 
  }
  getRecipes()
}, [wordSubmitted])
  
  const myRecipeSearch = (e) => {
      console.log(e.target.value) 
      setMySearch(e.target.value);
  }

  const finalSearch  = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  } 

  return (
    <div className='App'>
        <div className='container'>
          <video autoPlay muted loop>
            <source src={video} type="video/mp4"/>
          </video>
          <h1>Find a Recipe</h1>
        </div>
        <div className='container input'>
          <form onSubmit={finalSearch}>
            <input className='search' placeholder='Search...'
                onChange={myRecipeSearch} value={mySearch}>
            </input>
          </form>

            <button>
              <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon" className='icons'/>
            </button>
          </div>

          <div className='container'> 
          {myRecipes.map((element, id) => (
              <MyRecipesComponent key={id} 
              label={element.recipe.label} 
              image={element.recipe.image} 
              calories={element.recipe.calories}
              ingredients={element.recipe.ingredientLines}/>
          ))}
        </div>
    </div>
  );
}

export default App;
