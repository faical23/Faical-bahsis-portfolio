import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>

            If you have any project or any opportunity or want to hire me, my inbox is always open. Whether you have a question or just want to say hello, I'll do my best to answer you!

            </p>

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

export default Contact;
