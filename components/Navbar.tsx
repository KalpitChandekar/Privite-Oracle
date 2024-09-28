import { Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="pt-2 text-[#09B3B0] flex items-center justify-between max-w-6xl mx-auto">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={350}
          height={110}
          className="w-44"
        />
      </div>
      <div className="flex gap-10">
        <ul className="md:flex hidden gap-10 items-center ">
          <li className="hover:text-[#FF9F00] border-transparent border-b-2 hover:border-[#FF9F00]">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#FF9F00] border-transparent border-b-2 hover:border-[#FF9F00]">
            <a href="#">Client Registration</a>
          </li>
          <li className="hover:text-[#FF9F00] border-transparent border-b-2 hover:border-[#FF9F00]">
            <a href="#">Advisors</a>
          </li>
          <li className="hover:text-[#FF9F00] border-transparent border-b-2 hover:border-[#FF9F00]">
            <a href="#">Register as an Advisor</a>
          </li>
        </ul>
        <div className="bg-[#09B3B0] rounded-2xl text-white p-1">
          <a href="#">
            <Search />
          </a>
        </div>
        <button className="bg-[#09B3B0] text-white px-4 rounded-md">
          <a href="#">Login</a>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
