import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Vitlogga from "../../assets/images/vitlogga.png";
import NavBar from "./Navbar";
function Header() {


  return (
    <header className="text-white border-b">
      <NavBar/>

      <div className=" lg:py-4 flex items-center xl:justify-start flex-col gap-5 mb-10 lg:flex-row">
        <div className="w-44 sm:w-48 lg:w-56 lg:ml-8">
          <img src={Vitlogga} alt="HE-logga" className="object-contain" />
        </div>
        <div className="text-center xl:ml-28 xl:self-center 2xl:ml-60">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold">
            Henrik Ek - Personlig tränare
          </h1>
          <h2 className="sm:text-2xl lg:mt-3 xl:text-4xl">
            Tillsammans skapar vi ditt bästa jag
          </h2>
        </div>
        <div className="flex flex-row gap-5 self-end mr-40">
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
    </header>
  );
}

export default Header;
