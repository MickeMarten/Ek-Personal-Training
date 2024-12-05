import Vitlogga from "../../public/assets/images/vitlogga.png";

function BgImage() {
  return (
    <div className="hidden xl:absolute xl:inset-x-0 xl:top-[950px] xl:left-16 xl:z-0 xl:flex xl:items-center xl:justify-center xl:opacity-5 xl:w-96">
      <img
        src={Vitlogga}
        alt="Bakgrundslogotyp"
        className="w-auto h-auto object-contain"
      />
    </div>
  );
}

export default BgImage;
