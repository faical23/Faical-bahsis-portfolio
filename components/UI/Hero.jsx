import React ,{ useState, useEffect } from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/faical.jpg";
import classes from "../../styles/hero.module.css";




const Hero = () => {

  const handleClick = () =>{
  }

  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            {/* <Hero2/> */}
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hi, my name is" />
              <h2 className={`mt-3 mb-3 ${classes.TitleName}`} >Faical Bahsis.</h2>
              <h5 className={`mb-4 ${classes.SousTitleName}`} >I build things for the web.</h5>
              <p>
              I'm a full stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible ,
              and It's always been my pleasure to contribute my best efforts to make your ideas become real.
              </p>
              <div className="mt-5">
                <button className="primary__btn"  onClick={()=>{handleClick()}}>
                  <Link href="mailto:faissalabr@gmail.com">Hire me</Link>
                </button>
                <button className="secondary__btn">
                    <a href="Files/FAICAL_BAHSIS_FR.pdf" target="_blank">Download CV</a>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" objectFit="cover" />
              {/* <img src={require=('../../public/images/faical.jpg')} width="400" height="400" /> */}

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
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
                  <h6>Experience</h6>
                  <h5 className="mb-0">3 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;



