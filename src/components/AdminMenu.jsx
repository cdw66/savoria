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
import { uploadImages, uploadImage } from "@/utils/storage";
import { writeBatch } from "firebase/firestore";

const AdminMenu = () => {
  const [opened, { open, close }] = useDisclosure(false);
  //   const [visible, { toggle }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [edit, setEdit] = useState(false);
  //   const [id, setId] = useState("");
  //   const [value, setValue] = useState([]);
  const [data, setData] = useState([
    { value: "dairy", label: "Dairy" },
    { value: "gluten", label: "Gluten" },
  ]);

  const handleSubmit = async (values) => {
    // console.log("values", values);
    setLoading(true);

    const {
      id,
      name,
      category,
      description,
      featured,
      image,
      price,
      allergens,
    } = values;

    try {
      var imgUrl = "";

      if (edit) {
        const docRef = doc(db, "menu-items", id);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data();

        if (image !== docData.image) {
          imgUrl = await uploadImage(image, "menu-images");
        } else {
          imgUrl = docData.image;
        }

        await updateDoc(docRef, {
          name,
          category,
          description,
          featured,
          image: imgUrl,
          price,
          allergens,
        });

        setEdit(false);
      } else {
        // console.log("image", image);

        // console.log("outer image", image);
        if (image) {
          console.log("image", image);
          imgUrl = await uploadImage(image, "menu-images");
        } else {
          imgUrl = "/";
        }

        const itemData = {
          name,
          category,
          description,
          allergens,
          featured,
          price,
          image: imgUrl,
        };

        await addDoc(collection(db, "menu-items"), itemData);
      }
      setLoading(false);
      close();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "menu-items", id));
  };

  const handleEdit = (index) => {
    setEdit(true);
    // console.log("inside", menuData[index]);

    const item = menuData[index];
    const { name, category, description, featured, image, price, allergens } =
      item;

    form.setValues({
      id: item.id,
      name,
      category,
      description,
      featured,
      image,
      price,
      allergens,
    });

    open();
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "menu-items"),
      (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setMenuData(data);
      }
    );

    return () => unsubscribe();
  }, []);

  const initialValues = {
    name: "",
    category: "",
    description: "",
    featured: false,
    image: "",
    price: "",
    allergens: [],
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
      <Modal opened={opened} onClose={close} pos="relative">
        {/* Modal content */}
        <LoadingOverlay visible={loading} overlayBlur={2} />
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack mx="xl">
            <h1 className="text-center font-eb-garamond">Add Menu Item</h1>

            <TextInput
              label="Item Name"
              {...form.getInputProps("name")}
              required
            />
            <Textarea
              label="Item Description"
              {...form.getInputProps("description")}
              required
            />
            <NumberInput
              label="Price"
              {...form.getInputProps("price")}
              required
            />
            <NativeSelect
              label="Item Category"
              placeholder="Select a Category"
              data={[
                {
                  label: "Select a Category",
                  value: "",
                  disabled: true,
                },
                { label: "Appetizers", value: "APPETIZERS" },
                { label: "Main Courses", value: "MAINS" },
                { label: "From the Farm", value: "FROM THE FARM" },
                { label: "Desserts", value: "DESSERTS" },
              ]}
              {...form.getInputProps("category")}
              required
            />
            <MultiSelect
              label="Allergens"
              data={data}
              creatable
              searchable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setData((current) => [...current, item]);
                return item;
              }}
              {...form.getInputProps("allergens")}
              //   value={value}
              //   onChange={setValue}
            />
            <FileInput
              label="Item Image (Click to add an image)"
              //   placeholder="Item Image"
              icon={<IconUpload />}
              {...form.getInputProps("image")}
              accept="image/png,image/jpeg"
              required
              //   withAsterisk
            />
            <Checkbox
              label="Feature on homepage"
              {...form.getInputProps("featured")}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-tan text-white w-[50%] mx-auto mt-5 font-lato"
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

      <div className="flex w-full justify-between items-center border-b-2 mb-4">
        <h2 className="font-eb-garamond text-[36px]">Menu Items</h2>
        <button
          className="px-4 py-2 font-lato bg-tan text-white h-min"
          onClick={() => {
            form.setValues(initialValues);
            open();
          }}
        >
          Add Item
        </button>
      </div>
      <ScrollArea h={400} className="bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {menuData.map((item, index) => (
            // <h1 key={index}>{item.name}</h1>
            // <AdminMenuItem key={index} item={item} />
            <Card
              shadow="sm"
              padding="md"
              radius="md"
              key={index}
              pos="relative"
              withBorder
            >
              {/* <div key={index} className="relative"> */}
              <MenuItem itemData={item} />
              {/* <div className="bg-g"> */}
              <div className="right-2 top-2 absolute bg-white rounded-md flex">
                <Tooltip label="Edit Item" position="bottom" withArrow>
                  <IconEdit
                    width={32}
                    height={32}
                    className="cursor-pointer"
                    // onClick={() => console.log(menuData[index])}
                    onClick={() => handleEdit(index)}
                  />
                </Tooltip>
                <Tooltip label="Delete Item" position="bottom" withArrow>
                  <IconX
                    width={32}
                    height={32}
                    color="red"
                    className="cursor-pointer"
                    onClick={() => {
                      console.log(menuData[index]);
                      handleDelete(menuData[index].id);
                    }}
                  />
                </Tooltip>
              </div>
              {/* </div> */}
              {/* </div> */}
            </Card>
          ))}
        </div>
      </ScrollArea>
      {/* </div> */}
    </section>
  );
};

export default AdminMenu;
