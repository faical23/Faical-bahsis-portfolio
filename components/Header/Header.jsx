import React, { useRef, useEffect,useState } from "react";

import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import Frensh from "../../public/images/Frensh.png";
import England from "../../public/images/england.png";
import Image from "next/image";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";







const Header = (props) => {
  const [NavItemEn,SetNavItemEn] = useState('Home')
  const [NavItemFr,SetNavItemFr] = useState('Accueil')
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
  const NAV__LINK = [
    {
      path: "/",
      display:  props.Lang.Lang == "Fr" ?  Fr.header.home : En.header.home  ,
    },
    {
      path: "#about",
      display:  props.Lang.Lang == "Fr" ?  Fr.header.about : En.header.about   ,
    },
    {
      path: "#services",
      display:  props.Lang.Lang == "Fr" ? Fr.header.services : En.header.services   ,
    },
    {
      path: "#portfolio",
      display:  props.Lang.Lang == "Fr" ?  Fr.header.portfolio : En.header.portfolio   ,
    },
    {
      path: "#contact",
      display:  props.Lang.Lang == "Fr" ?  Fr.header.contact : En.header.contact   ,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>menuRef.current.classList.toggle(`${classes.menu__active}`);

  console.log("Lang => " ,  props.Lang)

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
                      SetNavItemEn(item.display);
                      SetNavItemFr(item.display)
                    }}
                   className={`${classes.Link}  ${(NavItemEn === item.display || NavItemFr === item.display) ? classes.ActiveLink : "qqq"}`}> {item.display}</p>
                </Link>
              ))}

              <div className={`${classes.nav__right}`} style={{display: "flex",alignItems: "center"}}>
                <p className=" d-flex align-items-center gap-2 mb-0" style={{margin:"0px 22px 0px 10px"}}>
                  {" "}
                  <a className={classes.Tele} href="tel:+212619887328">
                    <i className="ri-phone-line"></i> +212619887328{" "}
                  </a>
                </p>
                <div onClick={()=>{
                  props.Lang.Lang == "Fr" ? props.ChangeLang('En') :  props.ChangeLang('Fr') 
                }} style={{position: "relative",top: "11px",cursor: "pointer"}}>
                    {
                      props.Lang.Lang == "Fr" ?
                      
                      <Image alt="hero-image" src={Frensh} width="30" height="30" objectFit="cover" />
                      :
                      <Image alt="hero-image" src={England} width="30" height="30" objectFit="cover" />
                    }
                </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLang: (Lang) => dispatch({ type: 'SET_LANG',payload: Lang}),
  }
}

const GetState = (state) =>{
  return {
      Lang:state
  }
}

export default connect(GetState,mapDispatchToProps)(Header)
