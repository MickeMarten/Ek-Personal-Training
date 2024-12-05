import { ReactNode } from "react";

export interface ImageTextBoxProps {
    src: string; 
    alt: string;  
    text :string | ReactNode;
    className?: string; 

  }