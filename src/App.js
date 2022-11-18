import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import bookData from "./book-data.json"
import BookItem from "./BookItem.js"

function App() {
  const [cartItems, setCartItems] = useState([])

  function addToCart(item){
    setCartItems([...cartItems, item])
  }

  function calculateTotal(){
    let total = 0
    for (let i=0; i < cartItems.length; i++){
      total += cartItems[i].pages
    }
    return total
  }

  return (
    <div className="App">
      <h1 className="head">My Books</h1>

      <div className="book-container">
        {bookData.map((item, index) => (
          <BookItem item={item} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cartItems.map((item, index) => (<p>{item.title}</p>))}
        <h2>Total: {calculateTotal()}</h2>
      </div>
    </div>
  )
}

export default App;
