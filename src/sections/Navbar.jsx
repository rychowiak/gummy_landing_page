import { useState } from "react";
import { Link, Link as LinkScroll } from "react-scroll";
import NavLink from "../components/NavLink";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img
            src="images/logo1.png"
            width={115}
            height={155}
            alt="logo"
            className="rounded-full"
          />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-white max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Gomitasz" onClick={() => setIsOpen(false)} />
                  <NavLink title="Precios" onClick={() => setIsOpen(false)} />
                </li>

                <li className="nav-logo">
                  <Link
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img
                      src="images/logo1.png"
                      width={160}
                      height={55}
                      alt="logo"
                      className="rounded-full"
                    />
                  </Link>
                </li>
                <li className="nav-li">
                  <NavLink title="about us" onClick={() => setIsOpen(false)} />
                  <NavLink title="redes" onClick={() => setIsOpen(false)} />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
