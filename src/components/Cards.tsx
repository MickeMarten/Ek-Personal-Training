import { Button, Card } from "flowbite-react";
import { useContext, useState } from "react";
import { ServiceContext } from "../App";
import FormModal from "./FormModal";

function Cards() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const { packages } = useContext(ServiceContext);

  function readTheRightCard(cardId: string): void {
    setActiveCardId((prevCardId) => (prevCardId === cardId ? null : cardId));
  }

  return (
    <section className="py-8 bg-black w-full xl:flex xl:justify-center xl:mt-10 xl:mb-10">
      <div className="xl:w-3/5">

        <h1 className="text-center text-6xl mb-5">Träningspaket</h1>
        <div className="flex flex-row overflow-x-scroll gap-9 p-4 xl:overflow-hidden xl:grid xl:grid-cols-2 xl:gap-10">
          {packages.map((pkt) => (
            <Card
              key={pkt.id}
              imgSrc={activeCardId === pkt.id ? undefined : pkt.imagePath}
              className="relative bg-gray900 flex flex-col justify-between p-6 space-y-4 w-96 mx-auto"
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white text-sm xl:text-lg font-bold px-3 py-1 rounded-lg shadow-lg">
                {pkt.price}kr
              </div>

              <h5 className="text-2xl font-bold tracking-tight xl:text-4xl">{pkt.name}</h5>

              {activeCardId === pkt.id ? (
                <div className="flex flex-col space-y-2 animate-fade-in">
                  <h6 className="font-semibold xl:text-3xl">Detta ingår:</h6>
                  <ul className="list-disc pl-5 space-y-1 text-sm xl:text-xl">
                    {pkt.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-sm xl:text-xl">{pkt.description}</p>
              )}



              <div className="flex flex-row gap-8 justify-center xl:gap-20 mt-auto">
                <Button
                  gradientMonochrome="info"
                  className="w-24"
                  onClick={() => readTheRightCard(pkt.id)}
                >
                  {activeCardId === pkt.id ? "Tillbaka" : "Läs mer"}
                </Button>
                <FormModal pktName={pkt.name} packages={packages} />
              </div>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Cards;
