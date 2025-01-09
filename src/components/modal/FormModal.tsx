import {
  Badge,
  Button,
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import Annoncment from "../gdpr/Announcement";
import { useState } from "react";
import { FormModalProps } from "../../models/ForModalProps";
import emailjs from "@emailjs/browser";
import React from "react";
import ConfirmationModal from "./ConfirmationModal";
function FormModal(
  { pktName, packages, text, icon }: FormModalProps,
) {
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);
  const [confirmationModalIsActive, setConfirmationModalIsActive] = useState<
    boolean
  >(false);
  const [choosenPackage, setChoosenPackage] = useState<string>(
    pktName || "Övrigt",
  );
  const [userEmail, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [messeageIsValid, setMesseageIsValid] = useState<boolean>(true);

  function openAndCloseModal(): void {
    setModalIsActive((prevState) => !prevState);
  }

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
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

    if (
      !emailIsValid || userEmail.length < 3 || !userEmail.includes("@")
    ) {
      setEmailIsValid(false);
      setTimeout(() => {
        setEmailIsValid(true);
      }, 4000);
      console.error("Email is invalid");

      return;
    }

    if (message.trim().length == 0) {
      setMesseageIsValid(false);
      console.log("Message may not be empty");

      setTimeout(() => {
        setMesseageIsValid(true);
      }, 4000);
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
      console.error("Email service is failing", error);
    }

    console.log("Email sent with loot:", userEmail, choosenPackage, message);
    setMessage("");
    setUserEmail("");
  }

  return (
    <>
      <Button
        gradientMonochrome="info"
        className="w-24"
        onClick={() => openAndCloseModal()}
      >
        {text}
        {icon && React.createElement(icon, { className: "ml-2 mt-1" })}
      </Button>

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
                htmlFor="email1"
                value="Din email"
                className="text-primary"
                
              />
              <TextInput
              rightIcon={HiMail}
                placeholder="Exempel@Email.com"
                id="email1"
                type="email"
                required
                color={emailIsValid ? "success" : "failure"}
                onChange={handleEmail}
              />
              {!emailIsValid && (
                <div>
                  <span className=" text-red-500 animate-fade-in">
                    Email är inte giltig!
                  </span>
                </div>
              )}
            </div>

            <div className="text-center flex flex-col gap-3">
              <h2>Tillgängliga träningspaket</h2>
              <div className="flex flex-wrap gap-4 w-full justify-center">
                <div className="flex gap-4 w-full flex-wrap">
                  {packages && packages.length > 0
                    ? (
                      packages.map((pkt) => (
                        <Badge
                        className="cursor-pointer"
                          key={pkt.id}
                          onClick={() => setChoosenPackage(pkt.name)}

                        >
                          {pkt.name}
                        </Badge>
                      ))
                    )
                    : <p>Oj, något hände när paketen laddades, prova igen.</p>}
                  <Badge className="cursor-pointer" onClick={() => setChoosenPackage("Övrigt")}>
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
                id="comment"
                  required={true}
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div
              className={messeageIsValid
                ? "hidden"
                : "block text-red-500 animate-fade-in"}
            >
              <span>
                Glöm inte att skriva ett meddelande!
              </span>
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
          <Annoncment/>

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
