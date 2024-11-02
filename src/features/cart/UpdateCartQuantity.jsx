/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity } from "./CartSlice"

export default function UpdateCartQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch()
  return (
    <div className="d-flex align-items-center gap-2">
        <button className="orderBtn orderBtn2" onClick={()=> dispatch(decreaseQuantity(pizzaId))}>-</button>
        <span>{currentQuantity}</span>
        <button className="orderBtn orderBtn2" onClick={()=> dispatch(increaseQuantity(pizzaId))}>+</button>
    </div>
  )
}
