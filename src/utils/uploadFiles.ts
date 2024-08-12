import axios from "./axios";

const convertAndUploadImage = async (dataUrl: string) => {
  const blob = await fetch(dataUrl).then((res) => res.blob());

  // Create a file from blob
  const file = new File([blob], "profilePic.png", { type: "image/png" });

  // Use the existing uploadFile function
  return uploadFile({
    file: file,
    purpose: "profilePictures",
  });
};

const uploadFile = async ({
  file,
  purpose,
}: {
  file: File;
  purpose: string;
}): Promise<string | null> => {
  try {
    if (!file) return null;

    const formData = new FormData();
    formData.append("imageFile", file);
    formData.append("purpose", purpose);
    const { data: uploadFileResponse } = await axios.post(
      "/upload-file",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!uploadFileResponse.success) {
      throw new Error(uploadFileResponse.message || "Error uploading file");
    } else {
      return uploadFileResponse.fileUrl;
    }
  } catch (error: any) {
    console.log("Error uploading file: ", error);
    return null;
  }
};

export { uploadFile, convertAndUploadImage };
