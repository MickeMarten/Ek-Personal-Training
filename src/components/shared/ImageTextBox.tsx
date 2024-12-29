import CustomImage from "./CustomImage";
import CustomText from "./CustomText";
import { ImageTextBoxProps } from "../../models/ImageTextBoxProps";

function ImageTextBox({ src, alt, text, className }: ImageTextBoxProps) {
  return (
    <section className={` ${className} hidden xl:flex xl:mx-20 xl:mb-12 2xl:mx-28`}>
      <CustomText text={text} className="self-center" />
      <CustomImage src={src} alt={alt} className="" />
    </section>
  );
}

export default ImageTextBox;
