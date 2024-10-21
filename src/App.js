import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Homepage/Homepage";
import Blog from "./containers/Blog/Blog";
import Contact from "./containers/Contact/Contact";
import Shop from "./containers/Shop/Shop";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import ProductCompare from "./containers/ProductDetails/productCompare/ProductCompare";
import Cart from "./containers/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="productDetails" element={<ProductDetails />} />
          <Route path="productCompare" element={<ProductCompare />} />
          <Route path="Blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
