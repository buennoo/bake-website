export default function RecipeImage({path, alt}){
    return (
        <div class="recipe-image">
            <img src={path} alt={alt} class="rounded"/>
        </div>
    );
}