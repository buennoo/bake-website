import '../styles/RecipeTile.css';

export default function RecipeTile({ getRecipe }){
    return (
        <div className="tile">
            <img src={getRecipe.imagePath} alt={getRecipe.image} class="rounded"/>
            <h3>
                {getRecipe.title}
            </h3>
        </div>
    );
}