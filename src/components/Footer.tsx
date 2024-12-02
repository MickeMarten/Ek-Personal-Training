import { Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import vitLogga from "/assets/images/vitlogga.png";

function FooterEnd() {
  return (
    <Footer container className=" w-full bg-gray900 rounded-b-sm border-t">
      <div className="">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
         <a href="/"><img  src={vitLogga} alt="HE-logo" className="h-16 mb-3" /></a> 
          <Footer.LinkGroup className="flex flex-row gap-4">
            <Footer.Link href="tel:+46736754018">+46736754018</Footer.Link>
            <Footer.Link href="mailto:Kontakt@henrikekpt.se">
              Kontakt@henrikekpt.se
            </Footer.Link>
            <Footer.Icon
              href="https://instagram.com"
              className=""
              icon={BsInstagram}
            />

            <Footer.Icon
              href="https://linkedin.com"
              className=""
              icon={BsLinkedin}
            />
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="https://mikael-martensson.se/"
          by="MickeMarten™"
          year={2022}
          className=""
        />
      </div>
    </Footer>
    
  );
}

export default FooterEnd;

