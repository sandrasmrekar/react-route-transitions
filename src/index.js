import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Home from "./pages/Home";
import About from "./pages/About";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Project1 from "./pages/Projects/Project1";

const App = () => {
  const location = useLocation();
  const isLonger = useRef(null);
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {});

  useEffect(() => {
    const toPath = location.pathname;
    isLonger.current = toPath.length > prevLocation.length;
    setPrevLocation(location.pathname);
  }, [location.pathname, prevLocation.length]);

  const transitionsEnter = useTransition(location.pathname, {
    from: { transform: "translate3d(100vw, 0, 0)" },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(-20vw, 0, 0)" },
    initial: null,
  });
  const transitionsLeave = useTransition(location.pathname, {
    from: { transform: "translate3d(-100vw, 0, 0)" },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(20vw, 0, 0)" },
    initial: null,
  });

  const transition = isLonger.current ? transitionsEnter : transitionsLeave;

  return (
    <>
      {transition((props, item) => (
        <animated.div style={props}>
          <Routes location={item}>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/about/me" element={<AboutMe />} />
            <Route
              path="/projects/*"
              element={<ProjectRoutes location={item} />}
            />
          </Routes>
        </animated.div>
      ))}
    </>
  );
};

function ProjectRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Projects />} exact />
      <Route path="/1" element={<Project1 />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
