
import "./App.css"
import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Task/Projects";
import { Skills } from "./components/About/Skills";
import { Footer } from "./components/Footer";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"
function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  return (
    <div >
      <motion.div className="body">
        <div className="route-con">
            <div>
              <NavBar/>
              <Home/>
              <Projects/>
              <About/>
              <Contact/>
              <Footer/>
            </div>
        </div>
      </motion.div>
      <Analytics/>
    </div>
  )
}

export default App
