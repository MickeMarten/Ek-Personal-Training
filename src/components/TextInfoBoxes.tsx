import { Blockquote } from "flowbite-react";

import { TextInfoBoxesProps } from "../models/CustomTextInfoProps";

function InfoBoxes({text, className}:TextInfoBoxesProps) {
  return (
    <div className={`px-4 py-4 ${className ? className : ""}`}>
   <div className="w-full max-w-96 mx-auto p-6 border-l-4 border-green-400 bg-gray900 rounded-md lg:min-w-[600px] lg:flex lg:justify-center xl:text-3xl ">
  <Blockquote className={`text-lg xl:text-2xl font-semibold text-primary max-w-96 ${className ? className : ""}`}>
    {text}
  </Blockquote>
</div>

    </div>
  );
}

export default InfoBoxes;
