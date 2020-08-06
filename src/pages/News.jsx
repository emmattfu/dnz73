import React from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../redux/actions/news";
import { NewsList } from "../components";

const News = () => {
  const dispatch = useDispatch();

  dispatch(getNews());

  return <NewsList />;
};

export default News;
