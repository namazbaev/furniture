import { CartIcon, Logo } from "@/components/AllSvgIcons";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />

      <button className="w-14 h-14 border-none rounded-xl bg-blue-100 flex justify-center items-center">
        <CartIcon />
      </button>
    </header>
  );
}
