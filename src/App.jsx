import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner/Banner"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import Food_Items from "./Components/Food_Items/Food"
import Teams from "./Components/Teams/Teams"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
function App(){
  return(
    <div>
      <Navbar />
      <Banner/>
      <About/>
      <Services/>
      <Food_Items/>
      <Teams/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App