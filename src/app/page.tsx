 import NotFound from "./components/found";
 import Contact from "./components/contact";
import Hero from "./components/hero";
import About from "./components/about";
import Loading from "./components/loading";
import Skills from "./components/skills";

export default function Home() {
  return (
   <div>
    <Hero/>
        <About/>

    <NotFound/>
    <Contact/>
    <Loading/>
    <Skills/>``
   </div>
  );
}
