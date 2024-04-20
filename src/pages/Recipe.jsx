import React from 'react';
import data from '../data/recipes.json'
import RecipeTitle from '../components/recipe/RecipeTitle';
import RecipeTags from '../components/recipe/RecipeTags';
import RecipeInfo from '../components/recipe/RecipeInfo';
import RecipeImage from '../components/recipe/RecipeImage';
import RecipeIngridients from '../components/recipe/RecipeIngridients';
import RecipeSteps from '../components/recipe/RecipeSteps';
import '../styles/Recipe.css';

export default function Recipe({ recipeID }){
    //temp
    recipeID = 1
    const recipe = data.recipes.find(recipe => recipe.id === recipeID);

    if(!recipe) {
        return <div> Recipe not found </div>
    }

    return (
        <div class="recipe-main">
            <RecipeTitle title={recipe.title}/>
            <RecipeTags tags={recipe.tags}/>
            <RecipeInfo/>
            <RecipeImage/>
            <RecipeIngridients/>
            <RecipeSteps/>
        </div>
    );
}