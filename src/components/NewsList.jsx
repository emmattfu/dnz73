import React from "react";
import { NewsCard } from "../components";
import { useSelector } from "react-redux";

const NewsList = () => {
    const news = useSelector(state => state.news.news)


    if(!news.length) {
        return <h1>List</h1>
    }

  return (
    <>{news.map((el) => <NewsCard data={el} key={el.id} />)}</>
  );
};

export default NewsList;
