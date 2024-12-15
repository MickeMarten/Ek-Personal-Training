import { Blockquote } from "flowbite-react";

import { TextInfoBoxesProps } from "../../models/CustomTextInfoProps";

function CustomText({ text, className }: TextInfoBoxesProps) {
  return (
    <section className={`px-4 py-5 ${className ? className : ""}`}>
      <div className=" max-w-[450px] mx-auto p-6 border-l-4 border-green-400 bg-gray900 rounded-md lg:min-w-[450px] lg:flex lg:justify-start xl:text-3xl ">
        <Blockquote
          className={`text-lg xl:text-2xl font-semibold text-primary xl:min-w-96 ${className ? className : ""}`}
        >
          {text}
        </Blockquote>
      </div>
    </section>
  );
}

export default CustomText;
