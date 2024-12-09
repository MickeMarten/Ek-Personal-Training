export interface ConfirmationModalProps {
    onButtonClick: (isActive: boolean) => void;
    confirmationModalIsActive: boolean;
    setConfirmationModal: (IsActive:boolean) => void;
  }