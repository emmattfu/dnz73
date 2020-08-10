import React from "react";
import {NavLink} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const NewsCard = ({ data }) => {

  const text =
    "Мої хороші дітки! Як цікаво знову дізнатись про те, що музика оточує нас скрізь! Вона живе в усьому, треба тільки прислухатись! Сьогодні в наших руках зазвучить навіть папір! Отже, готуйте листок кольорового паперу та танцюйте разом зі мною та моїми помічницями! Мої хороші дітки! Як цікаво знову дізнатись про те, що музика оточує нас скрізь! Вона живе в усьому, треба тільки прислухатись! Сьогодні в наших руках зазвучить навіть папір! Отже, готуйте листок кольорового паперу та танцюйте разом зі мною та моїми помічницями!";

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
          <p>{text.length > 220 ? text.slice(0, 220) + "..." : text}</p>
        </div>

        <Button>
          <NavLink to={`/news/${data.id}`}>Читати повністю</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
