import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../data/portfolio";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";


const Portfolio = (props) => {
  const [filter, setFilter] = useState("Web App");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web Design") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );
      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle={props.Lang.Lang == "Fr"  ?  Fr.Myportfolio.smallTitle : En.Myportfolio.smallTitle } />
            <h4 className="mt-4">{props.Lang.Lang == "Fr"  ?  Fr.Myportfolio.Titre : En.Myportfolio.Titre } </h4>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Web App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web App")}
              >
                Web App
              </button>
              <button
                className={`${
                  filter === "Web Design" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web Design")}
              >
                Web Design
              </button>
            </div>
          </Col>
          <Col lg="12" md="12">
            <div className={classes.Portfolio__Grid}>
                {data?.map((item) => (
                    <PortfolioItem item={item} key={item.id}/>
                ))}
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

export default connect(GetState)(Portfolio)
