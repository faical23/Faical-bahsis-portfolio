import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>
              <div className={`${classes.SecondService}`}>
                <ServicesItem title="Full-Stack Development" icon="ri-code-s-slash-line"/>
                <ServicesItem title="Mobile Development" icon="ri-smartphone-line"/>
              </div>


            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-1">Better Experience.</h3>
            <h3 className="mb-1">Problem solving.</h3>
            <h3 className="mb-1">Better Design.</h3>
            <p className="my-4">
            I have a passion for building cool software solutions and that's why I am in the field of Enterprise Software development. I am a strong believer in the fact that everyone should enjoy the work they do! That is why I love software development because I can contribute to making people's work easier, faster and better and hopefully, put a smile on their faces 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
