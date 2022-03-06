import React, { useState } from 'react';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="recipe" onClick={toggle}>
        <img className="recipe-image" src={recipe.image} alt="😋" />
        <div class="recipe-info">
          <h3 className="recipe-title">{recipe.title}</h3>
          {isOpen && (
            <ol className="recipe-directions">
              {recipe.directions.map((step) => (
                <li className="recipe-step">{step}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}
