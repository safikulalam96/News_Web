import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=865b740cf1314a2692aec641f4f6d6a6&pageSize=21";
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);
    this.setState({ articles: parsedata.articles,
        totalResults:parsedata.totalResults
    });
  }

  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=865b740cf1314a2692aec641f4f6d6a6&page=${
      this.state.page - 1
    }&pageSize=21`;
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);

    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
    });
  };
  handlenext = async () => {
    if (this.state.page +1> Math.ceil(this.state.totalResults/21)) {
    } 
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=865b740cf1314a2692aec641f4f6d6a6&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedata = await data.json();
      // console.log(parsedata);

      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container  my-4">
          <h1>Top Heading of the Day</h1>
          <div className="row">
            {this.state.articles.map((e) => {
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
