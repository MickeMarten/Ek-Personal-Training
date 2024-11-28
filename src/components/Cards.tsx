import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { TrainingPackage } from "../models/TrainingPackages";
import { fetchTrainingPackages } from "../services/firebaseService"
import FormModal from "./FormModal";

function Cards() {
  const [packages, setPackages] = useState<TrainingPackage[]>([]);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  async function loadPackages() {
    const fetchedPackages = await fetchTrainingPackages();
    setPackages(fetchedPackages);
  }

  function readTheRightCard(cardId: string): void {
    setActiveCardId((prevCardId) => (prevCardId === cardId ? null : cardId));
  }

  useEffect(() => {
    loadPackages();
  }, []);

  return (
    <section className="py-8">
      <div className="flex flex-row overflow-x-auto gap-9 p-4">
        {packages.map((pkt) => (
          <Card
            key={pkt.id}
            className="bg-slate-900 text-white flex flex-col justify-between p-6 space-y-4 transition-transform transform duration-500 ease-out scale-100 hover:scale-105"
          >
            <h5 className="text-2xl font-bold tracking-tight">{pkt.name}</h5>
            {activeCardId === pkt.id ? (
              <p className="text-sm">{pkt.description}</p> 
            ) : (
              <div className="flex flex-col space-y-2">
                <h6 className="font-semibold">Detta ingår:</h6>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {pkt.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col items-center mt-auto">
              <small className="text-lg">{pkt.price}kr</small>
            </div>
            <div className="flex flex-row gap-10">
              <Button
                gradientMonochrome="info"
                className="w-24"
                onClick={() => readTheRightCard(pkt.id)}
              >
                {activeCardId === pkt.id ? "Tillbaka" : "Läs mer"}
              </Button>
              <FormModal/>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Cards;
