import { CustomImageProps } from "../../models/CustomImageProps";

function CustomImage({ src, alt, className }: CustomImageProps) {
  return (
    <section
      className={`px-4 py-4 flex flex-col gap-2 ${className ? className : ""}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full max-w-md mx-auto p-6 border-l-4 border-green-400 bg-gray900 rounded-md h-auto xl:max-w-xl"
      />
    </section>
  );
}

export default CustomImage;
