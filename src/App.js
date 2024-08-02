import { Fragment } from "react";
import HomePage from "./routes/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const About = () => {
  return (
    <div>
      <p>About page!!!!!!!!!!!</p>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Fragment>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="SignIn" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Fragment>
    </Routes>
  );
};

export default App;
