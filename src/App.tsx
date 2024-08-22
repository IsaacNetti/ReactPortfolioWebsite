import{motion} from "framer-motion";
import './index.css'
import Navbar from "./Components/Navbar.tsx";
import AboutMe from "./Components/AboutMe.tsx";
import Technologies from "./Components/Technologies.tsx";
import Projects from "./Components/Projects.tsx";

function App() {

  return (
    <>
  <Navbar />
    <AboutMe />
    <Technologies />
    <Projects />
    
    <div className="">
      <h1 className="mt-96">Test</h1>
    </div>
    </>
  )
}

export default App
