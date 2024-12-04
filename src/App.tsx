import "./App.css";
import FooterEnd from "./components/Footer";
import Header from "./components/Header";
import Cards from "./components/Cards";
import InfoBoxes from "./components/TextInfoBoxes";
import CustomImage from "./components/CustomImage";
import dumbells from "../public/assets/images/dumbells.jpg";
import profileimage from "../public/assets/images/image0.jpeg";
import { db } from "./services/firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { TrainingPackage } from "./models/TrainingPackages";
import { ServicePackageContext } from "./models/TrainingPackages";

//Flytta qoutes
const henrikQoutes = {
  first:
    "Min filosofi är enkel, träning ska vara okomplicerad och leda till stora framgångar över tid. ",
  second:
    "Oavsett om du vill bli starkare, få mer energi i vardagen eller utmana dig själv på nya sätt, är jag här för att hjälpa dig på vägen.",
  third:
    "Träning ska vara enkel, säker och utföras konsekvent över tid för att ge resultat.",
};

export const ServiceContext = createContext<ServicePackageContext>({
  packages: [],
});


function App() {
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
      <Header />
      <main>
        
        <InfoBoxes text={henrikQoutes.second} />
        <CustomImage
          src={profileimage}
          alt="HenrikProfilePic"
          includeBtn={true}
        />
        <Cards />
        <InfoBoxes text={henrikQoutes.third} />
        <CustomImage src={dumbells} alt="PTImage" includeBtn={false} />
      </main>
      <FooterEnd />
    </ServiceContext.Provider>
  );
}

export default App;
