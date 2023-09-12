import ProtectedRoute from "@/components/ProtectedRoute";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
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
} from "@mantine/core";
import { IconEdit, IconUpload, IconX } from "@tabler/icons-react";
// import { UseForm } from "@mantine/form/lib/types";
import { useForm } from "@mantine/form";
import MenuItem from "@/components/MenuItem";
import TeamMember from "@/components/TeamMember";
import { modals } from "@mantine/modals";
import GalleryItem from "./GalleryItem";

const AdminGallery = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [images, setImages] = useState([]);

  const handleSubmit = (values) => {
    console.log(values);

    close();
    form.setValues(initialValues);
  };

  useEffect(() => {
    const fetchData = async () => {
      const gallerySnap = await getDocs(collection(db, "gallery"));
      const galleryData = gallerySnap.docs.map((doc) => ({
        ...doc.data(),
      }));
      setImages(galleryData);
    };

    fetchData();
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
          onClick={open}
        >
          Add to Gallery
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 bg-tan p-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <GalleryItem />
            <Tooltip label="Delete Item" position="bottom" withArrow>
              <IconX
                width={32}
                height={32}
                color="red"
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => console.log(staffData[index])}
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminGallery;
