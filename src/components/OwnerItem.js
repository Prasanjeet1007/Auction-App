import React from 'react'
const OwnerItem = ({ item }) => {
  const addCar = (item) => {
    console.log(item)
  }
  return (
    <div className='ownerItem'>
      <div className='ownerItem__name'>
        <label htmlFor='name'>Car Name</label>
        <input
          type='text'
          name='name'
          value={item.name}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className='ownerItem__description'>
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          name='description'
          id=''
          value={item.description}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className='ownerItem__price'>
        <label htmlFor='price'>Price</label>
        <input
          type='text'
          name='price'
          id=''
          value={item.price}
          onChange={(e) => e.target.value}
        />
      </div>
      <button classNmae='btn btn-sm btn-success' id='add' onClick={addCar}>
        Add Car
      </button>
    </div>
  )
}
export default OwnerItem
