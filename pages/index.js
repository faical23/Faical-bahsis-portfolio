import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import axios from 'axios'
import emailjs from '@emailjs/browser';



export default function Home() {

  const templateParams = {
    to_name: 'Faical Bahsis',
    from_name: 'Your Portfolio',
    message_html: 'Someone open your portfolio'
  };
  const Openwebsite = () => {
    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_EMAIL, process.env.NEXT_PUBLIC_TEMPLATE_1_EMAIL,templateParams,process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAIL)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
  Openwebsite()



  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
}
