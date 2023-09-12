import ProtectedRoute from "@/components/ProtectedRoute";
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  addDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { useDisclosure, useSetState } from "@mantine/hooks";
import {
  Modal,
  NumberInput,
  TextInput,
  Stack,
  NativeSelect,
  MultiSelect,
  FileInput,
  Checkbox,
  Tooltip,
  Button,
  Textarea,
  LoadingOverlay,
  ScrollArea,
  Card,
} from "@mantine/core";
import { IconEdit, IconUpload, IconX } from "@tabler/icons-react";
// import { UseForm } from "@mantine/form/lib/types";
import { useForm } from "@mantine/form";
import MenuItem from "@/components/MenuItem";
import TeamMember from "@/components/TeamMember";
import { modals } from "@mantine/modals";
import GalleryItem from "./GalleryItem";
import { uploadImages } from "@/utils/storage";

const AdminGallery = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleSubmit = async (values) => {
    // console.log(values);
    // console.log("submitted");

    const { images } = values;

    // console.log(images);
    if (images) {
      setLoading(true);
      console.log("ding");
      try {
        const imageUrls = await uploadImages(images, "gallery-images");

        imageUrls.map(async (url) => {
          await addDoc(collection(db, "gallery"), {
            url,
          });
        });

        setLoading(false);
        close();
      } catch (error) {
        console.log(error);
      }
    } else {
      close();
    }

    // close();
    // form.setValues(initialValues);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "gallery", id));
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "gallery"),
      (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setImages(data);
      }
    );

    return () => unsubscribe();
  }, []);

  const initialValues = {
    images: "",
  };

  const form = useForm({
    initialValues,

    // Validate email address
    validate: {
      // email: isEmail("Invalid email"),
    },
  });

  return (
    <section className="mt-[48px]">
      <Modal opened={opened} onClose={close}>
        <LoadingOverlay visible={loading} overlayBlur={2} />

        {/* Modal content */}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack mx="xl">
            <h1 className="text-center font-eb-garamond">Add Gallery Images</h1>

            {/* <TextInput label="Name" {...form.getInputProps("name")} /> */}
            {/* <TextInput label="Title" {...form.getInputProps("title")} /> */}
            {/* <TextInput label="Bio" {...form.getInputProps("details")} /> */}
            <FileInput
              label="Images"
              placeholder="Gallery Images"
              icon={<IconUpload />}
              {...form.getInputProps("images")}
              accept="image/png,image/jpeg"
              multiple
            />

            <button
              type="submit"
              className="px-4 py-2 bg-tan text-white w-[50%] mx-auto mt-5"
            >
              Save
            </button>
          </Stack>
        </form>
      </Modal>

      <div className="flex w-full justify-between items-center border-b-2 mb-4">
        <h2 className="font-eb-garamond text-[36px]">Gallery Images</h2>
        <button
          className="px-4 py-2 font-lato bg-tan text-white"
          // onClick={open}
          onClick={() => {
            form.setValues(initialValues);
            open();
          }}
        >
          Add to Gallery
        </button>
      </div>

      <ScrollArea h={300} className="bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <GalleryItem item={image} />
              <div className="right-2 top-2 absolute bg-white rounded-md flex">
                <Tooltip label="Delete Item" position="bottom" withArrow>
                  <IconX
                    width={32}
                    height={32}
                    color="red"
                    // className="absolute right-2 top-2 cursor-pointer"
                    // onClick={() => console.log(images[index])}
                    onClick={() => handleDelete(images[index].id)}
                  />
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default AdminGallery;
