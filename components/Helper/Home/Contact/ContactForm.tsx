
"use client";
import React, { useEffect, useRef } from "react";
import { handleSubmit} from "@/action/sendEmail"; // Ensure this path is correct
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // If you still want to track active section, ensure useActiveSectionContext is defined
    // if (inView) {
    //   setActiveSection("Contact");
    // }
  }, [inView]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(formRef.current!);
    const { error } = await handleSubmit(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
    formRef.current?.reset(); // Reset the form fields
  };

  return (
    <div data-aos="zoom-in" className="bg-[#140c1c] round-lg p-4 sm:p-10" ref={ref}>
      <form
        ref={formRef}
        className="mt-8 block w-full overflow-hidden"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <textarea
          name="message"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>

        <div className="mt-4 flex justify-center w-full">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
