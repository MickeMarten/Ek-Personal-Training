import {
  Button,
  Badge,
  Label,
  Modal,
  TextInput,
  Textarea,
  Banner,
} from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { useState } from "react";
import { FormModalProps } from "../models/ForModalProps";




function FormModal( { pktName, packages }: FormModalProps ) {
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);
  const [choosenPackage, setChoosenPackage] = useState<string>(pktName);

  function openAndCloseModal(): void {
    setModalIsActive((prevState) => !prevState);
  }
  console.log(choosenPackage);

  
  return (
    <>
    
      <Button
        gradientMonochrome="info"
        className="w-24"
        onClick={() => openAndCloseModal()}
      >
        Boka
      </Button>
      <Modal
        show={modalIsActive}
        size="md"
        popup
        onClose={openAndCloseModal}
        className="bg-slate-400 animate-fade-in"
      >
      <Modal.Header className="bg-gray900 "></Modal.Header>

        <Modal.Body className="bg-gray900">
          <div className="space-y-6 flex flex-col gap-5 mb-6">
          <h1 className="text-primary ml-16 text-3xl">Kontakta Henrik!</h1>

              <div className="mb-2 block ">
                <Label
                  htmlFor="email"
                  value="Din email"
                  className="text-primary"
                />
              <TextInput placeholder="Exempel@email.com" required />

              </div>

              <div className="text-center flex flex-col gap-3">
              <h2>Tillgängliga träningsprogram</h2>
       <div className="flex flex-wrap gap-4 w-full justify-center">
                <div className="flex gap-4 w-full flex-wrap sm:w-1/2">
                {packages && packages.length > 0 ? (
                    packages.map((pkt) => (
                      <Badge key={pkt.id} onClick={()=>setChoosenPackage(pkt.name)}>{pkt.name}</Badge>
                    ))
                  ) : (
                    <p>Oj, något hände när paketen laddades, prova igen.</p>
                  )}
                  <Badge onClick={()=>setChoosenPackage("Övrigt")}>Övrigt</Badge>
                </div>
              </div> 
            </div>
      

            <div className="max-w-md flex flex-col gap-9">
              <h3>Du har valt att kontakta Henrik angående <b className="text-green-400">{choosenPackage}</b></h3>
              <div className="mb-2 block">
                <Label
                  htmlFor="comment"
                  value="Ditt meddelande"
                  className="text-primary"
                />
              <Textarea placeholder="Hej Henrik!" required rows={4} />

              </div>
            </div>
        

            <div className="w-full flex justify-center">
              <Button className="w-24">Skicka</Button>
            </div>
          </div>
          <Banner>
            <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4">
              <div className="mx-auto flex items-center">
                <p className="flex items-center text-sm font-normal text-gray900 ">
                  <MdAnnouncement className="mr-4 h-4 w-4" />
                  Vi kommer inte att spara din data!
                </p>
              </div>
              <Banner.CollapseButton
                color="gray"
                className=" text-gray900"
              >
                <HiX className="h-4 w-4" />
              </Banner.CollapseButton>
            </div>
          </Banner>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormModal;
