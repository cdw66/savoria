import Image from "next/image";

const TeamMember = ({ member }) => {
  const { img, title, name, details } = member;
  return (
    <div className="mb-5 flex-col gap-4 items-center">
      <div className="w-full h-auto bg-green-300 aspect-square relative mb-4">
        <Image src={img} fill />
      </div>

      <div>
        <span className="uppercase text-tan font-lato">{title}</span>

        <h3 className="text-[24px] font-eb-garamond font-bold">{name}</h3>

        <p className="font-lato">{details}</p>
      </div>
    </div>
  );
};

export default TeamMember;
