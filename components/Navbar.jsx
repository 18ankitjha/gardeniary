import React from "react";
import Image from "next/image";
import logo from "../public/images/Gardeniary.png";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import { useRef } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ cart, addtoCart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart,addtoCart,removeFromCart,clearCart,subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start  justify-center items-center  text-gray-600 bg-white mb-1 shadow-xl sticky top-0 z-100">
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
      <div
        className="cart cursor-pointer absolute right-0 top-10 md:top-6 mx-5"
        onClick={toggleCart}
      >
        <AiOutlineShoppingCart className="text-xl md:text-2xl " />
      </div>
      <div
        ref={ref}
        className="h-[100vh] w-72 sideCart absolute top-0 right-0 bg-green-100 py-10 px-8 z-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping cart</h2>
        <span
          className="absolute top-8 right-4 md:top-4 md:right-2   cursor-pointer text-2xl text-green-900"
          onClick={toggleCart}
        >
          <AiFillCloseCircle></AiFillCloseCircle>
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && <div className="my-4 ">No items in the cart!!</div>}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-3">
                  <div className="w-2/3 font-semibold">{cart[k].name} </div>
                  <div className="w-1/3  flex items-center justify-center font-semibold text-lg">
                    {" "}
                    <AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size, cart[k].variant)}} className="mx-1 text-green-500 cursor-pointer" />
                    <span className="text-sm"> {cart[k].qty}</span>
                    <AiFillPlusCircle onClick={()=>{addtoCart(k,1,cart[k].price,cart[k].name,cart[k].size, cart[k].variant)}} className="mx-1 text-green-500 cursor-pointer" />{" "}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex ">
          <button className="flex mr-2 text-gray-100 bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-700 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button>
          <button
            onClick={clearCart}
            className="flex mr-2 text-gray-100 bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-700 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
