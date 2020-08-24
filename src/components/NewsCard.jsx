import React from "react";
import {NavLink} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser';

const NewsCard = ({ data }) => {

  const text = ReactHtmlParser(data.text)
  console.log(text)

  return (
    <div className="news-card page-block">
      <div className="news-card__img">
        <NavLink to={`/news/${data.id}`}>
         <img src={data.url} alt="card-img" />
        </NavLink>
        
      </div>

      <div className="news-card__content">
        <div className="news-card__title page-title">
          <h3>{data.title}</h3>
        </div>

        <div className="news-card__text">
          {text.length > 220 ? text.slice(0, 220) + "..." : text}
        </div>

        <Button className="news-card__btn">
          <NavLink to={`/news/${data.id}`}>Читати повністю</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
