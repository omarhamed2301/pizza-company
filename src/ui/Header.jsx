import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

export default function Header() {
  const userName = useSelector(store => store.user.userName);
  return (
    <header className=" d-flex py-3 px-5 justify-content-between align-items-center">
      <Link to="/" className="text-decoration-none text-dark ">REACT&REDUX PIZZA COMP.</Link>
      <div className="d-flex align-items-center">
        <p className="m-auto" style={{backgroundColor:"yellowgreen", padding:"5px 10px", borderRadius:'30px'}}>Welcome, {userName? `${userName}`: `Guest`}</p>
        <SearchOrder />
      </div>
    </header>
  );
}
