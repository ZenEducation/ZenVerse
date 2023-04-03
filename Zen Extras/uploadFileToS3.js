import { Amplify, Storage } from "aws-amplify";
// import awsconfig from "@/src/aws-exports";
// Amplify.configure(awsconfig);

const uploadFileToS3 = async (file) => {
  try {
    const uploadedFile = await Storage.put(file.name, file);
    return `https://zenverse-blog173818-terri.s3.ap-south-1.amazonaws.com/public/${uploadedFile.key}`
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
};

export default uploadFileToS3;
