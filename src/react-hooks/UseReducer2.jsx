import React from 'react'
import { useReducer } from 'react'

const itemsInCart = [
    {
        id: 1,
        name: "kala chasma",
        price: 1000
        },
        {
        id: 2,
        name: "rumali roti",
        price: 500
        },
        {
        id: 3,
        name: "jalebi",
        price: 50
        },
        {
        id: 4,
        name: "joota",
        price: 10000
        }
        
]
const UseReducer2 = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case "ADD_TO_CART":
            return {...state, totalItems: state.totalItems + 1, totalPrice: state.totalPrice + action.payload};
            case "REMOVE_FROM_CART":
            return {...state, totalItems:state.totalItems - 1, totalPrice: state.totalPrice - action.payload};
            default:
                return {...state};
        }
    },
    { totalItems:0, totalPrice:0}
)
  return (
    <div>
      <h2>Items in Cart: {state.totalItems}</h2>
      <h2>Total Price: {state.totalPrice}</h2>
      <hr />
      {
        itemsInCart.map(({name, price}) => (
            <div>
                <h3>Product: {name} || Price: {price}</h3>
                <button onClick={() => dispatch({type:"ADD_TO_CART", payload:price})}>Add to Cart</button>
                <button onClick={() => dispatch({type:"REMOVE_FROM_CART", payload:price})}>Remove from Cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default UseReducer2
