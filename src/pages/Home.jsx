import React from "react";
import img from '../assets/dnz.png'

import "../styles/home.css"

const Home = () => {
  return (
    <div className="home page-block">
      <div className="home__header">
        <h1>Шановні батьки та гості сайту!</h1>
        <p>
          Вітаємо Вас на офіційному сайті <br /> Чернігівського дошкільного
          навчального закладу № 73 <br /> Чернігівської міської ради <br />{" "}
          Чернігівської області{" "}
        </p>
      </div>

      <img src={img} alt="dnz"/>

      <p>Цей сайт був створений для того, щоб батьки завжди були в курсі повсякденного життя нашого дитячого садка та знали про нього більше.</p>
      <p>У будь-якому куточку світу ви можете набрати в браузері   <a className="content-link" href="dnz73.herokuapp.com">dnz73.herokuapp.com</a> дізнатися останні новини з нашого дошкільного навчального закладу.</p>
    </div>
  );
};

export default Home;
