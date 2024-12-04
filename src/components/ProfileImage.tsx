import { Button } from "flowbite-react";
import { useState } from "react";
import { CustomImageProps } from "../models/CustomImageProps";
import InfoBoxes from "./CustomText";

function ProfileImage({ src, alt }: CustomImageProps) {
  const [showInfoText, setShowInfoText] = useState<boolean>(false);

  return (
    <>
      {showInfoText ? (
        <div className="flex flex-col animate-fade-in sm:tracking-widest text-lg sm:text-xl lg:text-xl xl:text-xl">
          <InfoBoxes
            className="white text-md transition-opacity ease-in duration-10000 opacity-100"
            text="Jag heter Henrik Ek och är licensierad personlig tränare med en bakgrund som elitspelare i rugby. Under min karriär har jag representerat Sverige i 20 landskamper och spelat på hög nivå både i Sverige och internationellt.Min erfarenhet har lärt mig att rörelse inte bara är för idrottare – det är något som alla kan och bör ha glädje av."
          />
          <Button
            className="w-36 self-center mt-4"
            onClick={() => setShowInfoText(false)}
          >
            Tillbaka
          </Button>
        </div>
      ) : (
        <div className="px-4 py-4 flex flex-col gap-2">
          <Button
            className="w-36 self-center mt-4"
            gradientMonochrome="info"
            onClick={() => setShowInfoText(true)}
          >
            Om mig
          </Button>
          <img
            src={src}
            alt={alt}
            className="w-full max-w-md mx-auto p-6 border-l-4 border-green-400 bg-gray900 rounded-md"
          />
        </div>
      )}
    </>
  );
}

export default ProfileImage;
