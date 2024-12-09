import {
  Badge,
  Banner,
  Button,
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { useState } from "react";
import { FormModalProps } from "../../models/ForModalProps";
import emailjs from "@emailjs/browser";
import React from "react";
import ConfirmationModal from "./ConfirmationModal";
function FormModal(
  { pktName, packages, text, icon, modalHasBtn }: FormModalProps,
) {
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);
  const [confirmationModalIsActive, setConfirmationModalIsActive] = useState<
    boolean
  >(false);
  const [choosenPackage, setChoosenPackage] = useState<string | undefined>(
    pktName,
  );
  const [userEmail, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);

  function openAndCloseModal(): void {
    setModalIsActive((prevState) => !prevState);
    console.log("Hallå");
  }

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    setUserEmail(email);
    if (email.length === 0) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(validateEmail(email));
    }
  }

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    if (!emailIsValid || userEmail.length < 3 || !userEmail.includes("@")) {
      console.error("E-posten är ogiltig, försök igen.");
      return;
    }

    setConfirmationModalIsActive(true);

    try {
      emailjs.send(
        "service_mzd78us",
        "template_jw8ycop",
        {
          user_email: userEmail,
          choosen_package: choosenPackage,
          message: message,
        },
        "ONXY_44hxPL1AZHT2",
      );
    } catch (error) {
      console.error("Något gick fel med mailservice", error);
    }

    console.log("Email skickades", userEmail, choosenPackage, message);
  }

  return (
    <>
      {modalHasBtn
        ? (
          <Button
            gradientMonochrome="info"
            className="w-24"
            onClick={() => openAndCloseModal()}
          >
            {text}
            {icon && React.createElement(icon, { className: "ml-2 mt-1" })}
          </Button>
        )
        : (
          <small onClick={() => openAndCloseModal()}>
            {icon && React.createElement(icon, { className: "" })} {text}
          </small>
        )}

      <Modal
        show={modalIsActive}
        size="md"
        popup
        onClose={openAndCloseModal}
        className="bg-slate-400 animate-fade-in"
      >
        <Modal.Body className="bg-gray900 rounded-md ">
          <div className="space-y-6 flex flex-col mb-6 mt-8">
            <h1 className="text-primary text-center text-3xl">
              Kontakta Henrik!
            </h1>

            <div className="mb-2 block ">
              <Label
                htmlFor="email"
                value="Din email"
                className="text-primary"
              />
              <TextInput
                placeholder="Exempel@Email.com"
                type="email"
                required
                color={emailIsValid ? "success" : "failure"}
                onChange={handleEmailChange}
              />
              {!emailIsValid && (
                <span className="text-sm text-red-500">
                  Email är inte giltig!
                </span>
              )}
            </div>

            <div className="text-center flex flex-col gap-3">
              <h2>Tillgängliga träningsprogram</h2>
              <div className="flex flex-wrap gap-4 w-full justify-center">
                <div className="flex gap-4 w-full flex-wrap">
                  {packages && packages.length > 0
                    ? (
                      packages.map((pkt) => (
                        <Badge
                          key={pkt.id}
                          onClick={() => setChoosenPackage(pkt.name)}
                        >
                          {pkt.name}
                        </Badge>
                      ))
                    )
                    : <p>Oj, något hände när paketen laddades, prova igen.</p>}
                  <Badge onClick={() => setChoosenPackage("Övrigt")}>
                    Övrigt
                  </Badge>
                </div>
              </div>
            </div>

            <div className="max-w-md flex flex-col gap-9">
              <h3>
                Du har valt att kontakta Henrik angående <br></br>
                <b className="text-green-400">{choosenPackage}</b>
              </h3>
              <div className="mb-2 block">
                <Label
                  htmlFor="comment"
                  value="Ditt meddelande"
                  className="text-primary"
                />
                <Textarea
                  required
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full flex justify-between">
              <Button
                gradientMonochrome="info"
                className="w-24"
                onClick={() => openAndCloseModal()}
              >
                Avbryt
              </Button>
              <Button
                gradientMonochrome="info"
                className="w-24"
                onClick={sendEmail}
              >
                Skicka
              </Button>
            </div>
          </div>
          <Banner>
            <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-2">
              <div className="mx-auto flex items-center">
                <p className="flex items-center text-sm font-normal text-gray900 ">
                  <MdAnnouncement className="mr-4 h-4 w-4" />
                  Vi kommer inte att spara din data!
                </p>
              </div>
              <Banner.CollapseButton color="gray" className=" text-gray900">
                <HiX className="h-4 w-4" />
              </Banner.CollapseButton>
            </div>
          </Banner>
          <ConfirmationModal
            onButtonClick={setModalIsActive}
            confirmationModalIsActive={confirmationModalIsActive}
            setConfirmationModal={setConfirmationModalIsActive}
          />
      
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormModal;
