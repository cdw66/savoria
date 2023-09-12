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
          // console.log("image", image);
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

    // close();
    // form.setValues(initialValues);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "staff", id));
  };

  const handleEdit = (index) => {
    // console.log("inside", staffData[index]);
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
    // const fetchData = async () => {
    //   const staffSnap = await getDocs(collection(db, "staff"));
    //   const staffData = staffSnap.docs.map((doc) => ({
    //     ...doc.data(),
    //   }));
    //   setStaffData(staffData);
    // };
    // fetchData();

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

      <div className="flex w-full justify-between items-center border-b-2 mb-4">
        <h2 className="font-eb-garamond text-[36px]">Staff</h2>
        <button
          className="px-4 py-2 font-lato bg-tan text-white"
          //   onClick={open}
          onClick={() => {
            form.setValues(initialValues);
            open();
          }}
        >
          Add Staff Member
        </button>
      </div>

      <ScrollArea h={400} className="bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
          {staffData.map((item, index) => (
            // <div className="relative max-w-[300px]">
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
                    // className="absolute right-14 top-4 cursor-pointer"
                    // onClick={() => console.log(staffData[index])}
                    onClick={() => handleEdit(index)}
                  />
                </Tooltip>
                <Tooltip label="Delete Item" position="bottom" withArrow>
                  <IconX
                    width={32}
                    height={32}
                    color="red"
                    // className="absolute right-4 top-4 cursor-pointer"
                    onClick={() => handleDelete(staffData[index].id)}
                  />
                </Tooltip>
              </div>
            </Card>
            // </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default AdminStaff;
