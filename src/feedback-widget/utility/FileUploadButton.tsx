// FileUploadButton.tsx
import { useRef, useCallback } from "react";
import styles from "./FileUploadButton.module.css";
import { MdAttachFile } from "react-icons/md";

interface FileUploadButtonProps {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
  acceptedFileTypes?: string;
  currentFileSize?: number;
  maxFileSize?: number;
  showSizeInfo?: boolean;
  isAnonymous?: boolean;
}

const FileUploadButton = ({
  onFileSelect,
  disabled = false,
  acceptedFileTypes = ".png,.jpeg,.jpg",
  currentFileSize = 0,
  maxFileSize = 3,
  showSizeInfo = false,
}: FileUploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();

      if (disabled) {
        alert("Button is disabled");
        return;
      }

      fileInputRef.current?.click();
    },
    [disabled]
  );

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      const newFileSizeInMB = (file?.size || 0) / (1024 * 1024);
      if (currentFileSize + newFileSizeInMB > maxFileSize) {
        alert(`File size exceeds the limit of ${maxFileSize}MB`);
        return;
      }

      if (file) {
        onFileSelect(file);
        event.target.value = "";
      }
    },
    [onFileSelect, currentFileSize, maxFileSize]
  );

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${disabled ? styles.disabled : ""}`}
        onClick={handleButtonClick}
        disabled={disabled}
        aria-label="Attach file"
        title="Attach file"
      >
        <MdAttachFile
          size={20}
          style={{
            transform: "rotate(45deg)",
            outline: "none",
          }}
        />
      </button>
      {showSizeInfo && currentFileSize > 0 && (
        <span className={styles.sizeInfo}>
          {currentFileSize.toFixed(2)}MB / {maxFileSize}MB
        </span>
      )}
      <input
        type="file"
        accept={acceptedFileTypes}
        ref={fileInputRef}
        className={styles.input}
        onChange={handleFileChange}
        aria-hidden="true"
      />
    </div>
  );
};

export default FileUploadButton;
