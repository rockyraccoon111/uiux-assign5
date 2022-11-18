import "./BookItem.css"

function BookItem(props){
    return (
        <div className="BookItem">
            <h3>{props.item.title}</h3>
            <h4>{props.item.author}</h4>
            <p>Genre: {props.item.genre}</p>
            <p>Rating: {props.item.stars}</p>
            <p>Page Count: {props.item.pages}</p>
            <button onClick={() => { props.addToCart(props.item) }}>Add to cart</button>
        </div>
    )
}

export default BookItem;