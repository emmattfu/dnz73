import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/actions/news";
import {NewsCard, Spinner } from "../components";


const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.news)

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch])


  if (!news.length) {
    return <Spinner />
  }

  return <>{news && news.map((el) => <NewsCard data={el} key={el.id} />) || <Spinner />}</>;
};

export default News;
