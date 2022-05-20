import React from 'react'
import OwnerItem from './OwnerItem'

const OwnerList = (props) => {
  return (
    <div className='ownerList'>
      <h3>Owner Listing </h3>
      <div className='cart'>{console.log(props.car)}</div>
    </div>
  )
}
