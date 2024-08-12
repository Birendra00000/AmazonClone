import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SearchResult, ProductPage } from "./Components";
import Navbar from "./Components/Navbar/Navbar";
import Checkout from "./Components/Checkout/CheckOut";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
