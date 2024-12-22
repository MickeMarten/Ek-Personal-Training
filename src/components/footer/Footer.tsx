import { Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
/* import VitLogga from "../../public/assets/images/vitlogga.png"; */
import { Element } from "react-scroll";

function FooterEnd() {
  return (
    <Footer container className="w-full bg-gray900 rounded-b-sm border-t py-8">
      <div className="w-full text-white">
        <div className="sm:flex sm:justify-between sm:items-center">
          <a href="/" >
            <img src="/assets/images/vitlogga.png" alt="HE-logo" className="h-14  mb-4 sm:mb-0" />
          </a>

          <div className="sm:flex gap-12">
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
              <ul>
                <Footer.Link href="tel:+46736754018">+46736754018</Footer.Link>
                <Footer.Link href="mailto:Kontakt@henrikekpt.se">
                  Kontakt@henrikekpt.se
                </Footer.Link>
                
              </ul>
            </div>

            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold mb-2">Sociala Medier</h3>
              <div className="flex gap-4">
                <Footer.Icon
                  href="https://www.instagram.com/henrikekpersonaltraining/"
                  className="text-white hover:text-gray-400"
                  icon={BsInstagram}
                />
                <Footer.Icon
                  href="https://www.linkedin.com/in/henrik-ek-062856226/?locale=en_US&trk=people-guest_people_search-card"
                  className="text-white hover:text-gray-400"
                  icon={BsLinkedin}
                />
              </div>
            </div>

            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold mb-2">Samarbeten</h3>
              <ul>
                <Footer.Link
                  href="https://example.com"
                  className=" hover:underline"
                >
                  Example Partner 1
                </Footer.Link>
                <Footer.Link
                  href="https://example.com"
                  className=" hover:underline"
                >
                  Example Partner 2
                </Footer.Link>
              </ul>
            </div>
          </div>

        </div>

        <Footer.Divider className="my-6 border-gray-700" />

        <Footer.Copyright
          href="https://mikael-martensson.se/"
          by="MickeMarten™"
          year={2024}
          className="text-center text-gray-400"
        />
      </div>
      <Element name="Footer"></Element>

    </Footer>
  );
}

export default FooterEnd;
