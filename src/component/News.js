import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "sports",
  };
  static proTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async UpdateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b686d950b5b0476b94acebf0e291e3e1&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.UpdateNews();
  }

  handleprev = async () => {
    this.setState({ pageSize: this.state.page - 1 });
    this.UpdateNews();
  };
  handlenext = async () => {
    this.setState({ pageSize: this.state.page + 1 });
    this.UpdateNews();
  };

  render() {
    return (
      <div>
        <div className="container  my-4">
          <h1 className="text-center">Top Heading of the Day</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url ? e.url : ""}>
                    <NewsItem
                      title={e.title ? e.title : ""}
                      description={e.description ? e.description : ""}
                      imageUrl={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg"
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
        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={this.handleprev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            onClick={this.handlenext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
