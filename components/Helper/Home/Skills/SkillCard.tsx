import React from "react";
import Image from "next/image"; // Correctly import Image from next/image

// Define props type
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, title } = skill;
  return (
    <section id="skills">
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center round-lg bg-gray-900">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80} // You need to specify both width and height for Next.js Image
        className="object-cover mx-auto"
      />
      <h1 className="text-white text-[18px] mt-4 font-[600]">{title}</h1> {/* Add title for display */}
    </div>
    </section>
  );
};

export default SkillCard;
