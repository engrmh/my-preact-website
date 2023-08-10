import Router from 'preact-router';
import './app.css'
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Page404 from "./Pages/Page404/Page404.jsx";
import Resume from "./Pages/Resume/Resume.jsx";



export function App() {

  return (
    <>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Resume path="/resume" />
        {/*<Resume path="/portfolio" />*/}
        <Page404 path="/*" default />
      </Router>
    </>
  )
}
