export interface TrainingPackage {
    id: string; 
    name: string; 
    description: string; 
    price: number | string; 
    duration: number; 
    active: boolean; 
    includes: string[]; 
    imagePath: string;
  }


  export interface ServicePackageContext{
    packages:TrainingPackage[];

  }
