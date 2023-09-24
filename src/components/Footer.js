import React from "react";
import { Payment, logoLight } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaGithub,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* =========== logo icon start here ========== */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logolight" />
          <p className="text-white text-sm tracking-wide">&copy; ReactBD.com</p>
          <img className="w-56" src={Payment} alt="" />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaGithub className="hover:text-white duration-300cursor-pointer" />

            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-white mb-4 font-semibold">Locate us</h1>
          <div className="flex flex-col text-base gap-2">
            <p>MBD,Ruwi, Muscate-oman</p>
            <p>Mobile: 00968 97859628</p>
            <p>Phone: 00968 97859628</p>
            <p>e-mail: bazar@gmail.com</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-white mb-4 font-semibold">Profile</h1>
          <div className="flex flex-col text-base gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 text-white text-sm py-2"
            type="text"
            placeholder="e-mail"
          />
          <button
            className="text-white border text-sm border-t-0 hover:bg-gray-900
              active:bg-white active:text-black"
          >
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
