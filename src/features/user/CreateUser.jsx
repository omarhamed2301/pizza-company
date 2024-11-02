import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }
  const userName = useSelector((store) => store.user.userName);
  return (
    <form onSubmit={handleSubmit}>
      {userName === "" && (
        <>
          <p>👋 Welcome! Please start by telling us your name:</p>
          <input
            className="searchOrderInput"
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </>
      )}

      {userName !== "" && (
        <div>
          <Link to='/menu' className="orderBtn mt-5 py-3 px-5">Start ordering</Link>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
