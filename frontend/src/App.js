import "./App.css";
import DaftarProduk from "./components/DaftarProduk";
import NavbarComponent from "./components/NavbarComponent.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TambahProduk from "./components/TambahProduk.js";
import EditProduk from "./components/EditProduk.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DaftarProduk />}></Route>
          <Route path="/tambahproduk" element={<TambahProduk />}></Route>
          <Route path="/editproduk/:id" element={<EditProduk />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
