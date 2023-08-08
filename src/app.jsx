import Router from 'preact-router';
import './app.css'
import Home from "./Pages/Home/Home.jsx";



export function App() {

  return (
    <>
      <Router>
        <Home path="/" />
        {/*<About path="/about" />*/}
        {/*<About path="/about" default />*/}
      </Router>
    </>
  )
}
