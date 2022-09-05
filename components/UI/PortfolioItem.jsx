import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        <div className={`${classes.portfolio_Tags}`}>
          {keyword.map((item, index) => (
            <span className={`${classes.portfolio__keyword}`} key={index}>
              {item}
            </span>
          ))}
        </div>

      </div>

      <div className={`${classes.portfolio__img}`}>
        <img className={`${classes.portfolio__img_Img}`}  src={img} alt="portfolio-img"  />
      </div>

      {/* <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div> */}
    </div>
  );
};

export default PortfolioItem;
