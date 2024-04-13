import "./feed.css";

export default function Feed() {
  return (
    <>
      <div className="feed">
        <div className="first">
          {/* <div className="H1">
            <h1>নতুন সব!</h1>
          </div> */}
          <ul className="_ul" id="_ul">
            <li>
              <div className="img">
                <img src="https://media.wired.com/photos/6610740e0e27303248553fa2/16:9/pass/Tesla-Goes-All-In-On-Robotaxis-Gear-1241069058.jpg"></img>
              </div>
              <div className="text">
                <span>আলোআয়ন এখন Unicorn!</span>
              </div>
            </li>
            <li>
              <div className="img">
                <img src="https://media.wired.com/photos/660ffc78811a8b5779841aef/16:9/pass/Un%2520perro%2520observa%2520un%2520eclipse.jpg"></img>
              </div>
              <div className="text">
                <span>চাঁদ নেমে আসে, আমার জানলার পাশে</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="second">
          <div className="big_image">
            <img src="https://media.wired.com/photos/660c8c5f4a215f6b511f3fc4/master/w_1600,c_limit/business_tiktok_whistleblower_bytedance_china.jpg"></img>
          </div>
          <div className="title_main">
            <span>চাঁদ নেমে আসে, আমার জানলার পাশে</span>
          </div>
        </div>
        <div className="third">
          <ul>
            <li>
              <div className="img">
                <img src="https://cf569060-220c-492b-a446-de4d016d781e-00-bj5uzodvoafv.janeway.replit.dev/public/Capture.PNG"></img>
              </div>
              <div className="text">
                <span>আলোআয়ন এখন Unicorn!</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="second_layer">
        <div className="cont">
          <div className="_1">
            <div className="image_1">
              <img src="https://media.wired.com/photos/660c8c5f4a215f6b511f3fc4/master/w_1600,c_limit/business_tiktok_whistleblower_bytedance_china.jpg"></img>
            </div>
            <div className="title_1">
              <span>
                চাঁদ নেমে আসে, আমার জানলার পাশেচাঁদ নেমে আসে, আমার জানলার
                পাশেচাঁদ নেমে আসে, আমার জানলার পাশে
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
