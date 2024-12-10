import { FaBars, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
import Vitlogga from "../../assets/images/vitlogga.png";
import { useContext, useEffect, useState } from "react";
import FormModal from "../modal/FormModal";
import { ServiceContext } from "../../pages/home/Home";
import { scroller } from "react-scroll";

function Navbar() {
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

  function scrollToSection(section: string): void {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  return (
    <nav
      className={`transition-all duration-300 ease-in-out bg-gray900 border-t-2 border-gray-700 h-20 md:h-[96px] w-full
      ${isVisible ? "fixed top-0 left-0 w-full z-10" : "relative"} 
      ${isVisible ? "transform translate-y-0" : "transform -translate-y-full"}`}
    >
      <div className="flex items-center justify-between h-full w-full px-8">
        <div className="flex flex-row items-center gap-5">
          <a href="/" className="">
            <img src={Vitlogga} alt="HE-logga" className="w-12 md:w-20" />
          </a>
          <h2 className="hidden lg:block text-4xl font-mono xl:text-4xl">
            Henrik Ek Personlig Träning
          </h2>
        </div>

        <div className="flex flex-row gap-5">
          <div className="">
            <FormModal
              packages={packages}
              icon={FaEnvelope}
              text="Kontakta"
              modalHasBtn={true}
            />
          </div>

          <Dropdown
            label=""
            className=""
            dismissOnClick={true}
            renderTrigger={() => (
              <span>
                <FaBars className="h-10 w-10 cursor-pointer" />
              </span>
            )}
          >
            <Dropdown.Item
              className="hover:text-gray-400"
              onClick={() => {
                scrollToSection("Cards");
              }}
            >
              Träningspaket
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-gray-400"
              onClick={() => {
                scrollToSection("Footer");
              }}
            >
              <span>Kontaktinformation</span>
            </Dropdown.Item>

            <Dropdown.Item
              className="hover:text-gray-400"
              onClick={() => {
                scrollToSection("Footer");
              }}
            >
              Samarbeten
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-gray-400"
              onClick={() => {
                scrollToSection("About");
              }}
            >
              Om Henrik
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-gray-400"
              icon={FaInstagram}
              as="a"
              href="https://www.instagram.com/henrikekpersonaltraining/"
            >
              Instagram
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-gray-400"
              icon={FaLinkedin}
              as="a"
              href="https://www.linkedin.com/in/henrik-ek-062856226/?locale=en_US&trk=people-guest_people_search-card"
            >
              LinkedIn
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
