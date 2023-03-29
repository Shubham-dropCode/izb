import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import BoardOfDirectors from "./Pages/BoardOfDirectors/BoardOfDirectors";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/BoardOfDirectors" element={<BoardOfDirectors />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
