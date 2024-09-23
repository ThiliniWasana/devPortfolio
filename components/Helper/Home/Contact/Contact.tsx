import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contacts">
    <div className="pt-16 pb-16 bg-gradient-to-b from-[#0f0715] to-[#0a0b1f]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-8 bg-[#140c1c] ">
        {/* contact Form*/}
        <div>
          <ContactInfo />
        </div>
        {/* contact Info*/}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
