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
import ModalButton from "./ModalButton";

function FormModal() {
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);
  const [choosenPackage, setChoosenPackage] = useState("");

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
        className="bg-white animate-fade-in"
      >
        <Modal.Header className="bg-gray-900" />

        <Modal.Body className="bg-gray-900 flex flex-col gap-4">
          <div className="space-y-6 text-white">
            <h3 className="text-xl font-medium">Kontakta Henrik!</h3>
            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="email"
                  value="Your email"
                  className="text-white"
                />
              </div>
              <TextInput includeBtn="email" placeholder="Exempel@email.com" required />
            </div>
            <div className="text-center flex flex-col gap-3">
              <h2>Vilket paket är du intresserad av?</h2>
              <div className="flex flex-wrap gap-4 w-full justify-center">
                <div className="flex gap-4 w-full sm:w-1/2">
                  <Badge
                    color="info"
                    onClick={() => setChoosenPackage("Träningsprogram")}
                  >
                    Träningsprogram
                  </Badge>
                  <Badge
                    color="info"
                    onClick={() => setChoosenPackage("Onlineträning")}
                  >
                    Onlineträning
                  </Badge>
                </div>
                <div className="flex gap-4 w-full sm:w-1/2">
                  <Badge
                    color="info"
                    onClick={() => setChoosenPackage("Personligträning")}
                  >
                    Personligträning
                  </Badge>
                  <Badge
                    color="info"
                    onClick={() => setChoosenPackage("Övrigt")}
                  >
                    Övrigt
                  </Badge>
                </div>
              </div>
            </div>

            <div className="max-w-md">
              <h3>Du har valt att kontakta Henrik angående <small className="">{choosenPackage.toLocaleLowerCase()}</small></h3>
              <div className="mb-2 block">
                <Label
                  htmlFor="comment"
                  value="Ditt meddelande"
                  className="text-white"
                />
              </div>
              <Textarea includeBtn="comment" placeholder="" required rows={4} />
            </div>

            <div className="w-full">
              <Button>Skicka</Button>
            </div>
          </div>
          <Banner>
            <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
              <div className="mx-auto flex items-center">
                <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <MdAnnouncement className="mr-4 h-4 w-4" />
                  Vi kommer inte att spara din data!
                </p>
              </div>
              <Banner.CollapseButton
                color="gray"
                className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
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
