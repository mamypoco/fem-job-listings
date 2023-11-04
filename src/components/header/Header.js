import headerImageDestktop from "../../images/bg-header-desktop.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={headerImageDestktop} alt="" />
    </div>
  );
};

export default Header;
