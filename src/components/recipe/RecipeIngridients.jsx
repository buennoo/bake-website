export default function RecipeIngridients({ ingridients }){
    return (
        <div class="ingridients">
            <h3>Ingridients</h3>
            <ul>
                {ingridients.map((ingridient, index) => (
                    <li key={index}>{ingridient}</li>
                ))}
            </ul>
        </div>
    );
}