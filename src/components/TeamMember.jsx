import Image from "next/image";

const TeamMember = ({ member }) => {
  const { image, title, name, details } = member;
  return (
    <div className="mb-5 flex-col gap-4 items-center">
      <div className="w-full aspect-square relative mb-4">
        <Image src={image} fill className="object-cover" alt={name} />
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
