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
        // here redirect to not_found
        return <div> Recipe not found </div>
    }

    return (
        <div class="recipe-main">
            <RecipeTitle title={recipe.title}/>
            <RecipeTags tags={recipe.tags}/>
            <RecipeInfo info={recipe.info}/>
            <RecipeImage path={recipe.imagePath} alt={recipe.image}/>
            <RecipeIngridients ingridients={recipe.ingridients}/>
            <RecipeSteps steps={recipe.steps} bakingInfo={recipe.bakingInfo} note={recipe.note}/>
        </div>
    );
}