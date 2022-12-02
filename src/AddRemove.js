import { useState } from 'react'

function AddRemove(props){

    const [arState, setARState] = useState(true)

    function handleClick(){
        if (arState){
            props.addToCart(props.item)
        } else {
            props.removeFromCart(props.item)
        }
        
        setARState(arState => !arState);
    }

    const changeWords = props => {
        if (arState){
            return "Add"
        }
        return "Remove"
    }

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