import { Blockquote } from "flowbite-react";

import { TextInfoBoxesProps } from "../models/CustomTextInfoProps";

function InfoBoxes({text, className}:TextInfoBoxesProps) {
  return (
    <div className={`px-4 py-4 ${className ? className : ""}`}>
   <div className="w-full max-w-2xl mx-auto p-6 border-l-4 border-green-400 bg-gray-900 dark:bg-gray-800 rounded-md">
  <Blockquote className={`text-lg italic font-semibold text-white ${className ? className : "italic"}`}>
    {text}
  </Blockquote>
</div>

    </div>
  );
}

export default InfoBoxes;
