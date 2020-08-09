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
  dispatch(getSelectedNews(id))

  const selectedNews = useSelector(state => state.news.selectedNews)

  return (
    <>
      {selectedNews.length && (
        <div className="detailed-news page-block">
          <h3 className="page-title">{selectedNews[0].title}</h3>
          <img src={selectedNews[0].url} alt="card-img" style={{width: '50%'}}/>
          <p>{selectedNews[0].text}</p>
        </div>
      )}
    </>
  );
};

export default NewsDetails;
