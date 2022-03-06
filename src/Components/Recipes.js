import React, { useState, useEffect } from 'react';
import '../Styles/Recipes.css';
import RecipeCard from './RecipeCard';

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
      if (title === '' && meal !== 'All') {
        return recipe.meal === meal;
      } else {
        let recipeTitle = recipe.title.toLowerCase();
        if (meal === 'All') {
          return recipeTitle.includes(title);
        }
        return recipeTitle.includes(title) && recipe.meal === meal;
      }
    });

    setDisplayedRecipes(filtered);
  };

  if (!recipes) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="Recipes">
      <h2>Recipes</h2>
      <form onSubmit={filter} className="recipe-search">
        <input
          type="text"
          name="title"
          placeholder="Search Title"
          onChange={change}
          className="title-input"
          value={formValues.title}
        />
        <label htmlFor="meal">Choose a Meal!</label>
        <select name="meal" id="meal" onChange={change} className="meal-input">
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
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })
        )}
      </div>
    </div>
  );
}
