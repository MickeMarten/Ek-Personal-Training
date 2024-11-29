import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { TrainingPackage } from '../models/TrainingPackages';


export async function fetchTrainingPackages(): Promise<TrainingPackage[]> {
    const trainingPackagesRef = collection(db, "trainingPackages");
    const querySnapshot = await getDocs(trainingPackagesRef);
     const packages:TrainingPackage[]= [];
      querySnapshot.forEach(doc => {
      const data = doc.data();
      packages.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        price: data.price,
        duration: data.duration,
        active: data.active,
        includes: data.includes,
        imagePath: data.imagePath
      });
      console.log(data);
    });
    return packages;
  }