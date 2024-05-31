import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  document.title = props.category;

  const UpdateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6ac0d583a1bd451b83d9668cccd5ce92&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    props.setProgress(75);
    setarticles(parsedata.articles);
    setLoading(false);
    setTotalResults(parsedata.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    UpdateNews();
  });

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6ac0d583a1bd451b83d9668cccd5ce92&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
  };

  return (
    <div>
      <div className="container  my-4">
        <h1 className="text-center">Top Heading of the Day</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((e, index) => {
                return (
                  <div
                    className="col-md-4"
                    key={e.url ? `${e.url}-${index}` : ""}
                  >
                    <NewsItem
                      title={e.title ? e.title : ""}
                      description={e.description ? e.description : ""}
                      imageUrl={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
                      }
                      author={e.author}
                      date={e.publishedAt}
                      newsurl={e.url ? e.url : ""}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default News;

// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "health",
//   totalResults: 0,
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
//   totalResults: PropTypes.number,
// };
