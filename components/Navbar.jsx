import React from "react";
import Image from "next/image";
import logo from "../public/images/Gardeniary.png";
import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start  justify-center items-center  text-gray-600 mb-1 shadow-xl ">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image
            src={logo.src}
            width={60}
            height={20}
            className="w-auto"
            alt=""
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-4 font-bold md:text-md">
          <Link href={"/Plants"}>
            <li>Plants</li>
          </Link>
          <Link href={"/Seed"}>
            <li>Seed</li>
          </Link>
          <Link href={"/Tools"}>
            <li>Tools</li>
          </Link>
          <Link href={"/Pots"}>
            <li>Pots</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-10 md:top-6 mx-5">
        <button>
          <AiOutlineShoppingCart className="text-xl md:text-2xl " />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
