import './App.css';
import { useState } from "react";
import bookData from "./book-data.json"
import BookItem from "./BookItem.js"
import { useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState(new Set())

  function addToCart(item){
    const cartCpy = new Set(cartItems);
    cartCpy.add(item);
    setCartItems(cartCpy);
  }

  function calculateTotal(){
    let total = 0
    for (let i=0; i < Array.from(cartItems).length; i++){
      total += Array.from(cartItems)[i].pages
    }
    return total
  }

  const removeFromCart = index => {
    const cartCpyArray = [...Array.from(cartItems)];
    cartCpyArray.splice(index, 1)

    setCartItems(new Set(cartCpyArray))
  }
  
  //-----Genre filter-----

  const [typesGenre, setTypesGenre] = useState(new Set());

  function selectFilterTypeGenre(item, event=true) {
    const typesGenreCpy = new Set(typesGenre);
    typesGenreCpy.add(item);

    if (event.target.checked == false){
      typesGenreCpy.delete(item);
    }

    setTypesGenre(typesGenreCpy);
  };  

  const matchesFilterTypeGenre = item => {
    if(typesGenre.size === 0) {
      return true
    }
    
    return typesGenre.has(item.genre)
  }

  //-----Length filter-----
  const [typesLength, setTypesLength] = useState(new Set());

  function selectFilterTypeLength(item, event=true) {
    const typesLengthCpy = new Set(typesLength);
    typesLengthCpy.add(item);

    if (event.target.checked == false){
      typesLengthCpy.delete(item);
    }

    setTypesLength(typesLengthCpy);
  };  

  const matchesFilterTypeLength = item => {
    if(typesLength.size === 0) {
      return true
    }
    
    let itemLength = null;

    if (item.pages < 200){
      itemLength = "short"
    } else if (item.pages < 400){
      itemLength = "med"
    } else{
      itemLength = "long"
    }

    return typesLength.has(itemLength)
  }

  //-----Rating sort-----

  const [filteredData, setData] = useState(bookData.filter(matchesFilterTypeGenre).filter(matchesFilterTypeLength));

  function sortCheck(item, event=true) {
    if (event.target.checked){
      setData([...filteredData].sort((a, b) => b.stars - a.stars))
    } else {
      setData(bookData.filter(matchesFilterTypeGenre).filter(matchesFilterTypeLength))
    }
  };

  useEffect(() => {
    setData(bookData.filter(matchesFilterTypeGenre).filter(matchesFilterTypeLength))
  }, [typesGenre, typesLength]);

  //----------
  return (
    <div className="App">
      <h1 className="head">Jeff's Books</h1>

      <h2 className="choice-head">Filter by genre</h2>
      <div className="genre-filter">
        <label className='filter'>
          Literary fiction:
          <input
            name="lit-fi"
            type="checkbox"
            onChange={(event) => selectFilterTypeGenre("Literary fiction", event) } />
        </label>
        <label className='filter'>
          Science fiction:
          <input
            name="sci-fi"
            type="checkbox"
            onChange={(event) => selectFilterTypeGenre("Science fiction", event) } />
        </label>
        <label className='filter'>
          Memoirs and biographies:
          <input
            name="mem-bi"
            type="checkbox"
            onChange={(event) => selectFilterTypeGenre("Memoirs and biographies", event) } />
        </label>
        <label className='filter'>
          Poetry:
          <input
            name="poe"
            type="checkbox"
            onChange={(event) => selectFilterTypeGenre("Poetry", event) } />
        </label>
      </div>

      <h2 className="choice-head">Filter by length</h2>
      <div className="length-filter">
        <label className='filter'>
          Short, 0-200 pages:
          <input
            name="s"
            type="checkbox"
            onChange={(event) => selectFilterTypeLength("short", event) } />
        </label>
        <label className='filter'>
          Medium, 201-400 pages:
          <input
            name="m"
            type="checkbox"
            onChange={(event) => selectFilterTypeLength("med", event) } />
        </label>
        <label className='filter'>
          Long, 401+ pages:
          <input
            name="l"
            type="checkbox"
            onChange={(event) => selectFilterTypeLength("long", event) } />
        </label>
      </div>

      <h2 className="choice-head">Sort by star rating</h2>
      <div className="length-filter">
        <label className='filter'>
          Star rating sort:
          <input
            name="rating-sort"
            type="checkbox"
            onChange={(event) => sortCheck("sortCommand", event) } />
        </label>
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {Array.from(cartItems).map((item, index) => (<p>{item.title}</p>))
        }
        <h2>You have {calculateTotal()} pages left to read!</h2>
      </div>

      <div className="book-container">
        {filteredData.map(
          (item, index) => (<BookItem item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>)
        )}
      </div>

    </div>
  )
}

export default App;
