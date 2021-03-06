import React, { useState } from 'react';
import '../Styles/PostForm.css';
import { v4 as uuidv4 } from 'uuid';

const initialFormValues = {
  title: '',
  meal: '',
  directions: '',
  image: '',
  originalURL: '',
};

export const PostForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addRecipe = (e) => {
    e.preventDefault();

    formValues.id = uuidv4();
    formValues.directions = formValues.directions.split('\n');

    fetch('http://localhost:3001/Recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });

    setFormValues(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={addRecipe} className="Recipe-add">
        <input
          type="text"
          name="title"
          placeholder="Name of Title"
          onChange={change}
          className="title-input"
          value={formValues.title}
        />
        <select name="meal" id="meal" onChange={change} className="meal-input">
          <option value="">Select Meal</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
        <textarea
          type="text"
          name="directions"
          placeholder="Directions"
          onChange={change}
          className="directions-input"
          value={formValues.directions}
        />
        <input
          type="text"
          name="image"
          placeholder="Add Image"
          onChange={change}
          className="image-input"
          value={formValues.image}
        />
        <input
          type="text"
          name="originalURL"
          placeholder="Link to Recipe"
          onChange={change}
          className="originalURL-input"
          value={formValues.originalURL}
        />
        <input type="submit" value="Submit" />
        <img
          src="https://foodtank.com/wp-content/uploads/2022/02/Food-Tank-Food-and-Food-System-Documentaries-1.jpg"
          alt="????"
        />
      </form>
    </div>
  );
};
