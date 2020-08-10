import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { getSelectedNews } from "../redux/actions/news";

const NewsDetails = ({ match }) => {
  const id = match.params.id;

  // const selectedNews = useSelector((state) =>
  //   state.news.news.filter((el) => el.id === id) || state.news.selectedNews
  // );

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getSelectedNews(id))
  }, [])

  const selectedNews = useSelector(state => state.news.selectedNews)
  console.log(selectedNews)

  return (
    <>
      {selectedNews.title && (
        <div className="detailed-news page-block">
          <h3 className="page-title">{selectedNews.title}</h3>
          <img src={selectedNews.url} alt="card-img" style={{width: '50%'}}/>
          <p>{selectedNews.text}</p>
          <p>Більше фото на <a href={selectedNews.morePhoto}>нашій сторінці в Фейсбук</a></p>
        </div>
      )}
    </>
  );
};

export default NewsDetails;
