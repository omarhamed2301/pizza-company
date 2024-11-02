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
  if (userName !== "")
    return (
      <div>
        <Link to="/menu" className="orderBtn mt-5 py-3 px-4">
          Start ordering
        </Link>
      </div>
    );
  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>
      <input
        className="searchOrderInput"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {username && (
        <div>
          <button className="orderBtn orderBtn3 mt-4 py-2 px-4">Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
