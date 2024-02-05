import desktopImage from "../../images/bg-header-desktop.svg";
import mobileImage from "../../images/bg-header-mobile.svg";
import "./Header.scss";
import { useState, useEffect } from "react";

const Header = () => {
  //variable to manage window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //update window width when the component mounts
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    //add event listener for window resize
    window.addEventListener("resize", handleResize);

    //clearnup: remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //why empty array? the effect runs only once when the component mounts, setting up the event listener. The event listener then updates the windowWidth state whenever the window is resized

  const headerImage = windowWidth > 500 ? desktopImage : mobileImage;

  return (
    <div className="header">
      <img src={headerImage} alt="header" />
    </div>
  );
};

export default Header;
