import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";


const Contact = (props) => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle={props.Lang.Lang == "En"  ? En.Contact.smallTitle : Fr.Contact.smallTitle} />
            <h3 className="mt-4 mb-4">{props.Lang.Lang == "En"  ? En.Contact.Titre : Fr.Contact.Titre}</h3>
            <p>{props.Lang.Lang == "En"  ? En.Contact.description : Fr.Contact.description}</p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Rabat - Morocco</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>faissalabr@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+212619887328</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <a style={{textDecoration: 'none',color: '#01d293'}} href="https://twitter.com/FBahsis" target="_blank" rel="noreferrer"><i className="ri-twitter-line"></i></a>
              <a style={{textDecoration: 'none',color: '#01d293'}}  href="https://github.com/faical23" target="_blank" rel="noreferrer"><i className="ri-github-line"></i></a>
              <a style={{textDecoration: 'none',color: '#01d293'}}  href="https://www.linkedin.com/in/faical-bahsis-7818a1182/" target="_blank" rel="noreferrer"><i className="ri-linkedin-line"></i></a>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
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

export default connect(GetState)(Contact)
