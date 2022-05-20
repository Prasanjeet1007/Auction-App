import React from 'react'
import { useDispatch } from 'react-redux'
import { switchAdded } from '../Reducers/carReducer'
import { editCart } from '../Reducers/cartReducer'
import './CartItem.css'
const CartItem = (props) => {
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <div className='card-container'>
        <div className='car-div'>
          <img className='car-image' src={props.item.link} alt='' />
          <h3>{props.item.name}</h3>
          <p>{props.item.description}</p>
        </div>
        <div className='bottom-div'>
          <p>{props.item.price}</p>

          {props.item.added ? (
            <button
              className='remBtn'
              onClick={() => {
                dispatch(switchAdded(props.item))
                dispatch(editCart('RemoveItem', props.item))
              }}
            >
              Remove
            </button>
          ) : (
            <button
              className='addBtn'
              onClick={() => {
                dispatch(switchAdded(props.item))
                dispatch(editCart('AddItem', props.item))
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default CartItem
