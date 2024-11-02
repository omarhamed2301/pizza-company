/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import EmptyCart from '../cart/EmptyCart';
import store from '../../../store';
import { clearCart } from "../cart/CartSlice";

function CreateOrder() {
  const cart = useSelector(store => store.cart.cart);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting";
  if (cart.length === 0) return <EmptyCart/>
  return (
    <div className=" m-auto py-5 px-5 text-center">
      <h2 className="text-center mb-5">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label className="mb-1">First Name</label>
          <div>
            <input className="newOrderInput" type="text" name="customer" required />
          </div>
        </div>

        <div>
          <label className="mb-1 mt-1">Phone number</label>
          <div>
            <input className="newOrderInput" type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label className="mb-1 mt-1">Address</label>
          <div>
            <input className="newOrderInput" type="text" name="address" required />
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-2 mb-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            style={{width:'15px'}}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <button className="orderBtn" disabled={isSubmitting}>{isSubmitting ? 'Placing Order...' : 'Order now'}</button>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const newOrder = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log(newOrder);
  const newOrderCreation = await createOrder(newOrder);
  store.dispatch(clearCart())
  return redirect(`/order/${newOrderCreation.id}`);
}
export default CreateOrder;
