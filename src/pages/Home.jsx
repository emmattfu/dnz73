import React from "react";

import "../styles/home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1>Шановні батьки та гості сайту!</h1>
        <p>
          Вітаємо Вас на офіційному сайті <br /> Чернігівського дошкільного
          навчального закладу № 73 <br /> Чернігівської міської ради <br />{" "}
          Чернігівської області{" "}
        </p>
      </div>

      <p>Місце для фото</p>

      <p>Цей сайт був створений для того, щоб батьки завжди були в курсі повсякденного життя нашого дитячого садка та знали про нього більше.</p>
      <p>У будь-якому куточку світу ви можете набрати в браузері   <a className="content-link" href="https://sites.google.com/view/dnz73">https://sites.google.com/view/dnz73</a> дізнатися останні новини з нашого дошкільного навчального закладу.</p>
    </div>
  );
};

export default Home;
