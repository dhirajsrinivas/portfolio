import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App(){
  return(
    <div className="main-container">
      <main>
        <Header/><br/>
        <About/><br/>
        <Skills/><br/>
        <Projects/><br/>
        <Contact/>
      </main>
    </div>
  )
}
export default App;