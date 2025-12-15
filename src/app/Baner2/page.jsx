import Image from "next/image";

const page = () => {
  const baner2 = [
    { img: "/baner5.webp" },
    { img: "/baner6.webp" },
    // { img: "/baner7.webp" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {baner2.map((item, i) => (
        <Image
          key={i}
          src={item.img}
          width={400}
          height={200}
          className="rounded-lg w-full object-cover"
          alt="Banner"
        />
      ))}
    </div>
  );
};

export default page;
