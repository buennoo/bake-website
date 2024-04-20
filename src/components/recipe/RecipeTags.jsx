import React from 'react';
import data from '../../data/recipes.json'

export default function RecipeTags({ recipeID }){
    const recipe = data.recipes.find(recipe => recipe.id === recipeID);

    if(!recipe) {
        return <div> Recipe not found </div>
    }

    return (
        <div class="tags">
            {recipe.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
            ))}
        </div>
    );
}