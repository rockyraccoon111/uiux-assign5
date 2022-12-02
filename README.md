# Development

### Link to Deployed Website
https://rockyraccoon111.github.io/uiux-assign5/

### Goal and Value of the Application
The goal of my application is to allow users to easily browse and add/remove book items. The user can sort by star ratings and filter by book genre/length to find books that are most appealing to them. They can also easily add and remove book items to their cart and see the number of pages they have left to read.

### Usability Principles Considered
The filter and sort options are all set to the left and in the same color green so as to indicate that they serve a similar function (they are where users can customize their search). They are differentated from the cart/page count, as those are blue and centered. I also use the principle of similarity. The filtering/sorting options look the same to each other, and the book options also look the same to each other. 

### Organization of Components
My components for this page are App.js, BookItem.js, and AddRemove.js.

App.js is the general component that runs the app BookItem.js is the component for each book item. AddRemove.js is the component for the button that toggles between add and remove under each book item.

AddRemove.js creates the buttons within each BookItem.js item represented on the Apps.js page.


### How Data is Passed Down Through Components
My components for this page are App.js, BookItem.js, and AddRemove.js.

App.js does not take in any props, but it passes item, addToCart, and removeFromCart to BookItem.js.

BookItem.jss takes in App.js as a prop, and passes item, addToCart, and removeFromCart to AddRemove.js.

AddRemove.js takes in BookItem.js as a prop, from which it receives item, addToCartm and removeFromCart.

As such, AddRemove.js creates the buttons within each BookItem.js item represented on the Apps.js page.

### How the User Triggers State Changes
My components for this page are App.js, BookItem.js, and AddRemove.js.

Within App.js, there are states for the cart items (cartItems), selected genres (typesGenre), selected lengths (typesLength), and the displayed data (filteredData). cartItems is updated when items are added to/removed from the cart. typesGenre and typesLength are updated when a user selects or deselects a filter. filteredData is updated when the user either sorts or filters data.

BookItem.js does not use any states.

AddRemove.js uses one state, arState, that represents whether the button adds or removes. It is updated/toggled each time the button is clicked. 
