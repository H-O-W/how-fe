"use client";
import { useRouter } from "next/navigation";
import { HiBars4 } from "react-icons/hi2";

const NavBar = () => {
  const navigate = useRouter();
  return (
    <nav className="w-full fixed top-0 z-50 inline-flex justify-between items-center p-5 gap-3 text-lg">
      <button className="text-2xl">
        <HiBars4 />
      </button>
      <ul className="inline-flex gap-3">
        <li onClick={() => navigate.push("/")}>HOME</li>
        <li onClick={() => navigate.push("/roadmap")}>로드맵</li>
        <li onClick={() => navigate.push("/login")}>로그인</li>
      </ul>
    </nav>
  );
};
export default NavBar;
