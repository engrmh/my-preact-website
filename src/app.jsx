import Router from 'preact-router';
import './app.css'
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Page404 from "./Pages/Page404/Page404.jsx";



export function App() {

  return (
    <>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Page404 path="/*" default />
      </Router>
    </>
  )
}
