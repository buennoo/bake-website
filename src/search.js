/*
this is temporary solution since there are not many sections
at some point there will be a necessity to make a separate function
to be called after clicking search button
*/

function redirect(event) {
    event.preventDefault();
    var searchTerm = document.getElementById('searchBar').value;
    window.location.href = 'search.html?search=' + encodeURIComponent(searchTerm);
}

document.addEventListener('DOMContentLoaded', function() {
    var searchParams = new URLSearchParams(window.location.search);
    var searchTerm = searchParams.get('search');

    var searchBar = document.getElementById('searchBar');
    searchBar.value = searchTerm;

    function ifIncludes(tab1, tab2){
        return tab1.some(element => tab2.includes(element));
    }

    function ifBlank(text) {
        if(text.trim() === '') {
            window.location.href = "recipes.html";
        }
    }

    function searchFor(inputText) {
        var recipes = document.querySelectorAll('.recipe');

        function Recipe(title, description=null){
            this.title = title;
            this.description = description;
        }

        // map array
        var toHideRecipes = new Map();

        for (const recipe of recipes) {
            var getTitle = recipe.querySelector('.recipe-title');
            var title = getTitle.textContent;
            var titleArray = title.trim().toLowerCase().split(' ');

            if(!ifIncludes(titleArray, inputText)){
                var getDesc = recipe.querySelector('.recipe-description');
                var desc = getDesc.textContent;

                toHideRecipes.set(title, desc);
            }
        }

        for (var [key, hideDesc] of toHideRecipes.entries()){
            var descArray = hideDesc.trim().toLowerCase().split(' ');
            if(ifIncludes(descArray, inputText)){
                toHideRecipes.delete(key);
            }
        }

        recipes.forEach(recipe => {
            var getTitle = recipe.querySelector('.recipe-title');
            var title = getTitle.textContent;

            if (toHideRecipes.has(title)) {
                recipe.style.display = 'none';
            } else {
                recipe.style.display = '';
            }
        });

        //console.log(toHideRecipes);
        //console.log('-');
    }
    ifBlank(searchTerm);
    searchFor(searchTerm);

    searchBar.addEventListener('input', function(event) {
        var inputText = event.target.value.trim().toLowerCase().split(' ');
        searchFor(inputText);
    })
});