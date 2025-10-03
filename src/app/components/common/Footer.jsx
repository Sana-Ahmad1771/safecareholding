"use client";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const onClickCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full  bg-white font-inter border-t border-gray-200 overflow-hidden text-[#333] text-[16px] leading-normal "
    >
      {/* Main Content */}
      <div className="px-8 py-8 lg:py-16 flex flex-col lg:flex-row justify-between flex-wrap gap-12 lg:container lg:mx-auto">
        {/* Logo + Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[190px] lg:max-w-[20%]"
        >
          <a href="/">
            <Image
              src="/assets/Logo.png"
              alt="Logo"
              width={130}
              height={40}
              className="mb-5 w-32"
              priority
            />
          </a>
          <p className="mb-6 text-[16px]">
            Leading manufacturer of surgical procedure kits, PPE, and medical
            consumables from our advanced facilities in Abu Dhabi. Your trusted
            partner for healthcare supply chain solutions across the Middle
            East.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FiPhone />
              <span
                onClick={() => onClickCopy("(239) 555-0108")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                (239) 555-0108
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail />
              <span
                onClick={() => onClickCopy("info@safecareind.xyz")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                info@safecareind.xyz
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick Links*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-plus-jakarta-sans mb-4">Quick Links</h3>
          <ul className="space-y-4 text-[16px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </motion.div>

        {/* Browse Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-plus-jakarta-sans mb-4">Resources</h3>
          <ul className="space-y-4 text-[16px]">
            <li>
              <a href="#">Medicine</a>
            </li>
            <li>
              <a href="#">Medical Equipments</a>
            </li>
            <li>
              <a href="#">Beauty &Mom Care</a>
            </li>
            <li>
              <a href="#">Health Care</a>
            </li>
            <li>
              <a href="#">Food & Nutrition</a>
            </li>
            <li>
              <a href="#">Medical Supplies</a>
            </li>
          </ul>
        </motion.div>

        {/* Location and Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[190px] lg:max-w-[20%]"
        >
          <h3 className="text-2xl font-plus-jakarta-sans mb-4">Location</h3>
          <p className="mb-6 text-[16px]">
            PPGH+X76 - Kizad - Khalifa Industrial Zone - Abu Dhabi
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, AiFillInstagram, IoLogoLinkedin].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-[#f4f4f4] rounded hover:bg-gray-300 transition"
                  aria-label={`social-icon-${idx}`}
                >
                  <Icon size={20} />
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="px-5 lg:px-32 xl:px-40 border-t border-gray-200 py-6 bg-[#F5F5F5] flex flex-col lg:flex-row justify-between items-center text-center gap-2"
      >
        <p>
          © Safecare Holding. All rights reserved {new Date().getFullYear()}
        </p>
        <p className="text-wrap">Privacy Policy | Terms & Conditions</p>
      </motion.div>

      {/* Copy Alert */}
      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#1E3D69] text-white px-4 py-2 rounded shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </motion.section>
  );
};

export default Footer;
