import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Vitlogga from "../../assets/images/vitlogga.png";
import NavBar from "./Navbar";
import SocialLinks from "../sociallinks/SocialLinks";
function Header() {


  return (
    <header className="text-white border-b grid grid-cols-1 place-items-center">
      <NavBar/>
      <div className="flex flex-col xl:flex-row gap-2 w-full justify-center xl:mr-48 ">
        <div className="w-44 sm:w-48 self-center lg:w-56 xl:relative xl:right-2 2xl:right-20">
          <img src={Vitlogga} alt="HE-logga" className="" />
        </div>
        <div className="self-center">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold">
            Henrik Ek - Personlig tränare
          </h1>
          <h2 className="sm:text-2xl lg:mt-3 xl:text-4xl text-center">
            Tillsammans skapar vi ditt bästa jag
          </h2>
        </div>

 <SocialLinks/>

    
      </div>
    </header>
  );
}

export default Header;
