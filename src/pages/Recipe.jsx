import RecipeTitle from '../components/recipe/RecipeTitle';
import RecipeTags from '../components/recipe/RecipeTags';
import RecipeInfo from '../components/recipe/RecipeInfo';
import RecipeImage from '../components/recipe/RecipeImage';
import RecipeIngridients from '../components/recipe/RecipeIngridients';
import RecipeSteps from '../components/recipe/RecipeSteps';
import '../styles/Recipe.css';

export default function Recipe({ idRecipe }){
    return (
        <div class="recipe-main">
            <RecipeTitle/>
            <RecipeTags recipeID={1}/>
            <RecipeInfo/>
            <RecipeImage/>
            <RecipeIngridients/>
            <RecipeSteps/>
        </div>
    );
}