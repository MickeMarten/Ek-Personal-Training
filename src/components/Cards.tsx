import { Button, Card } from "flowbite-react";
import { useContext, useState  } from "react";
import { ServiceContext } from "../App";
import FormModal from "./FormModal";

function Cards() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const { packages } = useContext(ServiceContext);

  function readTheRightCard(cardId: string): void {
    setActiveCardId((prevCardId) => (prevCardId === cardId ? null : cardId));
  }

  return (
    <section className="py-8 ">
      <h1 className="text-center text-4xl">Träningspaket</h1>
      <div className="flex flex-row overflow-x-auto gap-9 p-4">
        {packages.map((pkt) => (
          <Card
            key={pkt.id}
            imgSrc={activeCardId === pkt.id ? undefined : pkt.imagePath}
            className="bg-gray900 flex flex-col justify-between p-6 space-y-4"
          >
            <h5 className="text-2xl font-bold tracking-tight">{pkt.name}</h5>

            {activeCardId === pkt.id ? (
              <div className="flex flex-col space-y-2 animate-fade-in">
                <h6 className="font-semibold">Detta ingår:</h6>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {pkt.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm ">{pkt.description}</p>
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
              <FormModal pktName={pkt.name} packages={packages} />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Cards;
