
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";



function Order() {
  const order = useLoaderData()
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-5" style={{flexWrap:'wrap'}}>
        <h2>Order #{id} status</h2>

        <div className="gap-3 d-flex">
          {priority && <span className="py-1 px-4" style={{background:'red', borderRadius:'30px', color:'white', textTransform:'uppercase'}}>Priority</span>}
          <span className="py-1 px-4" style={{background:'rgb(146, 219, 0)', borderRadius:'30px', color:'white', textTransform:'uppercase'}}>{status} order</span>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between gap-2 mb-5 py-3 px-5" style={{background:'rgb(214, 214, 214)', borderRadius:'10px', flexWrap:'wrap'}}>
        <p className="m-0" style={{fontWeight:'bold'}}>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="m-0" style={{color:'#303030', fontSize:'14px', letterSpacing:'2px'}}>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className="mb-4 py-3" style={{borderBottom:'1px solid #686868', borderTop:'1px solid #686868', listStyle:'none'}}>
        {cart.map((item) => (
          <OrderItem item={item} key={item.id}/>
        ))}
      </ul>

      <div className="py-3 px-5" style={{background:'rgb(214, 214, 214)', borderRadius:'10px', flexWrap:'wrap'}}>
        <p style={{fontSize:'16px', fontStyle:'italic'}}>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p style={{fontStyle:'italic',fontSize:'16px'}}>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p style={{fontSize:'18px', fontWeight:'bold'}}>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({params}){
  const order = await getOrder(params.orderId)
  console.log(order)
  return order;
}

export default Order;
