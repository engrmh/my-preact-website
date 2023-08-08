import Router from 'preact-router';
import './app.css'
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";



export function App() {

  return (
    <>
      <Router>
        <Home path="/" />
        <About path="/about" />
        {/*<About path="/about" default />*/}
      </Router>
    </>
  )
}
