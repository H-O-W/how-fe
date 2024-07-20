import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-20">
      <h2 className="font-bold text-3xl">404 Not Found</h2>
      <p className="">요청하신 페이지를 찾을 수 없어요!</p>
      <Link className="bg-green-800 rounded-lg px-4 py-1 text-white" href="/">
        돌아가기
      </Link>
    </div>
  );
}
