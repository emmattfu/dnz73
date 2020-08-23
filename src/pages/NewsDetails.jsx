import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSelectedNews } from "../redux/actions/news";
import YouTube  from 'react-youtube'
import ReactHtmlParser from 'react-html-parser';
import "../styles/detailedNews.css";

const NewsDetails = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSelectedNews(id));
  }, []);

  const selectedNews = useSelector((state) => state.news.selectedNews);
  console.log(selectedNews);

  const opts = {
    height: '390',
    width: '640',
    
  }

  return (
    <>
      {selectedNews.title && (
        <div className="detailed-news page-block">
          <div className="detailed-news__header">
            <h3 className="detailed-news__title page-title">
              {selectedNews.title}
            </h3>
            <span className="detailed-news__time">
              {new Date(selectedNews.createdAt.seconds * 1000).toLocaleString()}
            </span>
          </div>
          <img src={selectedNews.url} alt="card-img" style={{ width: "75%" }} />
          {ReactHtmlParser(selectedNews.text)}

          <YouTube videoId={selectedNews.video.slice(2)}  opts={opts}/>

          <p>
            Більше фото на{" "}
            <a className="content-link" href={selectedNews.morePhoto}>нашій сторінці в Фейсбук</a>
          </p>
        </div>
      )}
    </>
  );
};

export default NewsDetails;
