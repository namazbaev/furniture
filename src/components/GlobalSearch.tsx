import { SearchIcon } from "@/components/AllSvgIcons";

export default function GlobalSearch() {
  return (
    <section className="py-6">
      <div className="relative w-full">
        <SearchIcon className="absolute top-3 left-3" />

        <input
          className="pl-12 pr-3 py-4 border border-gray rounded-xl w-full text-xs focus:outline-none focus:border-blue-500 focus:duration-300 focus:transition focus:ring-0 placeholder:text-blue-500 placeholder:text-xs"
          type="text"
          placeholder="Kategoriya va mahsulotlari qidirish"
        />
      </div>
    </section>
  );
}
