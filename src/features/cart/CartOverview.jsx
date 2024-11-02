import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const pizzaQuantity = useSelector((store) => store.cart.cart.reduce((sum, item)=> sum+item.quantity, 0));
  const pizzaTotalPrice = useSelector((store) => store.cart.cart.reduce((sum, item)=> sum+item.totalPrice, 0));
  if(pizzaQuantity <= 0) return null;
  return (
    <div className="d-flex justify-content-between bg-dark align-items-center py-2 px-5">
      <p className="text-light " style={{ marginTop: "1rem" }}>
        <span style={{ marginRight: "25px", fontSize: "18px" }}>{pizzaQuantity} pizzas</span>
        <span style={{ fontSize: "18px" }}>{formatCurrency(pizzaTotalPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="text-decoration-none"
        style={{ fontSize: "20px", color: "white" }}
      >
        OPEN CART &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
