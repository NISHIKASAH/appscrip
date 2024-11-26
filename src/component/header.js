
import iconslist from "../images/Icons.png";
import logo from "../images/Logo.png"
import { FaArrowDown } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="header-left">
          <span className="brand-icon">
            <img src={logo} alt="logo" />
          </span>
        </div>
        <div className="header-logo">LOGO</div>
        <div className="header-icons">

            <img src={iconslist} alt="logo" />
        </div>
      </header>
      <div className="items-section">
        <div>SHOP</div>
        <div>SKILLS</div>
        <div>STORIES</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
      </div>
      <div className="discover">
        <div>DISCOVER OUR PRODUCTS</div>
        <p>
        "This Christmas, unwrap the gift of savings! 
        Shop our holiday deals and make your season bright!"
        </p>

      </div>
      <div className="filter-section">
       <div>365 ITEMS</div>
        <div className="hide-filter">HIDE FILTER</div>
        <div>RECOMMENDED <FaArrowDown /> </div>
      </div>
    </div>
  );
};

export default Header;
