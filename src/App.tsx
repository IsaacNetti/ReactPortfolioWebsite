import{motion} from "framer-motion";
import './index.css'
import Navbar from "./Components/Navbar.tsx";
import AboutMe from "./Components/AboutMe.tsx";

function App() {

  return (
    <>
    <Navbar></Navbar>
    <AboutMe></AboutMe>
    <div className="">
      <h1 className="mt-96">Test</h1>
    <motion.h1 className="text-3xl font-bold underline animate-pulse mt-96" >
      Hello world!
    </motion.h1>
    </div>
    </>
  )
}

export default App
