import CustomImage from "./CustomImage";
import CustomText from "./CustomText";
import { ImageTextBoxProps } from "../../models/ImageTextBoxProps";

function ImageTextBox({ src, alt, text, className }: ImageTextBoxProps) {
  return (
    <section className={`hidden xl:flex ${className}`}>
      <CustomText text={text} className="self-center" />
      <CustomImage src={src} alt={alt} className="" />
    </section>
  );
}

export default ImageTextBox;
