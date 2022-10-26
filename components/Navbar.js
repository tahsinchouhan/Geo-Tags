import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { React, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import Drawer from "react-modern-drawer";
// import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const dropdownToogle = () => {
    setDropdown(!dropdown);
  };

  const path = router.pathname;
  return (
    <div className="my-6 flex sm:justify-self-auto justify-between  items-center text-black sticky lg:px-8 px-4">
      <div className="flex justify-start w-[40%]">
        <Link href="/" prefetch={false}>
          <div className="flex space-x-2 items-center cursor-pointer">
            <img
              src="/assets/images/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <h1 className="text-black font-serif  xl:text-2xl sm:text-xl font-extrabold">
              Geo Tags
            </h1>
          </div>
        </Link>
      </div>

      {/* Desktop View */}
      <div className="md:flex hidden items-center justify-start w-[60%]">
        <div className="">
          <ul className="flex xl:text-lg sm:text-base font-base xl:space-x-6 sm:space-x-4  font-poppins text-gray-400">
            <li
              className="py-2"
              style={{
                color: path === "/" ? "#000" : "#000",
                borderBottom: path === "/" ? "3px solid #1890ff" : "none",
              }}
            >
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>

            <li
              className="cursor-pointer py-2"
              style={{
                color: path === "/register-volunteer" ? "#000" : "#000",
                borderBottom:
                  path === "/register-volunteer" ? "3px solid #1890ff" : "none",
              }}
            >
              <Link href="/register-volunteer" prefetch={false}>
                Volunteer
              </Link>
            </li>

            {/* <li className="cursor-pointer py-2">
              <DropDown />
            </li> */}
            <li
              className="cursor-pointer py-2"
              style={{
                color: path === "/register-house" ? "#000" : "#000",
                borderBottom:
                  path === "/register-house" ? "3px solid #1890ff" : "none",
              }}
            >
              <Link href="/register-house" prefetch={false}>
                House
              </Link>
            </li>
            <li
              className="cursor-pointer py-2"
              style={{
                color: path === "/register-user" ? "#000" : "#000",
                borderBottom:
                  path === "/register-user" ? "3px solid #1890ff" : "none",
              }}
            >
              <Link href="/register-user" prefetch={false}>
                User
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* mobile View */}
      <div className="md:hidden flex  z-40">
        <button className="text-4xl" onClick={toggleDrawer}>
          <HiOutlineMenuAlt3 />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          width="280px"
          // className="absolute"
          placement="right"
        >
          <ul className="flex flex-col  text-2xl space-y-6  font-poppins text-gray-400 py-14 items-center">
            <li
              onClick={toggleDrawer}
              className="cursor-pointer py-2"
              style={{
                color: path === "/" ? "#000" : "#000",
                borderBottom: path === "/" ? "3px solid #1890ff" : "none",
              }}
            >
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li
              onClick={toggleDrawer}
              className="cursor-pointer py-2"
              style={{
                color: path === "/register-volunteer" ? "#000" : "#000",
                borderBottom:
                  path === "/register-volunteer" ? "3px solid #1890ff" : "none",
              }}
            >
              <Link href="/register-volunteer" prefetch={false}>
                Volunteer
              </Link>
            </li>
            <li
              onClick={toggleDrawer}
              className="cursor-pointer py-2"
              style={{
                color: path === "/register-house" ? "#000" : "#000",
                borderBottom:
                  path === "/register-house" ? "3px solid #1890ff" : "none",
              }}
            >
              <Link href="/register-house" prefetch={false}>
                House
              </Link>
            </li>
            <li
              onClick={toggleDrawer}
              className="cursor-pointer py-2"
              style={{
                color: path === "/register-user" ? "#000" : "#000",
                borderBottom:
                  path === "/register-user" ? "3px solid #1890ff" : "none",
              }}
            >
              <Link href="/register-user" prefetch={false}>
                User
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
