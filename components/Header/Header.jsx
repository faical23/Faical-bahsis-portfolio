import React, { useRef, useEffect,useState } from "react";

import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  const [NavItem,SetNavItem] = useState('Home')
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>Fai</span>cal
            </h1>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  <p onClick={()=>{
                      SetNavItem(item.display);
                      console.log(item.display)
                    }}
                   className={`${classes.Link}  ${NavItem === item.display ? classes.ActiveLink : "qqq"}`}> {item.display}</p>
                </Link>
              ))}

              <div className={`${classes.nav__right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  {" "}
                  <a className={classes.Tele} href="tel:+212619887328">
                    <i className="ri-phone-line"></i> +212619887328{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
