import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";
// import ShimmerCard from "./component/Shimmer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
    this.setProgress = this.setProgress.bind(this);
  }
  setProgress(progress) {
    this.setState({
      progress: progress,
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={8}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={8}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={8}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={8}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={8}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={8}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={8}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
