import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/main/main";
import Cart from "./component/cart/cart";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
