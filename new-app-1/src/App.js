import Homepage from "./pages/homepage/homepage";
import Scanner from "./pages/qr/scanner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./pages/reset/reset";
import Itemslist from "./pages/itemslist/itemslist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="scanner" element={<Scanner />} />
          <Route path="reset" element={<Reset />} />
          <Route path="itemslist" element={<Itemslist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
