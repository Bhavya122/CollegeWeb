import React, {useState} from "react";

import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
// import Contacts from "./components/Contacts/Contacts";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";

const App=()=> {
  const [playState, setPlayState]=useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />

        <Campus />
        <Title subTitle="Testimonials" title="What Students Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch With Us" />
        <Contact />
        <Footer/>
        <Video playState={playState} setPlayState={setPlayState}/>
      </div>
    </div>
  );
}

export default App;
