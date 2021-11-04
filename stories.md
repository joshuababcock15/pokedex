
* Style changes to the search results page (CSS/HTML):
    * Make the full-width search view lock to three columns
    * Make the cards twice as large, with a dark background
    * Use a third party font from Google Fonts to display Pokemon names
    * Create an animated hover effect for Pokemon cards

* *Add a new component for individual Pokemon *(React)
    * Add a router to the project (React)
    * Explore the endpoint/JSON in a tool of your choice (cURL, Postman, etc)
    * Create a new route to individual Pokemon from the search results page (React)
    * Create a card view at this route where users can view additional Pokestats

* Add a navigation bar to the top of the page (CSS/HTML/React)
    * Move the search component to this navbar
    * Add a link to a new page
    * Install and use a button from the 8-bit UI framework: https://github.com/nostalgic-css/NES.css

* Controlled components* (JS/React):
    * Make the search sort in reverse alphabetical order
        * Create this function as an external utility, import it, and pass it to the search component as a prop
    * Create a component that displays the number of Pokemon displayed by the search
        * Keep this number as internal component state and then display it in the tab title
    * Create a button that will return only Pokemon with names including the subword “chu”
    * Create a button to clear the search input


* Create a "store" that can be used throughout the app to house a favorite Pokemon's data.
    * Create a function to save a single Pokemon as a "favorite" in state.
    * Include a function to get the favorite Pokemon during app load and save to state so the data can persist.