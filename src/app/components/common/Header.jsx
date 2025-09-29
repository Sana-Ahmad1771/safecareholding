"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../../public/assets/Logo.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // ✅ Fixed JS version 
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white font-inter font-normal text-[16px] shadow-md contanier mx-auto">
      {/* Top Bar */}
      <div className="bg-gray-7 hidden sm:flex justify-center lg:justify-between items-center h-12 px-5 xl:px-40  ">
        <div className="flex items-center text-dark-4 space-x-4">
          <div className="w-[1.5px] h-12 bg-gray-2/20"></div>
          <span>
            <FiPhone />
          </span>
          <span
            onClick={() => copyToClipboard("(239) 555-0108")}
            className="cursor-pointer hover:underline underline-offset-4"
          >
            (239) 555-0108
          </span>
          <div className="w-[1.5px] h-12 bg-gray-2/20"></div>
          <span>
            <MdOutlineEmail />
          </span>
          <span
            onClick={() => copyToClipboard("info@safecareind.xyz")}
            className="cursor-pointer hover:underline underline-offset-4"
          >
            info@safecareind.xyz
          </span>
          <div className="w-[1.5px] h-12 bg-gray-2/20"></div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="w-[1.5px] h-12 bg-gray-2/20"></div>
          <a href="#facebook" className="hover:scale-125">
            <RiFacebookFill />
          </a>
          <div className="w-[1.5px] h-12 bg-gray-2/20"></div>
          <a href="#twitter" className="hover:scale-125">
            <FaXTwitter />
          </a>
          <div className="w-[1.5px] h-12 bg-gray-2/20"></div>
          <a href="#instagram" className="hover:scale-125">
            <LuInstagram />
          </a>
          <div className="w-[1.5px] h-12 bg-gray-2/20"></div>
          <a href="#linkedin" className="hover:scale-125">
            <RxLinkedinLogo />
          </a>
          <div className="w-[1.5px] h-12 bg-gray-2/20"></div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-5 xl:mx-40 h-20 bg-white">
        <div className="flex-shrink-0">
          <a href="/">
            <Image
              src={Logo}
              alt="safecare-logo"
              width={120}
              height={40}
              className="w-32 h-auto"
              priority
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center space-x-5 list-none">
            <li>
              <div className="flex items-center space-x-4">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <div>
                  <span>/</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <Link href="/" className="hover:text-primary">
                  About Us
                </Link>
                <div>
                  <span>/</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <Link href="/" className="hover:text-primary">
                  Products
                </Link>
                <div>
                  <span>/</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <Link href="/" className="hover:text-primary">
                  Gallery
                </Link>
                <div>
                  <span>/</span>
                </div>
              </div>
            </li>
            <li>
              <div className="">
                <Link href="/" className="hover:text-primary">
                  Careers
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="border border-gray-2 rounded-full px-3 py-2 hidden lg:block bg-white">
          <input
            type="search"
            placeholder="Search Here"
            className="outline-none bg-transparent text-sm text-dark-5 placeholder-gray-400"
          />
        </div>

        {/* Mobile View */}
        <div className="lg:hidden relative">
          <button onClick={toggleMenu}>
            {!isMenuOpen && <AlignRight size={30} color={"#1EB7B1"} />}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 bg-white z-50 px-6 sm:pt-20"
              >
                <div className="flex justify-between items-center my-5">
                  <a href="/">
                    <Image
                      src={Logo}
                      width={120}
                      height={40}
                      priority
                      alt="logo"
                    />
                  </a>
                  <button onClick={closeMenu}>
                    <IoCloseSharp size={30} color={"#1EB7B1"} />
                  </button>
                </div>
                <hr className="mb-6 text-primary" />
                <div className="flex flex-col text-[20px] space-y-6 px-2 list-none">
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-primary">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-primary">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="hover:text-primary">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Header;
