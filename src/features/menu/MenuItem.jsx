/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/CartSlice";
import DeleteButton from "../../ui/DeleteButton";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const dispatch = useDispatch();
  const newItem = {
    pizzaId: pizza.id,
    name: pizza.name,
    quantity: 1,
    unitPrice: pizza.unitPrice,
    totalPrice: pizza.unitPrice * 1,
  };
  const handleAddPizza = () => {
    dispatch(addItem(newItem));
  };
  return (
    <div className="MenuItem col-lg-3 col-md-6 col-sm-12">
      <li
        style={{
          listStyle: "none",
          marginBottom: "20px",
          borderRadius: "20px",
          height: "100%",
        }}
      >
        <div>
          <img
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "20px 20px 0 0",
            }}
            src={imageUrl}
            alt={name}
          />
        </div>
        <div
          className="py-3 px-2 border d-flex"
          style={{
            borderRadius: "0 0 20px 20px",
            height: "240px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p>{name}</p>
          <p>{ingredients.join(", ")}</p>

          <div>
            {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          </div>

          {!isInCart && (
            <button
              onClick={handleAddPizza}
              className={`${soldOut ? "soldoutBtn" : "orderBtn"}`}
              style={{ fontSize: "14px", position: "relative" }}
              disabled={soldOut}
            >
              Buy Now
            </button>
          )}
          {isInCart && <DeleteButton pizzaId={pizza.id} />}
        </div>
      </li>
    </div>
  );
}

export default MenuItem;
