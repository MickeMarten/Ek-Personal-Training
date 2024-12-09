import FooterEnd from "../../components/Footer";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import InfoBoxes from "../../components/CustomText";
import CustomImage from "../../components/CustomImage";
import dumbells from "/public/assets/images/dumbells.jpg";
import HepProfile from "../../assets/images/henrik.jpeg"
import { db } from "../../services/firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { TrainingPackage } from "../../models/TrainingPackages";
import { ServicePackageContext } from "../../models/TrainingPackages";
import ImageTextBox from "../../components/ImageTextBox";
import ProfileImage from "../../components/ProfileImage";
import BgImage from "../../components/BgImage";
import HomeSEO from "./HomeSEO";

//Flytta qoutes
export const henrikQoutes = {
  first:
    "Min filosofi är enkel, träning ska vara okomplicerad och leda till stora framgångar över tid. ",
  second:
    "Oavsett om du vill bli starkare, få mer energi i vardagen eller utmana dig själv på nya sätt, är jag här för att hjälpa dig på vägen.",
  third:
    "Mitt mål är att hjälpa dig att hitta rörelseglädjen i vardagen och skapa hållbara vanor som leder till ett friskare och starkare liv.",
};

export const ServiceContext = createContext<ServicePackageContext>({
  packages: [],
});

function Home() {
  const [packages, setPackages] = useState<TrainingPackage[]>([]);

  useEffect(() => {
    const fetchTrainingPackages = async () => {
      const trainingPackagesRef = collection(db, "trainingPackages");
      const querySnapshot = await getDocs(trainingPackagesRef);

      const packages: TrainingPackage[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        packages.push({
          id: doc.id,
          name: data.name,
          description: data.description,
          price: data.price,
          duration: data.duration,
          active: data.active,
          includes: data.includes,
          imagePath: data.imagePath,
        });
      });

      setPackages(packages);
    };

    fetchTrainingPackages();
  }, []);

  return (
    <ServiceContext.Provider value={{ packages }}>
      <HomeSEO />
      <Header />
      <main className="">
        <BgImage />
        <InfoBoxes text={henrikQoutes.second} className="xl:hidden" />
        <ImageTextBox
          src={dumbells}
          alt="image"
          text={henrikQoutes.second}
          className="xl:mx-20 xl:mb-12 2xl:mx-28 justify-center flex-row-reverse xl:mt-10"
        />

        <ProfileImage src={HepProfile} alt="Henrik Ek profilbild" />
        <Cards />
        <InfoBoxes text={henrikQoutes.third} className="xl:hidden" />
        <CustomImage src={dumbells} alt="image" className="xl:hidden" />
        <ImageTextBox
          src={dumbells}
          alt="image"
          className=" xl:mx-20 xl:mb-12 2xl:mx-28 2xl:mb-14 justify-center"
          text={henrikQoutes.third}
        />
      </main>
      <FooterEnd />
    </ServiceContext.Provider>
  );
}

export default Home;
