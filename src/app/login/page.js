import Image from "next/image";
import LoginModal from "../Components/LoginModal";

export default function Home() {
  return (
    <section className="bg-white h-screen flex justify-center items-center">
      <LoginModal />
    </section>
  );
}
