import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div style={{width:'100%'}}>
      {isLoading && <Loader />}
      <Header />

      <main className="w-100 my-5">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
