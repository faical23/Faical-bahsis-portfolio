import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import IconsProgrammation from "../../public/images/IconsProgrammation.png";
import classes from "../../styles/about.module.css";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";


const About = (props) => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="7" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle={props.Lang.Lang == "Fr" ? Fr.AboutMe.smallTitle :  En.AboutMe.smallTitle } />
            <h3 className="mt-4">{props.Lang.Lang == "Fr" ? Fr.AboutMe.titre1 :  En.AboutMe.titre1 }</h3>
            <h3 className="mb-4">{props.Lang.Lang == "Fr" ?  Fr.AboutMe.titre2 : En.AboutMe.titre2 }</h3>
            <p>{props.Lang.Lang == "Fr" ?  Fr.AboutMe.description1 : En.AboutMe.description1 }</p>
            <p>{props.Lang.Lang == "Fr" ?  Fr.AboutMe.description2 : En.AboutMe.description2 }</p>
            <div className={`align-items-start gap-5  technologeUsed ${classes.technologeUsed}`}>
                <h6 className=" d-flex align-items-start gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  JavaScript (ES6+)
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  TypeScript
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  React js
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Redux
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Vue js
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Vuex
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Node js
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Express js
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Laravel
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Php
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  MongoDb
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  MySql
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Tailwind
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  bootstrap
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Rest Api
                </h6>
            </div>
            <p>{props.Lang.Lang == "Fr" ?  Fr.AboutMe.description3 : En.AboutMe.description3 }</p>
            <div className={`align-items-start gap-5  technologeUsed ${classes.technologeUsed}`}>
                <h6 className=" d-flex align-items-start gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Git
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Github
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Gitlab
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Uml
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  agile & scrum
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Vscode
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Trello
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Jira
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  UX/UI design
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Postman
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Insomnia
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Npm
                </h6>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">{props.Lang.Lang == "Fr" ?  Fr.AboutMe.myPortfolio : En.AboutMe.myPortfolio }</Link>
              </button>

              <button className="secondary__btn">
                <a  href={ props.Lang.Lang == "Fr" ? "Files/FAICAL_BAHSIS_FR.pdf" :  "Files/FAICAL_BAHSIS_EN.pdf"  } rel="noreferrer" target="_blank">{ props.Lang.Lang == "Fr" ?  Fr.Hero.downloadCv :  En.Hero.downloadCv  }</a>
              </button>
            </div>
          </Col>

          <Col lg="5">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
                  <Image src={IconsProgrammation} alt="about-img" />
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

export default connect(GetState)(About)
