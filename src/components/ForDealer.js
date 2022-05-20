import React from "react";
import CarItem from "./CarItem";
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCar} from '../Reducers/carReducer'
import './CartItem.css'
function ForDealer() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCar())
  }, [dispatch])

  const {car}= useSelector(store=>store);
  return (
    <React.Fragment>
      <div className="carList">
       {car.map((item)=>{
          return <CarItem item={item} key={item.id}/>
       })}
      </div>
      </React.Fragment>
    
  );
}

export default ForDealer;
