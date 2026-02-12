import { Link } from "react-scroll";

const NavLink = ({ title, onClick }) => (
  <Link
    onClick={onClick}
    to={title}
    offset={-100}
    spy
    smooth
    className="base-bold uppercase transition-colors duration-500 cursor-pointer hover:text-amber-600 max-lg:my-4 max-lg:h5"
    activeClass="nav-active"
  >
    {title}
  </Link>
);

export default NavLink;
