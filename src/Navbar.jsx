import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navber(props) {
  return (
    <div className="navbar">
      <img src="../../public/Capture.PNG"></img>
      <ul>
        <li>
          <Link to="/">হোম</Link>
        </li>
        <li>
          <Link to="/letter">চিঠি-পত্তর</Link>
        </li>
        <li>
          <Link to="/science">খুব বিজ্ঞান</Link>
        </li>
        <li>
          <Link to="/literature">সাহিত্য</Link>
        </li>
      </ul>
    </div>
  );
}
