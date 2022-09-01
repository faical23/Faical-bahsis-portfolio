import React ,{ useState, useEffect } from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/faical.jpg";
import classes from "../../styles/hero.module.css";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";




const Hero = (props) => {


  useEffect(()=>{
    console.log("Lang => " ,  props.Lang.props)
  },[props.Lang.props])

  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            {/* <Hero2/> */}
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle={props.Lang.Lang == "En" ? En.Hero.smallTitle  : Fr.Hero.smallTitle} />
              <h2 className={`mt-3 mb-3 ${classes.TitleName}`} >Faical Bahsis.</h2>
              <h5 className={`mb-4 ${classes.SousTitleName}`} >{ props.Lang.Lang == "En" ? En.Hero.bigTitle  : Fr.Hero.bigTitle}.</h5>
              <p>{ props.Lang.Lang == "En" ? En.Hero.description : Fr.Hero.description}</p>
              <div className="mt-5">
                <button className="primary__btn"  onClick={()=>{handleClick()}}>
                  {
                    props.Lang.Lang == "En"  && <Link href="mailto:faissalabr@gmail.com">{En.Hero.hireMe}</Link>
                  }
                                    {
                    props.Lang.Lang == "Fr"  && <Link href="mailto:faissalabr@gmail.com">{Fr.Hero.hireMe}</Link>
                  }
                  
                </button>
                <button className="secondary__btn">
                    <a href="Files/FAICAL_BAHSIS_FR.pdf" target="_blank">{ props.Lang.Lang == "En" ? En.Hero.downloadCv  : Fr.Hero.downloadCv}</a>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" objectFit="cover" />

              <div className={`${classes.hero__skills}`}>
                <h6>{ props.Lang.Lang == "En" ? En.Hero.skills  : Fr.Hero.skills}</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>{ props.Lang.Lang == "En" ? En.Hero.experience  : Fr.Hero.experience}</h6>
                  <h5 className="mb-0">3{ props.Lang.Lang == "En" ? En.Hero.years  : Fr.Hero.years}</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const GetState = (state) =>{
  return {
      Lang:state
  }
}

export default connect(GetState)(Hero)



