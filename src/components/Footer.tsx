import { Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

function FooterEnd() {
  return (
    <Footer container className="rounded-none bg-gray-900 border-t mt-4">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-evenly items-center sm:items-start gap-5">
         {/*  <div className="">
            <img
              src={Vitlogga}
              alt="EKLOGGA"
              className="h-36" 
            />
          </div> */}

          <div className="flex flex-row sm:flex-row sm:gap-12 justify-evenly w-full gap-20 ">
            <div className="text-white">
              <Footer.Title title="Kontakt" className="text-white  border-b w-16" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="tel:+46736754018">+46736754018</Footer.Link>
                <Footer.Link href="mailto:Kontakt@henrikekpt.se">Kontakt@henrikekpt.se</Footer.Link>
              </Footer.LinkGroup>
            </div>
         
            <div className="text-white">
              <Footer.Title title="Följ mig" className="text-white border-b" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Icon href="https://instagram.com" icon={BsInstagram} />
                <Footer.Icon href="https://linkedin.com" icon={BsLinkedin} />
               
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
     
    </Footer>
  );
}

export default FooterEnd;

     /*      <Footer container className="bg-black rounded-none" >
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
       
          
            <img src={Vitlogga} alt="" className="max-w-20 h-14 sm:w-40 sm:h-40" />
            <Footer.LinkGroup className="text-white">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="https://mikael-Martensson.se" by="MikeMarten™" year={2024} />
        </div>
      </Footer>
 */