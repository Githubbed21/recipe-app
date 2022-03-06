import React, { useState, useEffect } from 'react';
import './Recipes.css';

const initialFormValues = {
  title: '',
  meal: '',
};

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    fetch('http://localhost:3001/Recipes')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setDisplayedRecipes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const change = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const filter = (e) => {
    e.preventDefault();
    let { title, meal } = formValues;
    title = title.toLowerCase();

    const filtered = recipes.filter((recipe) => {
      if (title === '') {
        return recipe.meal === meal;
      } else {
        let recipeTitle = recipe.title.toLowerCase();
        let test = meal;
        if (meal === 'All') {
          test = recipe.meal;
        }
        return recipeTitle.includes(title) && recipe.meal === test;
      }
    });

    setDisplayedRecipes(filtered);
  };

  if (!recipes) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="Recipes">
      <h2>recipes</h2>
      <form onSubmit={filter}>
        <input
          type="text"
          name="title"
          placeholder="Search Title"
          onChange={change}
          value={formValues.title}
        />
        <label htmlFor="meal">Choose a Meal!</label>
        <select name="meal" id="meal" onChange={change}>
          <option value="All">All meals</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
        <input type="submit" value="Search" />
      </form>
      <div className="results-container">
        {displayedRecipes.length === 0 ? (
          <div>
            <h3>No results found</h3>
          </div>
        ) : (
          displayedRecipes.map((recipe) => {
            return (
              <div key={recipe.id} className="recipe">
                <div class="recipe-card">
                  <h3>{recipe.title}</h3>
                  <img src={recipe.image} alt="😋" />
                </div>
                <ol className="recipe-directions">
                  {recipe.directions.map((step) => (
                    <li className="recipe-step">{step}</li>
                  ))}
                </ol>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
