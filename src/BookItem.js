import "./BookItem.css"
import AddRemove from "./AddRemove";

function BookItem(props){
    return (
        <div className="BookItem">
            <img className="book-images" src={props.item.image}/>
            <h3>{props.item.title}</h3>
            <h4>{props.item.author}</h4>
            <p>Genre: {props.item.genre}</p>
            <p>Rating: {props.item.stars}</p>
            <p>Page Count: {props.item.pages}</p>
            <AddRemove item={props.item} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>
        </div>
    )
}

export default BookItem;