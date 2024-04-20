import '../styles/Recipe.css';

export default function Recipe(){
    return (
        <div class="recipe-box">
            <div class="recipe-title">
                <h1>Vanilla Pound Cake</h1>
            </div>
            <div class="tags">
                <span>Pound Cake</span>
                <span>Easy</span>
                <span>No yeast</span>
                <span>Lactose-free</span>
                <span>Vegetarian</span>
            </div>
            <div class="recipe-info">
                <ul>
                    <li><b>Preparation time:</b> 30 min</li>
                    <li><b>Baking time:</b> 50 min</li>
                    <li><b>Baking temperature:</b> 180 ℃</li>
                    <li><b>Baking mold:</b> 25x25 cm</li>
                    <li><b>Diet:</b> <span class="lactose-free"> lactose-free</span>, vegetarian</li>
                    <li>425kcal per 100g</li>
                </ul>
            </div>
            <div class="recipe-image">
                <img src="..\assets\images\vanillapoundcake.jpg" class="rounded"/>
            </div>
            <div class="ingridients">
                <h3>Ingridients</h3>
                <ul>
                    <li>200g of butter (one stick)</li>
                    <li>180g of xylitol or sugar (3/4 cup)</li>
                    <li>2 teaspoons of vanilla sugar</li>
                    <li>6 eggs size M/L (large)</li>
                    <li>240g of cake flour 450 (about 1.5 cups)</li>
                    <li>1 packet of cream pudding with sugar</li>
                    <li>2 level teaspoons of baking powder</li>
                    <li>100ml of lactose-free milk</li>
                    <li>a pinch of salt</li>
                </ul>
            </div>
            <div class="recipe-steps">
                <h3>Steps</h3>
                <ol>
                    <li>Melt the butter, then let it cool down.</li>
                    <li>Mix dry ingredients together: flour, baking powder, instant pudding.</li>
                    <li>Separate egg yolks from egg whites.</li>
                    <li>Beat egg yolks with xylitol/regular sugar and vanilla sugar along with a pinch of salt (about 4 minutes on low speed in a Thermomix), add milk, pour in the melted butter, and mix for another 10 seconds on the lowest speed until a smooth mixture forms.</li>
                    <li><b>Beat egg whites until stiff,</b> VERY IMPORTANT!</li>
                    <li>Pour the mixture of egg yolks into the bowl with dry ingredients and mix thoroughly.</li>
                    <li><b>Gently</b> fold in the beaten egg whites.</li>
                </ol>
                <p>Bake for 50 minutes at 180 degrees Celsius, top and bottom heat mode in oven.</p>
                <p>After 50 minutes, insert a wooden stick and check if it's ready (it should be slightly moist).
                Open the oven door and leave for 10 minutes.
                <br/>Then let it cool.</p>
            </div>
        </div>
    );
}