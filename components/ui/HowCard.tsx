import Image from "next/image";
interface imgcard {
  img: string;
  text: string;
  id: number;
}
function HowCard({ img, text, id }: imgcard) {
  return (
    <div className="w-72 border h-96 rounded-lg flex flex-col opacity-85 transition-opacity duration-500 ease-in-out hover:opacity-100">
      <Image
        src={img}
        width={512}
        height={64}
        className="rounded-t-lg"
        alt="fff"
      />
      <h2 className="mt-5 text-center font-semibold h-full">{text}</h2>
      <div className="w-full flex h-64 justify-center items-center">
        <h2 className="text-black text-center     font-bold text-2xl font-sans bg-white w-8 rounded-2xl">
          {id}
        </h2>
      </div>
    </div>
  );
}

export default HowCard;
