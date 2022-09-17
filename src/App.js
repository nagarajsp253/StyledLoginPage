import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <div>
       <BrowserRouter>
       <Header/>
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            {/* <Route path="*" element={<Error />}/> */}
         </Routes>
      <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
