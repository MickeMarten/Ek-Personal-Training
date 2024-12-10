import FooterEnd from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import CardsSection from "../../components/sections/CardsSection";
import InfoBoxes from "../../components/sections/CustomText";
import CustomImage from "../../components/sections/CustomImage";
import dumbells from "/public/assets/images/dumbells.jpg";
import HepProfile from "../../assets/images/henrik.jpeg"
import { db } from "../../services/firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { TrainingPackage } from "../../models/TrainingPackages";
import { ServicePackageContext } from "../../models/TrainingPackages";
import ImageTextBox from "../../components/sections/ImageTextBox";
import ProfileSection from "../../components/sections/ProfileSection";
import HomeSEO from "./HomeSEO";
import { henrikQoutes } from "../../assets/qoutes";



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
        <InfoBoxes text={henrikQoutes.second} className="xl:hidden" />
        <ImageTextBox
          src={dumbells}
          alt="image"
          text={henrikQoutes.second}
          className="xl:mx-20 xl:mb-12 2xl:mx-28 justify-center flex-row-reverse xl:mt-10"
        />

        <ProfileSection src={HepProfile} alt="Henrik Ek profilbild" />
        <CardsSection />
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
