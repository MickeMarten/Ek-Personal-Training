import { FaLinkedin, FaInstagram } from "react-icons/fa";

function SocialLinks ()  {
  return (
    <div className="bg-black flex flex-row justify-center items-center gap-5 h-20 mt-5 md:gap-10">
      <a
        href="https://www.linkedin.com/in/henrik-ek-062856226/?locale=en_US&trk=people-guest_people_search-card"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-4xl md:text-5xl hover:text-gray-400"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/henrikekpersonaltraining/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-4xl md:text-5xl hover:text-gray-400"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;
