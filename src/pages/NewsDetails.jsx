import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSelectedNews } from "../redux/actions/news";
import YouTube  from 'react-youtube'
import "../styles/detailedNews.css";

const NewsDetails = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSelectedNews(id));
  }, []);

  const selectedNews = useSelector((state) => state.news.selectedNews);
  console.log(selectedNews);

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
          <p>{selectedNews.text}</p>

          <YouTube videoId="2g811Eo7K8U"  />

          <p>
            Більше фото на{" "}
            <a href={selectedNews.morePhoto}>нашій сторінці в Фейсбук</a>
          </p>
        </div>
      )}
    </>
  );
};

export default NewsDetails;
