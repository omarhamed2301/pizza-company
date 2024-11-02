/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import DeleteButton from "../../ui/DeleteButton";
import { formatCurrency } from "../../utils/helpers";
import UpdateCartQuantity from "./UpdateCartQuantity";
import { getCurrentQuantityById } from "./CartSlice";


function CartItem({ item }) {
  const { pizzaId,  name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
  
  return (
    <li className="mb-3 d-flex justify-content-between align-items-center w-100 px-5 cartItems" style={{borderBottom:'1px solid #333'}}>
      <p className="w-25">
        {quantity}&times; {name}
      </p>
      <div className="d-flex w-75 justify-content-end gap-4 align-items-center">
        <p className="mt-3">{formatCurrency(totalPrice)}</p>
        <UpdateCartQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteButton pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
