import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "flowbite-react";
import Vitlogga from "../../public/assets/images/vitlogga.png";
import { useState, useEffect, useContext } from "react";
import FormModal from "./FormModal";
import { ServiceContext } from "../App";
import { scroller } from "react-scroll";
function Header() {
  // @ts-ignore

  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { packages } = useContext(ServiceContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
        setIsVisible(true);
      } else {
        setIsSticky(false);
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToSection(): void {
    scroller.scrollTo("Footer", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  return (
    <header className="text-white border-b">
      <nav
        className={`transition-all duration-300 ease-in-out bg-gray900 border-t-2 border-gray-700 h-20
      ${isVisible ? "fixed top-0 left-0 w-full z-10" : "relative"} 
      ${isVisible ? "transform translate-y-0" : "transform -translate-y-full"}`}
      >
        <div className="flex items-center justify-evenly content-center h-full">
          <div className="justify-self-start">
            <a href="http://localhost:5173/#">
              <img src={Vitlogga} alt="HE-logga" className="w-12" />
            </a>
          </div>
          <div className="flex flex-row gap-5">
            <FormModal packages={packages} />
            <Button
              className="h-auto"
              gradientMonochrome="info"
              onClick={scrollToSection}
            >
              Kontakt
            </Button>
          </div>

          <div className="flex flex-row gap-5">
            <a
              href="https://www.linkedin.com/in/henrik-ek-062856226/?locale=en_US&trk=people-guest_people_search-card"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/henrikekpersonaltraining/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram className="text-4xl" />
            </a>
          </div>
        </div>
      </nav>

      <div className=" lg:py-4 flex items-center xl:justify-start flex-col gap-5 mb-10 lg:flex-row">
        <div className="w-44 sm:w-48 lg:w-56">
          <img src={Vitlogga} alt="HE-logga" className="object-contain" />
        </div>
        <div className="text-center xl:ml-28 xl:self-center">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold">
            Henrik Ek - Personlig tränare
          </h1>
          <h2 className="sm:text-2xl lg:mt-3 xl:text-4xl">
            Tillsammans skapar vi ditt bästa jag
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
