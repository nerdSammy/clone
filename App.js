import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tobar from "./components/Tobar";
import Gallery from "./components/gallery";
import Hero from "./components/hero";




function App() {
  return (
    <div className="App">
      <Tobar/>
      <Navbar/>
     <Hero/>
     <Activities/>
     <Booking/>
     <Gallery/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
