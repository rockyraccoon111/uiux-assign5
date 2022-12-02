import { useState } from 'react'
import App from "./App.js"

function AddRemove(props){

    const [arState, setARState] = useState(true)

    function handleClick(props){
        setARState(arState => !arState);
        
        // if (arState){
        //     props.addToCart(props.item)
        // }
        // props.removeFromCart(props.item)
    }

    const changeWords = props => {
        if (arState){
            //props.addToCart(props.item)
            return "Add"
        }
        //props.addToCart(props.item)
        return "Remove"
    }
    //onClick={() => { props.addToCart(props.item) }} disabled={props.cartItems.has(props.item)}


    return (
        <button 
            className="AddRemove"
            onClick={handleClick}
        >
            {changeWords()}

        </button>
    )
}

export default AddRemove;