import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = (props) => {
  const api = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
          <Route path="/" element={<Navigate to="/general" replace />} />
          {/* Define other routes */}
          <Route
            path="/general"
            element={
              <News
                setProgress={setprogress}
                key="general"
                pageSize={6}
                api={api}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setprogress}
                key="sports"
                pageSize={6}
                api={api}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setprogress}
                key="business"
                pageSize={6}
                api={api}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setprogress}
                key="technology"
                pageSize={6}
                api={api}
                country="in"
                category="technology"
              />
            }
          ></Route>
          <Route
            path="/general"
            element={
              <News
                setProgress={setprogress}
                key="general"
                pageSize={6}
                api={api}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setprogress}
                key="science"
                pageSize={6}
                api={api}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setprogress}
                key="health"
                pageSize={6}
                api={api}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setprogress}
                key="entertainment"
                pageSize={6}
                api={api}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
