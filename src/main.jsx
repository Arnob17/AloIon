import "./Navbar.css";
import Navbar from "./Navbar";
import Letter from "./letter";
import Feed from "./feed";
import Science from "./science";
import Literature from "./literature";
import Footer from "./footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function Main() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/letter" element={<Letter />} />
          <Route exact path="/science" element={<Science />} />
          <Route exact path="/literature" element={<Literature />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
