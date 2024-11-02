/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div className="menu">
      <div className="container">
        <ul className="row justify-content-center" style={{ flexGrow: "1" }}>
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
