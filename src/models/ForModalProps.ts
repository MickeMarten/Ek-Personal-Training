import { TrainingPackage } from "./TrainingPackages";
import { IconType } from 'react-icons'; 
export interface FormModalProps {
    packages: TrainingPackage[]; 
    pktName?: string;
    modalHasBtn: boolean;
    text: string;
    icon?:IconType
  }