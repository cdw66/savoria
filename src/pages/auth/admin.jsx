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
import AdminReviews from "@/components/AdminReviews";
import AdminMenu from "@/components/AdminMenu";
import AdminStaff from "@/components/AdminStaff";
import AdminGallery from "@/components/AdminGallery";

const Admin = () => {
  // const [openedMenu, { openMenu, closeMenu }] = useDisclosure(false);
  // const [openedStaff, { openStaff, closeStaff }] = useDisclosure(false);
  // const [openedReviews, { openReview, closeReview }] = useDisclosure(false);

  const [opened, { open, close }] = useDisclosure(false);

  const [staffData, setStaffData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [data, setData] = useState([
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
  ]);

  const menuForm = useForm({
    initialValues: {
      name: "",
      category: "",
      description: "",
      featured: "",
      image: "",
      price: "",
      allergens: "",
    },

    // Validate email address
    validate: {
      // email: isEmail("Invalid email"),
    },
  });

  const staffForm = useForm({
    initialValues: {
      title: "",
      name: "",
      details: "",
      image: "",
    },

    // Validate email address
    validate: {
      // email: isEmail("Invalid email"),
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const staffSnap = await getDocs(collection(db, "staff"));
      const staffData = staffSnap.docs.map((doc) => ({
        ...doc.data(),
      }));
      setStaffData(staffData);

      const menuSnap = await getDocs(collection(db, "menu-items"));
      const menuData = menuSnap.docs.map((doc) => ({
        ...doc.data(),
      }));
      setMenuData(menuData);

      // const
      const reviewsSnap = await getDocs(collection(db, "reviews"));
      const reviewsData = reviewsSnap.docs.map((doc) => ({
        ...doc.data(),
      }));

      setReviews(reviewsData);
    };

    fetchData();
  }, []);

  const handleSubmitMenu = (values) => {
    console.log("values", values);
  };
  const handleSubmitStaff = () => {};
  const handleSubmitReview = () => {};

  return (
    <ProtectedRoute>
      {/* <div>Admin</div> */}
      <Modal opened={opened} onClose={close}>
        {/* Modal content */}
        <form
          onSubmit={menuForm.onSubmit((values) => handleSubmitMenu(values))}
        >
          <Stack>
            <h1 className="text-center font-eb-garamond">Add Menu Item</h1>

            <TextInput label="Item Name" {...menuForm.getInputProps("name")} />
            <TextInput
              label="Item Description"
              {...menuForm.getInputProps("description")}
            />
            <NumberInput label="Price" {...menuForm.getInputProps("price")} />
            <NativeSelect
              label="Item Category"
              data={[
                { label: "Appetizers", value: "APPETIZERS" },
                { label: "Main Courses", value: "MAINS" },
                { label: "From the Farm", value: "FROM THE FARM" },
                { label: "Desserts", value: "DESSERTS" },
              ]}
              {...menuForm.getInputProps("category")}
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
              {...menuForm.getInputProps("allergens")}
            />
            <FileInput
              label="Item Image"
              placeholder="Item Image"
              icon={<IconUpload />}
              {...menuForm.getInputProps("image")}
            />
            <Checkbox
              label="Feature on homepage"
              {...menuForm.getInputProps("featured")}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-tan text-white w-[50%] mx-auto mt-5"
            >
              Add Item
            </button>
          </Stack>
        </form>
      </Modal>

      <Modal opened={opened} onClose={close}>
        <h1>Add Staff Member</h1>
      </Modal>

      <Modal opened={opened} onClose={close}>
        <h1>Add Review</h1>
      </Modal>

      <div className="max-w-[800px] mx-auto">
        <h1 className="text-center text-[48px] font-eb-garamond">
          Admin Panel
        </h1>
        <p className="font-lato text-[18px] text-center">
          Manage current & featured menu items, staff members, and published
          reviews.
        </p>

        <div>
          <AdminMenu />
          {/* <div> */}
          {/* <div className="flex flex-wrap">
              {menuData.map((item, index) => (
                // <h1 key={index}>{item.name}</h1>
                // <AdminMenuItem key={index} item={item} />
                <div className="relative">
                  <MenuItem key={index} itemData={item} />
                  <Tooltip label="Edit Item" position="bottom" withArrow>
                    <IconEdit
                      width={32}
                      height={32}
                      className="absolute right-14 top-4 cursor-pointer"
                      onClick={() => console.log(menuData[index])}
                    />
                  </Tooltip>
                  <Tooltip label="Delete Item" position="bottom" withArrow>
                    <IconX
                      width={32}
                      height={32}
                      color="red"
                      className="absolute right-4 top-4 cursor-pointer"
                      onClick={() => console.log(menuData[index])}
                    />
                  </Tooltip>
                </div>
              ))}
            </div> */}
          {/* </div> */}

          {/* <div className="flex justify-between items-center">
            <h2 className="font-eb-garamond text-[24px]">Staff</h2>
            <button
              className="px-4 py-2 font-lato bg-tan text-white"
              onClick={() => {
                modals.open({
                  // title: "Subscribe to newsletter",
                  children: (
                    <>
                      <form
                        onSubmit={menuForm.onSubmit((values) =>
                          handleSubmitMenu(values)
                        )}
                      >
                        <Stack mx="xl">
                          <h1 className="text-center font-eb-garamond">
                            Add Staff Member
                          </h1>

                          <TextInput
                            label="Employee Title"
                            {...staffForm.getInputProps("title")}
                          />

                          <TextInput
                            label="Employee Name"
                            {...staffForm.getInputProps("name")}
                          />

                          <Textarea
                            label="Employee Bio"
                            {...staffForm.getInputProps("details")}
                          />

                          <FileInput
                            label="Employee Photo"
                            placeholder="Employee Photo"
                            icon={<IconUpload />}
                            {...staffForm.getInputProps("image")}
                          />

                          <button
                            type="submit"
                            className="px-4 py-2 bg-tan text-white w-[50%] mx-auto mt-5"
                          >
                            Add Staff
                          </button>
                        </Stack>
                      </form>
                    </>
                  ),
                });
              }}
            >
              Add Staff Member
            </button>
          </div> */}

          <AdminReviews />

          <AdminStaff />

          <AdminGallery />

          {/* <div className="flex flex-wrap">
            {staffData.map((item, index) => (
              <div className="relative max-w-[300px]">
                <TeamMember key={index} member={item} />
                <Tooltip label="Edit Item" position="bottom" withArrow>
                  <IconEdit
                    width={32}
                    height={32}
                    className="absolute right-14 top-4 cursor-pointer"
                    onClick={() => console.log(staffData[index])}
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
          </div> */}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Admin;
