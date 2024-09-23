import React from "react";
import Image from "next/image"; // If using Next.js for optimized image loading

const ContactInfo = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10 text-white">
      {/* Image */}
      <div className="w-full flex justify-center overflow-hidden">
        <Image
          src="/images/Handshake-Depositphotos.png" // Replace with your image path
          alt="Contact Image"
          layout="responsive" // Ensures the image fills its container
          width={600} // Adjust the size as needed
          height={150}
          className="object-cover" // Ensures the image covers the container area
        />
      </div>

      {/* Thank you message */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold font-prociono">
          Thank you for taking the time to visit!
        </h2>
        <p className="mt-4 text-lg">
          {`Feel free to reach out through this form for any inquiries or
          opportunities. I'd be happy to connect!`}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
