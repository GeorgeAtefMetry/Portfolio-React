import Navbar from "./components/Navbar/navbar";
import './App.css'
import Intro from "./components/intro/intro";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Works from "./components/works/works";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import {themeContext} from './context'
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{
      background : darkMode ? 'black' : " ",
      color : darkMode ? 'white' : 'black'
    }}
    >
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
