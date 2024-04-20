export default function RecipeInfo({ info }){
    return (
        <div class="recipe-info">
            <ul>
                <li><b>Preparation time: </b>{info.preparationTime}</li>
                <li><b>Baking time: </b>{info.bakingTime}</li>
                <li><b>Baking temperature: </b>{info.bakingTemperature}</li>
                <li><b>Baking mold: </b>{info.bakingMold}</li>
                <li><b>Diet:</b>{/* add here special if statement */} <span class="lactose-free"> lactose-free</span>, vegetarian</li>
                <li>{info.kcal}</li>
            </ul>
        </div>
    );
}