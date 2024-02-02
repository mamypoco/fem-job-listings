import desktopHeader from "../../images/bg-header-desktop.svg";
import mobileHeader from "../../images/bg-header-mobile.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img
        src={window.innerWidth >= 600 ? desktopHeader : mobileHeader}
        alt="header"
      />
    </div>
  );
};

export default Header;
