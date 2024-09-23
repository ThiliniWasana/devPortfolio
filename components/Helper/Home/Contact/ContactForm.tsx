// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="bg-[#140c1c] round-lg p-4 sm:p-10">

//       {/*input Filed*/}
//       <form className="mt-8 block w-full overflow-hidden">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
//           />
//         </div>

//         <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
//           />
//           <input
//             type="text"
//             placeholder="Phone number"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
//           />
//         </div>
//         <textarea className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[5px] border-gray-200 border-opacity-15 outline-none" rows={7} placeholder="message"></textarea>
//         <div className="mt-4 flex justify-center w-full">
//             <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">Send Message</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
"use client";
import { handleSubmit } from "@/action/sendEmail";
import React, { useEffect , useRef} from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";



const ContactForm = () => {
 

  
  const formRef = useRef<HTMLFormElement>(null);

  

  const handleFormSubmit = async (formData: FormData) => {
    await handleSubmit(formData);
    toast.success("Email sent successfully!");
    if (formRef.current) {
      formRef.current.reset(); // Reset the form fields
    }
  };
  return (
    <div className="bg-[#140c1c] round-lg p-4 sm:p-10">
      {/*input Filed*/}
      <form
        className="mt-8 block w-full overflow-hidden"
        action={async (formData) => {
          handleFormSubmit(formData);
        }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <textarea
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="message"
        ></textarea>
        <div className="mt-4 flex justify-center w-full">
          <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
function experimental_useFormStatus(): { pending: any } {
  throw new Error("Function not implemented.");
}
