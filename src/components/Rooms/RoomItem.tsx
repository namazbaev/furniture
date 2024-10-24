import Image, { StaticImageData } from "next/image";

interface RoomItemProps {
  title: string;
  img: string | StaticImageData;
}

export default function RoomItem({ img, title }: RoomItemProps) {
  return (
    <div className="w-36 h-16 min-w-36 max-w-36 relative">
      <Image
        src={img}
        alt={title}
        width={144}
        height={64}
        loading="lazy"
        className="w-36 h-16 object-contain rounded-xl bg-gray-200"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
        <p className="text-white text-xs font-semibold">{title}</p>
      </div>
    </div>
  );
}
