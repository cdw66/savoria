import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  TextInput,
  Stack,
  Tooltip,
  Textarea,
  ScrollArea,
  Card,
  LoadingOverlay,
} from "@mantine/core";
import { IconEdit, IconX } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import {
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const AdminReviews = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    const { id, content, reviewer } = values;

    try {
      if (edit) {
        // Update values
        const docRef = doc(db, "reviews", id);

        await updateDoc(docRef, {
          content,
          reviewer,
        });

        setEdit(false);
      } else {
        // Save new values in Firebase
        await addDoc(collection(db, "reviews"), {
          content,
          reviewer,
        });
      }
      setLoading(false);
      close();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "reviews", id));
  };

  const handleEdit = (index) => {
    setEdit(true);

    const review = reviews[index];
    const { content, reviewer } = review;

    form.setValues({
      id: review.id,
      content,
      reviewer,
    });

    open();
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "reviews"),
      (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setReviews(data);
      }
    );

    return () => unsubscribe();
  }, []);

  const initialValues = {
    content: "",
    reviewer: "",
  };

  const form = useForm({
    initialValues,

    validate: {},
  });

  return (
    <section className="mt-[48px]">
      <Modal opened={opened} onClose={close}>
        <LoadingOverlay visible={loading} overlayBlur={2} />

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack mx="xl">
            <h1 className="text-center font-eb-garamond">Add Review</h1>

            <Textarea
              label="Review"
              {...form.getInputProps("content")}
              required
            />

            <TextInput
              label="Reviewer"
              {...form.getInputProps("reviewer")}
              required
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
        <h2 className="font-eb-garamond text-[36px]">Reviews</h2>
        <button
          className="px-4 py-2 font-lato bg-tan text-white"
          onClick={() => {
            form.setValues(initialValues);
            open();
          }}
        >
          Add Review
        </button>
      </div>
      <ScrollArea h={500} className="bg-gray-100" p={16}>
        {reviews.map((item, index) => (
          <Card
            shadow="sm"
            padding="md"
            radius="md"
            mb={16}
            key={index}
            pos="relative"
            withBorder
          >
            <div className="flex flex-col relative gap-4">
              <div className="flex gap-4 justify-between">
                <p>{item.content}</p>
                <div className="flex">
                  <Tooltip label="Edit Item" position="bottom" withArrow>
                    <IconEdit
                      width={32}
                      height={32}
                      className="cursor-pointer"
                      onClick={() => handleEdit(index)}
                    />
                  </Tooltip>
                  <Tooltip label="Delete Item" position="bottom" withArrow>
                    <IconX
                      width={32}
                      height={32}
                      color="red"
                      className="cursor-pointer"
                      onClick={() => handleDelete(reviews[index].id)}
                    />
                  </Tooltip>
                </div>
              </div>
              <p>~ {item.reviewer}</p>
            </div>
          </Card>
        ))}
      </ScrollArea>
    </section>
  );
};

export default AdminReviews;
