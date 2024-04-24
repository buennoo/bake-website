import RecipeTile from "../components/RecipeTile";

export default function RecipeTiles({getRecipe, tilesOnPage, currentPage}){

    const startIdx = (currentPage-1) * tilesOnPage;
    const endIdx = startIdx + tilesOnPage;
    const pageRecipes = getRecipe.slice(startIdx, endIdx);
    
    return (
        <section className="tiles-container">
            {pageRecipes.map((recipe, index) => (
                <RecipeTile key={index} getRecipe={recipe}/>
            ))}
        </section>
    );
}