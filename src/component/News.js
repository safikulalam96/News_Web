import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super()
    this.state={
        articles:[],
        loading:false
    }
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=865b740cf1314a2692aec641f4f6d6a6'
    let data= await fetch(url)
    let parsedata=await data.json();
    console.log(parsedata)
    this.setState({articles: parsedata.articles
    })
  }

  render() {
    return (
      <div>
        <div className="container  my-4">
          <h>Top Heading of the Day</h>
          <div className="row" >
            {this.state.articles.map((e)=>{
                return <div className="col-md-4" key={e.url?e.url:""}>
                <NewsItem
                  title={e.title?e.title:""}
                  description={e.description?e.description:""}
                  imageUrl={e.urlToImage?e.urlToImage:"https://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg"}
                  newsurl={e.url?e.url:""}
                />
              </div>
            })}
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default News;
