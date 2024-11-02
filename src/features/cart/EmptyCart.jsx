import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link className='px-5' style={{textDecoration:'none', color:'blue'}} to="/menu">&larr; Back to menu</Link>

      <p className='text-center mt-5 pt-5' style={{fontSize:'25px', fontWeight:'bolder'}}>Your cart is empty. Go to menu and start adding some pizzas</p>
    </div>
  );
}

export default EmptyCart;
