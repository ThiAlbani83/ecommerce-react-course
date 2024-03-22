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
import ItemList from "./components/hero/ItemList";

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
          <Route
            path={`/category/:id`}
            element={<ItemList onItemCountChange={handleItemCountChange} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
