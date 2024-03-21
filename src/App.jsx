import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Hamburguers from "./pages/Hamburguers";
import Serving from "./pages/Serving";
import Drinks from "./pages/Drinks";

function App() {
  const [itemCount, setItemCount] = useState(0);

  const handleItemCountChange = (newCount) => {
    setItemCount(itemCount + newCount);
  };

  return (
    <BrowserRouter>
      <main>
        <Navbar itemCount={itemCount} />
        <Routes>
          <Route
            path="/"
            element={<Home onItemCountChange={handleItemCountChange} />}
          />
          <Route
            path={`/product-detail/:id`}
            element={
              <ProductDetail onItemCountChange={handleItemCountChange} />
            }
          />
          <Route path={"/hamburguers"} element={<Hamburguers />} />
          <Route path={"/porcoes"} element={<Serving />} />
          <Route path={"/bebidas"} element={<Drinks />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
