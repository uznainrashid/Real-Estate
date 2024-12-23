import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Testimonails from "./Components/Testimonails";
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
