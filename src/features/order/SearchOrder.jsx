import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`);
        setQuery('');
    }
  const [query, setQuery] = useState();
  return (
    <form onSubmit={handleSubmit} style={{marginLeft:"40px", }}>
      <input
        type="text"
        placeholder="Search Order #"
        className="searchOrderInput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        
      />
    </form>
  );
}
