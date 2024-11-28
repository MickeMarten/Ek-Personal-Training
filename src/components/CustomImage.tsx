import { CustomImageProps } from "../models/CustomImageProps";

function CustomImage({ src, alt }: CustomImageProps) {
    return (
      <div className="px-4 py-4">
        
          <img 
            src={src} 
            alt={alt} 
            className="w-full max-w-2xl mx-auto  p-6 border-l-4 border-green-400 bg-gray-900 dark:bg-gray-800 rounded-md" 
          />
        
      </div>
    );
  }
  
  export default CustomImage;