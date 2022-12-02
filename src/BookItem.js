import "./BookItem.css"
import AddRemove from "./AddRemove";

function BookItem(props){
    return (
        <div className="BookItem">
            <img src={props.item.image}/>
            <h3>{props.item.title}</h3>
            <h4>{props.item.author}</h4>
            <p>Genre: {props.item.genre}</p>
            <p>Rating: {props.item.stars}</p>
            <p>Page Count: {props.item.pages}</p>
            <AddRemove/>
        </div>
    )
}
// <button onClick={() => { props.addToCart(props.item) }} disabled={props.cartItems.has(props.item)}>Add to cart</button>

export default BookItem;