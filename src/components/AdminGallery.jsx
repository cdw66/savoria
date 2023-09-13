import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Stack,
  FileInput,
  Tooltip,
  LoadingOverlay,
  ScrollArea,
} from "@mantine/core";
import { IconUpload, IconX } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import GalleryItem from "./GalleryItem";
import { uploadImages } from "@/utils/storage";

const AdminGallery = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleSubmit = async (values) => {
    const { images } = values;

    if (images) {
      setLoading(true);
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

    validate: {},
  });

  return (
    <section className="mt-[48px]">
      <Modal opened={opened} onClose={close}>
        <LoadingOverlay visible={loading} overlayBlur={2} />

        {/* Modal content */}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack mx="xl">
            <h1 className="text-center font-eb-garamond">Add Gallery Images</h1>

            <FileInput
              label="Images (Click to add one or more images)"
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

      <div className="flex w-full justify-between items-center border-b-2 mb-4 px-[24px]">
        <h2 className="font-eb-garamond text-[36px]">Gallery Images</h2>
        <button
          className="px-4 py-2 font-lato bg-tan text-white"
          onClick={() => {
            form.setValues(initialValues);
            open();
          }}
        >
          Add to Gallery
        </button>
      </div>

      <ScrollArea h={500} className="bg-gray-100">
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
