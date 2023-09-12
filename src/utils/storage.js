import { storage } from "../config/firebase";
// const uuidv4 = require("uuid/v4");
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const uploadImages = async (images, postPath) => {
  var imgUrls = [];

  for (let i = 0; i < images.length; i++) {
    try {
      const id = uuidv4();
      const storageRef = ref(
        storage,
        `/${postPath}/${id}` // Generate unique name
      );
      //   const upload = await uploadBytes(storageRef, images[0]);
      await uploadBytes(storageRef, images[i]);
      const url = await getDownloadURL(storageRef);
      imgUrls.push(url);
    } catch (error) {
      console.log(error);
    }
  }
  return imgUrls;
};

export const uploadImage = async (image, postPath) => {
  try {
    const id = uuidv4();
    const storageRef = ref(storage, `/${postPath}/${id}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.log(error);
    return "/";
  }
};
