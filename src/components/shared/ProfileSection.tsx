import { Button } from "flowbite-react";
import { useState } from "react";
import { CustomImageProps } from "../../models/CustomImageProps";
import InfoBoxes from "./CustomText";
import { Element } from "react-scroll";

function ProfileSection({ src, alt }: CustomImageProps) {
  const [showInfoText, setShowInfoText] = useState<boolean>(false);

  return (
    <section className="xl:flex xl:flex-row-reverse xl:justify-center xl:mr-96"> 
          <Element name="About"></Element>

      {showInfoText ? (
        <div className="flex flex-col animate-fade-in text-lg sm:text-xl lg:text-xl xl:text-xl leading-relaxed sm:tracking-wide ">
          <InfoBoxes
            className="white text-md transition-opacity ease-in duration-10000 opacity-100"
            
            text={
              <>
                Jag heter Henrik Ek och är licensierad personlig tränare med en bakgrund som elitspelare i rugby. <br />
                Under min karriär har jag representerat Sverige i 20 landskamper och spelat på hög nivå både i Sverige och internationellt. <br />
                Min erfarenhet har lärt mig att rörelse inte bara är för idrottare – det är något som alla kan och bör ha glädje av.
              </>}
          />
          <Button
            size="lg"
            gradientMonochrome="info"
            className="w-36 self-center mt-4"
            onClick={() => setShowInfoText(false)}
          >
            Tillbaka
          </Button>
        </div>
      ) : (
        <div className="px-4 py-4 flex flex-col gap-4 ">
     
          <img
            src={src}
            alt={alt}
            className="w-full max-w-md mx-auto p-6 border-l-4 border-green-400 bg-gray-900 rounded-md shadow-lg"
          />
               <Button
            size="lg"
            className="w-36 self-center mt-4"
            gradientMonochrome="info"
            onClick={() => setShowInfoText(true)}
          >
            Om mig
          </Button>
        </div>
      )}
      <div className="hidden xl:block  xl:opacity-5 xl:w-96 xl:self-center pr-24">
      <img
        src="/assets/images/vitlogga.png"
        alt="Bakgrundslogotyp"
        className="w-auto h-auto object-contain"
      />
    </div>
    </section>
  );
}

export default ProfileSection;
