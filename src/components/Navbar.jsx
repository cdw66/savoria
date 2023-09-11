import { Box, Burger, Group, NavLink, Title, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    // <Box component="nav" sx={{ backgroundColor: "white" }}>
    //   <Group position="apart">
    //     {/* <Link href="/" className="no-underline text-gray-400"> */}
    //     <Title sx={{ fontFamily: "Caveat" }}>Savoria</Title>
    //     {/* </Link> */}
    //     <Group>
    //       <Link href="/menu" className="no-underline">
    //         Menu
    //       </Link>
    //       <Link href="/locations" className="no-underline">
    //         Locations & Hours
    //       </Link>
    //       <Link href="/reservations" className="no-underline">
    //         Reserve a Table
    //       </Link>
    //       <Link href="/about" className="no-underline">
    //         Our Story
    //       </Link>
    //     </Group>
    //   </Group>
    // </Box>
    <nav className="flex justify-between items-center px-[24px] py-2 drop-shadow-sm">
      <Link href="/">
        {/* <h1 className="my-0 no-underline">Savoria</h1> */}
        <Image
          width={130}
          height={60}
          src="/images/savoria_logo_transparent.png"
          className="object-contain cursor-pointer"
        />
      </Link>
      <Menu>
        <Menu.Target>
          <Burger opened={opened} onClick={toggle} aria-label={label} />
        </Menu.Target>

        <Menu.Dropdown>
          {/* <Menu.Item py={16}> */}
          {/* <Link href="/menu" className="no-underline text-black text-lg">
              Menu
            </Link> */}
          <NavLink label="Home" href="/" component={Link} />
          <NavLink label="Menu" href="/menu" component={Link} />
          {/* </Menu.Item> */}
          {/* <Menu.Item py={16}> */}
          {/* <Link href="locations" className="no-underline text-black text-lg">
              Locations & Hours
            </Link> */}
          <NavLink label="Locations & Hours">
            <NavLink
              label="Philadelphia"
              href="/locations/philadelphia"
              component={Link}
            />
            <NavLink
              label="New York City"
              href="/locations/nyc"
              component={Link}
            />
          </NavLink>
          {/* </Menu.Item> */}
          {/* <Menu.Item py={16}> */}
          {/* <Link
              href="reservations"
              className="no-underline text-black text-lg"
            >
              Reserve a Table
            </Link> */}
          <NavLink
            label="Reserve a Table"
            href="/reservations"
            component={Link}
          />
          {/* </Menu.Item> */}
          {/* <Menu.Item py={16}> */}
          {/* <Link href="about" className="no-underline text-black text-lg">
              Our Story
            </Link> */}
          <NavLink label="Our Story" href="/about" component={Link} />
          {/* </Menu.Item> */}
        </Menu.Dropdown>
      </Menu>

      {/* <div className="bg-green-300 h-min">
        <Link href="/menu" className="no-underline bg-red-300 h-min">
          Menu
        </Link>
        <Link href="/locations" className="no-underline h-min">
          Locations & Hours
        </Link>
        <Link href="/reservations" className="no-underline h-min">
          Reserve a Table
        </Link>
        <Link href="/about" className="no-underline h-min">
          Our Story
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
