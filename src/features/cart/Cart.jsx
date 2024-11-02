import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./CartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const userName = useSelector((store) => store.user.userName);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="container-fluid cart">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/menu" style={{ textDecoration: "none", color: "darkblue" }}>
          &larr; Back to menu
        </Link>
        <div className="px-4 d-flex gap-4">
          <Link
            to="/order/new"
            className="orderBtn"
            style={{ fontSize: "18px" }}
          >
            PROCEED
          </Link>
          <button
            className="clearCart"
            style={{
              backgroundColor: "rgb(170, 170, 170)",
              border: "none",
              padding: "5px 10px",
              borderRadius: "15px",
              transition: "0.5s all",
            }}
            onClick={() => dispatch(clearCart())}
          >
            CLEAR CART
          </button>
        </div>
      </div>
      <h2 className="mt-5 px-4 mb-3 cartUserName">Your cart, {userName}</h2>
      <ul style={{ listStyle: "none" }} className="w-100 cartItem">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
