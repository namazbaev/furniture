import RoomImg from "../../assets/nmedov.png";
import RoomItem from "@/components/Rooms/RoomItem";

const data = [
  {
    id: 1,
    img: RoomImg,
    title: "Living room",
  },
  {
    id: 2,
    img: RoomImg,
    title: "Bedroom",
  },
  {
    id: 3,
    img: RoomImg,
    title: "Living room",
  },
  {
    id: 4,
    img: RoomImg,
    title: "Bedroom",
  },
  {
    id: 2,
    img: RoomImg,
    title: "Bedroom",
  },
  {
    id: 3,
    img: RoomImg,
    title: "Living room",
  },
  {
    id: 4,
    img: RoomImg,
    title: "Bedroom",
  },
];

export default function Rooms() {
  return (
    <section>
      <h6 className="text-sm text-black font-bold mb-4">Xonalar</h6>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap space-x-2">
          <div className="grid grid-flow-col grid-rows-2 gap-2">
            {data.map((room, index) => (
              <RoomItem key={index} title={room.title} img={room.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
