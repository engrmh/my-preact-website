import Router, {getCurrentUrl, useRouter} from 'preact-router';
import './app.css'
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Page404 from "./Pages/Page404/Page404.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import CurrentProject from "./Pages/CurrentProject/CurrentProject.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Projects from "./Pages/Dashboard/Projects/Projects.jsx";



export function App() {
    const location = getCurrentUrl()


    // const currentProject = useRouter()
    // console.log(currentProject[0].matches.current)

  return (
    <>
        {
            location.includes('dashboard') ? (
                <>
                    <Router>
                        <Dashboard path='/dashboard'/>
                        <Projects path='/dashboard/projects'/>
                        <Page404 path="/*" default />
                    </Router>
                </>
            ) : (
                <>
                    <Router>
                        <Home path="/" />
                        <About path="/about" />
                        <Resume path="/resume" />
                        <Portfolio path="/portfolio" />
                        <CurrentProject path="/portfolio/:current" />
                        <Page404 path="/*" default />
                    </Router>
                </>
            )
        }
    </>
  )
}
