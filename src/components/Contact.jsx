import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareFacebook,
  FaTelegram,
} from "react-icons/fa6";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ajjoyova", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5 px-2 sm:px-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-full max-w-md sm:max-w-lg md:max-w-xl px-6 py-6 rounded-xl shadow-md"
        >
          <h1 className="text-xl font-semibold mb-6">Send Your Message</h1>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your fullname"
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <span className="text-red-600 mt-1 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <span className="text-red-600 mt-1 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              name="message"
              placeholder="Enter your query"
              rows={5}
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight resize-y focus:outline-none focus:shadow-outline"
            />
            {errors.message && (
              <span className="text-red-600 mt-1 text-sm">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-xl px-3 py-3 hover:bg-slate-700 duration-300 font-semibold"
          >
            Send
          </button>
        </form>
      </div>

      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/RoshANC-IT",
                  color: "hover:text-blue-600",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/roshan-chauhan-IT/",
                  color: "hover:text-blue-500",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/r_o_s_h_a_n_9_4_2_0/",
                  color: "hover:text-red-600",
                },
                {
                  icon: <FaTelegram />,
                  link: "https://t.m/",
                  color: "hover:text-blue-400",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-[44px] text-2xl transition ${item.color}`}
                  style={{
                    background: "#ffffff",
                    boxShadow: "9px 9px 18px #b1b1b1, -9px -9px 18px #ffffff",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Ankush</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
