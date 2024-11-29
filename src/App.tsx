import "./App.css";
import FooterEnd from "./components/Footer";
import Header from "./components/Header";
import Cards from "./components/Cards";
import InfoBoxes from "./components/TextInfoBoxes";
import CustomImage from "./components/CustomImage";
import dumbells from "../public/assets/images/dumbells.jpg"
import profileimage from "../public/assets/images/image0.jpeg"

const henrikQoutes  = {
  first: "Min filosofi är enkel, träning ska vara okomplicerad och leda till stora framgångar över tid. ",
  second: "Oavsett om du vill bli starkare, få mer energi i vardagen eller utmana dig själv på nya sätt, är jag här för att hjälpa dig på vägen.",
  third: "Träning ska vara enkel, säker och utföras konsekvent över tid för att ge resultat.",



}

function App() {
  return (
    <>
      <Header />
      <main> 
      <InfoBoxes text={henrikQoutes.second}/>
      <CustomImage src={profileimage} alt="HenrikProfilePic"/>
      <Cards />
      <InfoBoxes text={henrikQoutes.third} />
      <CustomImage src={dumbells} alt="PTImage"/>
      </main>
      <FooterEnd />
      
    </>
  );
}

export default App;
