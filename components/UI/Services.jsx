import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";


const Services = (props) => {
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
            <SectionSubtitle subtitle={props.Lang.Lang == "Fr" ? Fr.WhaIdo.smallTitle : En.WhaIdo.smallTitle } />
            <h3 className="mb-1">{props.Lang.Lang == "Fr" ?  Fr.WhaIdo.betterExperience : En.WhaIdo.betterExperience }.</h3>
            <h3 className="mb-1">{props.Lang.Lang == "Fr" ? Fr.WhaIdo.problemSolving : En.WhaIdo.problemSolving }.</h3>
            <h3 className="mb-1">{props.Lang.Lang == "Fr" ?  Fr.WhaIdo.betterDesign : En.WhaIdo.betterDesign }.</h3>
            <p className="my-4">{props.Lang.Lang == "Fr" ?  Fr.WhaIdo.description : En.WhaIdo.description }</p>
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

export default connect(GetState)(Services)

