import Nav from "./nav.js"
import Blog from "./blog.js"
import Clients from "./clients.js"
import Contact from "./contact.js"
import Footer from "./footer.js"
import Hero from "./hero.js"
import Services from "./services.js"


import './App.css';


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <Blog />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

