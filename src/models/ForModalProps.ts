import { TrainingPackage } from "./TrainingPackages";
import { IconType } from 'react-icons'; 
export interface FormModalProps {
    packages: TrainingPackage[]; 
    pktName?: string;
    modalIsBtn?: boolean;
    text: string;
    icon?:IconType;
  }