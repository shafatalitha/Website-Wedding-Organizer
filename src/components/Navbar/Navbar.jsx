import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = (refPriceList) => {
  const [click, setClick] = useState(false);
  const [ button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // const handleClickPriceList = () => {
  //   closeMobileMenu();
  
  //   window.scrollTo({
  //     top: refPriceList.current.offsetTop,
  //     behavior: 'smooth',
  //   });
  // }

  // useEffect(() => {
  //   showButton();
  // }, []);

  window.addEventListener("resize", showButton);
  return (
    <nav className="navbar">
      <div className="Navbar-container">
        <Link to="/" className="navbar-logo">
          OemahManten
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fa-solid fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pricelist" className="nav-links" onClick={closeMobileMenu}>
            Pricelist
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/testimonials" className="nav-links" onClick={closeMobileMenu}>
            Testimoni
          </Link>
        </li>
      </ul>
    </nav>
  );
};










// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

export default Navbar;
