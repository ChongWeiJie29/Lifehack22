import Homepage from "./pages/homepage/homepage"; 
import Scanner from "./pages/qr/scanner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./pages/reset/reset";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="scanner" element={<Scanner />} />
        <Route path="reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
