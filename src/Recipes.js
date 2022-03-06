import React, { useState, useEffect } from 'react';

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
    const { title, meal } = formValues;
    console.log(formValues);

    if (meal === 'All') {
      setDisplayedRecipes(recipes);
      return;
    }

    const filtered = recipes.filter((recipe) => recipe.meal === meal);
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
      {displayedRecipes.map((recipe) => {
        return (
          <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt=" 😋 " />
          </div>
        );
      })}
    </div>
  );
}
