// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"

// import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills/>
     <Experience/>
     <Projects/>
     {/* <Routes>
      <Route path='/' element={<Banner/>}/>
      <Route exact path='/skills' element={<Skills/>}/>
      <Route exact path='/projects' element={<Projects/>}/>

     </Routes> */}
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
