import { Button } from "flowbite-react";
import { ConfirmationModalProps } from "../../models/ConfirmationModalProps";

function ConfirmationModal({onButtonClick, confirmationModalIsActive, setConfirmationModal}:ConfirmationModalProps ){

    return (
        <div
        className={confirmationModalIsActive
          ? "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
          : "hidden"}
      >
        <div className="bg-slate-900 p-6 rounded-lg text-white text-center w-3/4 md:w-1/2">
          <p className="mb-4">
            Tack för du mailar Henrik Ek personligträning, vi hör av oss så
            fort vi kan!
          </p>
          <Button
            onClick={() => {
              onButtonClick(false)
              setConfirmationModal(false);
            }}
            gradientMonochrome="info"
            className="w-full"
          >
            Ok
          </Button>
        </div>
      </div>
    )
}

export default ConfirmationModal;