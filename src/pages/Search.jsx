import RecipeTile from "../components/RecipeTile";
import data from '../data/recipes.json'
import '../styles/Search.css';

export default function Search(){
    const recipe = data.recipes;
    console.log(recipe);

    if(!recipe) {
        // here redirect to not_found
        return <div> Recipe not found </div>
    }

    return (
        <div className="search-main">
            <h2>
                Search
            </h2>
            <section className="tiles-container">
                {recipe.map((recipe, index) => (
                    <>
                    <RecipeTile key={index} getRecipe={recipe}/>
                    {/* for tests purpose */}
                    <RecipeTile key={index} getRecipe={recipe}/>
                    <RecipeTile key={index} getRecipe={recipe}/>
                    <RecipeTile key={index} getRecipe={recipe}/>
                    </>
                ))}
            </section>
        </div>  
    );
}