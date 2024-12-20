import Image from "next/image";
import Logo from "../../public/images/logo.png";
import SearchBar from "./search-bar";
import Link from "next/link";
import { cn } from "@/utils/lib";

export type navElementT = {
  label: string;
  href: string;
  selected?: boolean;
  disabled?: boolean;
};

const NavBar = ({ navElements }: { navElements: navElementT[] }) => {
  return (
    <nav>
      <div className="flex w-full p-4 items-center">
        <Image
          src={Logo}
          alt="Logo da primavera artefatos de cimento"
          className="w-60 mx-4"
        />
        <SearchBar />
      </div>
      <div>
        <ul className="flex justify-between px-16 text-lg">
          {navElements.map((el, i) => (
            <li className={cn("flex items-center flex-col hover:scale-105 transition-all", {"text-gray-400 cursor-not-allowed pointer-events-none": el.disabled})} key={i}>
              <Link href={el.href} className={cn({"pointer-events-none select-none": el.disabled})}>{el.label}</Link>
              {el.selected && (
                <div className="w-1/5 border-t-2 border-blue"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
