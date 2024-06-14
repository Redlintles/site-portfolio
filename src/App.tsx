
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/Portfolio/" element={<Home/>}/>
            <Route path="/Portfolio/projects" element={<Projects/>}/>
            <Route path="/Portfolio/contact"element={<Contact />}/>
          </Routes>
        </main>
        <Footer />
      
      </BrowserRouter>
    </>
  )
}

export default App
