/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/CartSlice";

export default function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();
  function deletePizzaItem() {
    dispatch(removeItem(pizzaId));
  }
  return (
    <button className="orderBtn deleteBtn" onClick={deletePizzaItem}>
      Delete
    </button>
  );
}
