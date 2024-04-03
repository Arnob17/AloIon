import "./feed.css";

export default function Feed() {
  return (
    <div className="feed">
      <div className="first">
        <div className="H1">
          <h1>নতুন সব!</h1>
        </div>
        <ul className="_ul" id="_ul">
          <li>
            <div className="img">
              <img src="https://cf569060-220c-492b-a446-de4d016d781e-00-bj5uzodvoafv.janeway.replit.dev/public/Capture.PNG"></img>
            </div>
            <div className="text">
              <span>আলোআয়ন এখন Unicorn!</span>
            </div>
          </li>
          <li>
            <div className="img">
              <img src="https://cf569060-220c-492b-a446-de4d016d781e-00-bj5uzodvoafv.janeway.replit.dev/public/Capture.PNG"></img>
            </div>
            <div className="text">
              <span>চাঁদ নেমে আসে, আমার জানলার পাশে</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="second"></div>
      <div className="third"></div>
    </div>
  );
}