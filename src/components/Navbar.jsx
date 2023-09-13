import { NavLink, Menu, Drawer, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/AuthContext";

const useStyles = createStyles(() => ({
  label: {
    fontSize: "24px",
    fontFamily: "EB Garamond",
  },
  item: {
    fontFamily: "EB Garamond",
    fontSize: "18px",
  },
  dropdown: {
    borderRadius: "0px",
  },
}));

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const pathname = router.pathname;

  const { user } = useAuth();
  const currentUser = auth.currentUser;

  const { classes } = useStyles();

  return (
    // <>
    <nav className="flex justify-between items-center px-[24px] py-2 shadow-md">
      <Link href="/">
        <Image
          width={130}
          height={60}
          src="/images/savoria_logo_transparent.png"
          className={`object-contain cursor-pointer sm:hidden`}
          alt="Savoria logo"
        />

        <Image
          width={200}
          height={100}
          src="/images/savoria_logo_transparent.png"
          className={`object-contain cursor-pointer hidden sm:inline-block`}
          alt="Savoria logo"
        />
      </Link>

      <div className="lg:flex hidden gap-8 font-eb-garamond text-[18px]">
        <Link
          href="/"
          className={`${
            pathname === "/" && "text-tan"
          } hover:text-tan duration-200`}
        >
          Home
        </Link>
        <Link
          href="/menu"
          className={`${
            pathname === "/menu" && "text-tan "
          } hover:text-tan duration-200`}
        >
          Menu
        </Link>

        <Menu classNames={{ item: classes.item, dropdown: classes.dropdown }}>
          <Menu.Target>
            <span className="cursor-pointer">Locations & Hours</span>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <Link
                href="/locations/philadelphia"
                className={`${
                  pathname === "/locations/philadelphia" && "text-tan"
                } hover:text-tan duration-200`}
              >
                Philadelphia
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/locations/nyc"
                className={`${
                  pathname === "/locations/nyc" && "text-tan"
                } hover:text-tan duration-200`}
              >
                New York City
              </Link>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <Link
          href="/reservations"
          className={`${
            pathname === "/reservations" && "text-tan"
          } hover:text-tan duration-200`}
        >
          Reserve a Table
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about" && "text-tan"
          } hover:text-tan duration-200`}
        >
          Our Story
        </Link>

        {currentUser && !user.loadingUser && (
          <Link
            href="/auth/admin"
            className={`${
              pathname === "/auth/admin" && "text-tan"
            } hover:text-tan duration-200`}
          >
            Admin
          </Link>
        )}
      </div>

      {/* Mobile Nav */}
      <IconMenu2 onClick={open} width={32} height={32} className="sm:hidden" />

      <IconMenu2
        onClick={open}
        width={48}
        height={48}
        className="lg:hidden sm:inline-block hidden"
      />

      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        position="right"
        size={300}
      >
        {/* Drawer content */}
        <div>
          <NavLink
            label="Home"
            href="/"
            component={Link}
            onClick={close}
            classNames={{ label: classes.label }}
            className={`${pathname === "/" && "text-tan"}`}
          />
          <NavLink
            label="Menu"
            href="/menu"
            component={Link}
            onClick={close}
            classNames={{ label: classes.label }}
            className={`${pathname === "/menu" && "text-tan"}`}
          />
          <NavLink
            label="Locations & Hours"
            classNames={{ label: classes.label }}
          >
            <NavLink
              label="Philadelphia"
              href="/locations/philadelphia"
              component={Link}
              onClick={close}
              classNames={{ label: classes.label }}
              className={`${
                pathname === "/locations/philadelphia" && "text-tan"
              }`}
            />
            <NavLink
              label="New York City"
              href="/locations/nyc"
              component={Link}
              onClick={close}
              classNames={{ label: classes.label }}
              className={`${pathname === "/locations/nyc" && "text-tan"}`}
            />
          </NavLink>
          <NavLink
            label="Reserve a Table"
            href="/reservations"
            component={Link}
            onClick={close}
            classNames={{ label: classes.label }}
            className={`${pathname === "/reservations" && "text-tan"}`}
          />
          <NavLink
            label="Our Story"
            href="/about"
            component={Link}
            onClick={close}
            classNames={{ label: classes.label }}
            className={`${pathname === "/about" && "text-tan"}`}
          />
          {currentUser && !user.loadingUser && (
            <NavLink
              label="Admin"
              href="/auth/admin"
              component={Link}
              onClick={close}
              classNames={{ label: classes.label }}
              className={`${pathname === "/auth/admin" && "text-tan"}`}
            />
          )}
        </div>
      </Drawer>
    </nav>
    // </>
  );
};

export default Navbar;
