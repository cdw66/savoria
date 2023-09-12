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
} from "@mantine/core";
import { IconEdit, IconUpload, IconX } from "@tabler/icons-react";
// import { UseForm } from "@mantine/form/lib/types";
import { useForm } from "@mantine/form";
import MenuItem from "@/components/MenuItem";
import TeamMember from "@/components/TeamMember";
import { modals } from "@mantine/modals";
const AdminStaff = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [staffData, setStaffData] = useState([]);

  const handleSubmit = (values) => {
    console.log(values);

    close();
    form.setValues(initialValues);
  };

  const handleEdit = (index) => {
    console.log("inside", staffData[index]);

    const member = staffData[index];
    const { title, name, details, image } = member;

    form.setValues({
      title,
      name,
      details,
      image,
    });

    open();
  };

  useEffect(() => {
    const fetchData = async () => {
      const staffSnap = await getDocs(collection(db, "staff"));
      const staffData = staffSnap.docs.map((doc) => ({
        ...doc.data(),
      }));
      setStaffData(staffData);
    };

    fetchData();
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

      <div className="flex flex-wrap">
        {staffData.map((item, index) => (
          <div className="relative max-w-[300px]">
            <TeamMember key={index} member={item} />
            <Tooltip label="Edit Item" position="bottom" withArrow>
              <IconEdit
                width={32}
                height={32}
                className="absolute right-14 top-4 cursor-pointer"
                // onClick={() => console.log(staffData[index])}
                onClick={() => handleEdit(index)}
              />
            </Tooltip>
            <Tooltip label="Delete Item" position="bottom" withArrow>
              <IconX
                width={32}
                height={32}
                color="red"
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => console.log(staffData[index])}
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminStaff;
