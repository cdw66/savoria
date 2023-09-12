import ProtectedRoute from "@/components/ProtectedRoute";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useDisclosure } from "@mantine/hooks";
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
  ScrollArea,
  Card,
} from "@mantine/core";
import { IconEdit, IconUpload, IconX } from "@tabler/icons-react";
// import { UseForm } from "@mantine/form/lib/types";
import { useForm } from "@mantine/form";
import MenuItem from "@/components/MenuItem";
import TeamMember from "@/components/TeamMember";
import { modals } from "@mantine/modals";
import {
  onSnapshot,
  getDoc,
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
        // const docSnap = await getDoc(docRef);
        // const docData = docSnap.data();

        await updateDoc(docRef, {
          content,
          reviewer,
        });

        setEdit(false);
      } else {
        await addDoc(collection(db, "reviews"), {
          content,
          reviewer,
        });
        // Create new review in fb
      }
      setLoading(false);
      close();
    } catch (error) {
      console.log(error);
    }

    // close();
    // form.setValues(initialValues);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "reviews", id));
  };

  const handleEdit = (index) => {
    setEdit(true);
    // console.log("inside", reviews[index]);

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
    // const fetchData = async () => {
    //   const reviewsSnap = await getDocs(collection(db, "reviews"));
    //   const reviewsData = reviewsSnap.docs.map((doc) => ({
    //     ...doc.data(),
    //   }));

    //   setReviews(reviewsData);
    // };

    // fetchData();

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

    // Validate email address
    validate: {
      // email: isEmail("Invalid email"),
    },
  });

  return (
    <section className="mt-[48px]">
      <Modal opened={opened} onClose={close}>
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
              //   onClick={() => {
              //     close();
              //     form.setValues(initialValues);
              //   }}
            >
              Save
            </button>
          </Stack>
        </form>
      </Modal>

      {/* <div> */}
      <div className="flex w-full justify-between items-center border-b-2 mb-4">
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
      <ScrollArea h={300} className="bg-gray-100" p={16}>
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
                      //   onClick={() => console.log(reviews[index])}
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
      {/* </div> */}
    </section>
  );
};

export default AdminReviews;
