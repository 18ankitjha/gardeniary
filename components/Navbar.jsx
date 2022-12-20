import React from "react";
import Image from "next/image";
import logo from '../public/images/Gardeniary.png'
import Link from 'next/link'

import { AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start  justify-center items-center py-1.5 text-gray-600">
      <div className="logo mx-5">
        <Image src={logo.src} width={70} height={20}  alt=""/>
      </div>
      <div className="nav">
        <ul className="flex space-x-2 font-bold md:text-xl">
          <Link href={"/"}><li>Plants</li></Link>
          <Link href={"/"}><li>Seed</li></Link>
          <Link href={"/"}><li>Tools</li></Link>
          <Link href={"/"}><li>Pots</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-16 md:top-10 mx-5">
        <button><AiOutlineShoppingCart className="text-2xl"/></button>
      </div>
    </div>
  );
};

export default Navbar;
