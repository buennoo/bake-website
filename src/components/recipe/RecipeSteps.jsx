export default function RecipeSteps({ steps, bakingInfo, note }){
    return (
        <div class="recipe-steps">
            <h3>Steps</h3>
            <ol>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                    // <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
                ))}
            </ol>
            <p>
                {bakingInfo}
            </p>
            <p>
                {note}
            </p>
        </div>
    );
}