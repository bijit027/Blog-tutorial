import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2016/08/31/17/02/blue-1634110_960_720.png"
        alt=""
      />
      <div className="headerTitles">
        <span className="headerTitleLg">Tutorial</span>
      </div>
    </div>
  );
}
