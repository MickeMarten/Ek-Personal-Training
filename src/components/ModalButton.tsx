import { Button } from "flowbite-react";
import { CustomButton } from "../models/ModalButtonProps";

function ModalButton({ btnText }: CustomButton) {
  return (
    <>
      <Button gradientMonochrome="info" className="w-24">
        {btnText}
      </Button>
    </>
  );
}

export default ModalButton;
