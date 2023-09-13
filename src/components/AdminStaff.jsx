import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  deleteDoc,
  addDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  TextInput,
  Stack,
  FileInput,
  Tooltip,
  Textarea,
  LoadingOverlay,
  ScrollArea,
  Card,
} from "@mantine/core";
import { IconEdit, IconUpload, IconX } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import TeamMember from "@/components/TeamMember";
import { uploadImage } from "@/utils/storage";

const AdminStaff = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [staffData, setStaffData] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);

    setLoading(true);

    const { id, title, name, details, image } = values;

    try {
      var imgUrl = "";

      if (edit) {
        const docRef = doc(db, "staff", id);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data();

        if (image !== docData.image) {
          imgUrl = await uploadImage(image, "staff-images");
        } else {
          imgUrl = docData.image;
        }

        await updateDoc(docRef, {
          name,
          title,
          details,
          image: imgUrl,
        });

        setEdit(false);
      } else {
        if (image) {
          imgUrl = await uploadImage(image, "staff-images");
        } else {
          imgUrl = "/";
        }

        await addDoc(collection(db, "staff"), {
          name,
          title,
          details,
          image: imgUrl,
        });
      }
      setLoading(false);
      close();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "staff", id));
  };

  const handleEdit = (index) => {
    setEdit(true);

    const member = staffData[index];
    const { title, name, details, image } = member;

    form.setValues({
      id: member.id,
      title,
      name,
      details,
      image,
    });

    open();
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "staff"), (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setStaffData(data);
    });

    return () => unsubscribe();
  }, []);

  const initialValues = {
    title: "",
    name: "",
    details: "",
    image: "",
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
            <h1 className="text-center font-eb-garamond">Add Menu Item</h1>

            <TextInput label="Name" {...form.getInputProps("name")} />
            <TextInput label="Title" {...form.getInputProps("title")} />
            <Textarea label="Bio" {...form.getInputProps("details")} />
            <FileInput
              label="Photo"
              placeholder="Employee Photo"
              icon={<IconUpload />}
              accept="image/png,image/jpeg"
              {...form.getInputProps("image")}
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
        <h2 className="font-eb-garamond text-[36px]">Staff</h2>
        <button
          className="px-4 py-2 font-lato bg-tan text-white"
          onClick={() => {
            form.setValues(initialValues);
            open();
          }}
        >
          Add Staff Member
        </button>
      </div>

      <ScrollArea h={500} className="bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
          {staffData.map((item, index) => (
            <Card
              shadow="sm"
              padding="md"
              radius="md"
              key={index}
              pos="relative"
              withBorder
            >
              <TeamMember key={index} member={item} />
              <div className="right-2 top-2 absolute bg-white rounded-md flex">
                <Tooltip label="Edit Item" position="bottom" withArrow>
                  <IconEdit
                    width={32}
                    height={32}
                    onClick={() => handleEdit(index)}
                  />
                </Tooltip>
                <Tooltip label="Delete Item" position="bottom" withArrow>
                  <IconX
                    width={32}
                    height={32}
                    color="red"
                    onClick={() => handleDelete(staffData[index].id)}
                  />
                </Tooltip>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default AdminStaff;
