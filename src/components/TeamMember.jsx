import Image from "next/image";

const TeamMember = ({ member }) => {
  const { img, title, name, desc } = member;
  return (
    <div className="mb-5">
      <div className="w-full h-auto bg-green-300 aspect-square relative mb-4">
        <Image src={img} fill />
      </div>

      <span className="uppercase text-tan font-lato">{title}</span>

      <h3 className="text-[24px] font-eb-garamond font-bold">{name}</h3>

      <p className="font-lato">{desc}</p>
    </div>
  );
};

export default TeamMember;
