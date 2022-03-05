import React, { useState, useEffect } from 'react';

const initialFormValues = {
  title: '',
  meal: '',
};

export default function Recipes() {
  const [recipes, setRecipes] = useState();
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    fetch('http://localhost:3001/Recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, []);

  const change = (e) => {
    console.log(e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  if (!recipes) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="Recipes">
      <h2>recipes</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Search Title"
          onChange={change}
          value={formValues.title}
        />
        <label>
          Choose a Meal!
          <input list="recipes" name="Meals" />
        </label>
        <datalist>
          <option value="Breakfast" />
          <option value="Lunch" />
          <option value="Dinner" />
        </datalist>
      </form>
      {recipes.map((recipe) => {
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
