// ImagePreviewGrid.tsx
import { IoCloseCircle } from "react-icons/io5";
import styles from "./ImagePreviewGrid.module.css";

type ImageType = File | string;

interface ImagePreviewProps {
  attachedImages: ImageType[];
  setAttachedImages: React.Dispatch<React.SetStateAction<File[]>>;
}

export const ImagePreviewGrid = ({
  attachedImages,
  setAttachedImages,
}: ImagePreviewProps) => {
  const getImageSrc = (image: ImageType): string => {
    if (image instanceof File) {
      return URL.createObjectURL(image);
    }
    return image;
  };

  const handleRemoveImage = (imageToRemove: ImageType) => {
    setAttachedImages((prev) => prev.filter((img) => img !== imageToRemove));
  };

  if (attachedImages.length === 0) return null;

  return (
    <div className={styles.container}>
      {attachedImages.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            src={getImageSrc(image)}
            alt={`Preview ${index + 1}`}
            className={styles.image}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveImage(image);
            }}
            className={styles.removeButton}
            aria-label="Remove image"
          >
            <IoCloseCircle size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};
