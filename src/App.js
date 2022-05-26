import Home from "./router/home/home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./router/navigation/navigation";
import Authentication from "./router/authentication/authentication";
import Checkout from "./router/checkout/checkout";
import Shop from "./router/shop/shop"
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={< Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>

  );
}

export default App;
