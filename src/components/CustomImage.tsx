import { Button } from "flowbite-react";
import { useState } from "react";
import { CustomImageProps } from "../models/CustomImageProps";
import InfoBoxes from "./TextInfoBoxes";

function CustomImage({ src, alt, includeBtn }: CustomImageProps) {
  const [showInfoText, setShowInfoText] = useState<boolean>(false);

  return (
    <>
      {showInfoText ? (
        <div className="flex flex-col animate-fade-in ">
          <InfoBoxes
            className="white text-md transition-opacity ease-in duration-10000 opacity-100 "
            text="Henrik Ek är en utbildad personlig tränare (PT) med gedigen erfarenhet inom elitidrott. Han har spelat rugby på hög nivå i England och representerat det svenska landslaget. Med sin expertis från både internationella tävlingar och nationell nivå, erbjuder Henrik en unik träningsbakgrund, vilket gör honom till en stark resurs för dem som vill nå sina träningsmål"
          />
          <Button className="w-36 self-center mt-4" onClick={() => setShowInfoText(false)}>
            Tillbaka
          </Button>
        </div>
      ) : (
        <div className="px-4 py-4 flex flex-col gap-2 ">
          <img
            src={src}
            alt={alt}
            className="w-full max-w-2xl mx-auto p-6 border-l-4 border-green-400 bg-gray900 rounded-md"
          />
          {includeBtn ? (
            <Button className="w-36 self-center"  gradientMonochrome="info" onClick={() => setShowInfoText(true)}>
              Om mig
            </Button>
          ) : null}
        </div>
      )}
    </>
  );
}

export default CustomImage;
