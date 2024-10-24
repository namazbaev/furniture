import Link from "next/link";
import { CartIcon, Logo } from "@/components/AllSvgIcons";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Link href="/cart">
        <button className="relative w-14 h-14 border-none rounded-xl bg-blue-100 flex justify-center items-center">
          <CartIcon />
          <span className="absolute top-2 right-2 bg-purple w-4 h-4 rounded-full flex justify-center items-center p-1.5 text-[8px] text-white">
            0
          </span>
        </button>
      </Link>
    </header>
  );
}
