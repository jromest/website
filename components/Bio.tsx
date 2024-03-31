import Image from "next/image";

interface BioProps {
  image: string;
  name: string;
  bio: string;
}

export const Bio = ({ image, name, bio }: BioProps) => {
  return (
    <div className="section-container flex flex-col items-center justify-center text-center sm:flex-row sm:items-start sm:justify-start sm:text-left">
      <Image
        className="mx-auto mb-6 rounded-full border border-solid border-slate-300 sm:mx-0"
        src={image}
        alt={name}
        width={80}
        height={80}
      />

      <div className="sm:ml-8">
        <hr className="mx-auto mb-6 h-1 w-14 border-none bg-yellow-gold sm:mx-0" />

        <h2 className="mb-4 text-3xl font-bold">{name}</h2>

        <p>{bio}</p>
      </div>
    </div>
  );
};
