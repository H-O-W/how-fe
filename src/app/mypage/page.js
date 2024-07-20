"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import userState from "../Store/userState";

const MyPage = () => {
  const [username, setUsername] = useState("이름");
  const [phone, setPhone] = useState("전화번호");
  const [email, setEmail] = useState("이메일");
  const [profileImage, setProfileImage] = useState(
    "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn2.ppomppu.co.kr%2Fzboard%2Fdata3%2F2022%2F0509%2F20220509173224_d9N4ZGtBVR.jpeg&type=sc960_832"
  );

  const navigate = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(userState);

  async function getUser() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/member/info`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      });

      setUsername(response.data.name);
      setPhone(response.data.phoneNumber);
      setEmail(response.data.email);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response.status === 404) {
        console.error("유저 정보 불러오기 실패:", error);
      }
    }
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate.push("/");
  };

  useEffect(() => {
    getUser();
  }, []); // 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 함

  return (
    <section className="bg-white h-screen flex justify-center items-center">
      <div className="w-screen mx-auto flex flex-col items-center space-y-12">
        <div className="flex p-8 shadow-lg rounded-2xl bg-white w-1/2">
          <div className="w-1/3 pr-8 flex justify-center items-center">
            <div className="relative h-40 w-40 rounded-full overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                <div className="flex items-center justify-center bg-gray-200 w-full h-full rounded-full">
                  <span className="text-gray-500 text-xl">No image</span>
                </div>
              )}
            </div>
          </div>

          <div className="w-2/3">
            <div className="text-3xl font-bold mb-4">{username}</div>
            <div className="text-lg text-gray-600 mb-2">{phone}</div>
            <div className="text-lg text-gray-600 mb-6">{email}</div>
            <Link
              href={"/mypage/update"}
              className="px-4 py-2 bg-gray-300 text-white rounded-full mr-4"
            >
              정보 수정
            </Link>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full" onClick={logout}>
              로그아웃
            </button>
          </div>
        </div>

        <div className="p-8 shadow-lg rounded-2xl bg-white w-1/2">
          <div className="text-2xl font-bold mb-4">나만의 기업 추천 리스트</div>
          <ul>
            <li className="mb-4 pb-4 border-b">기업 1</li>
            <li className="mb-4 pb-4 border-b">기업 2</li>
            <li className="mb-4 pb-4 border-b">기업 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyPage;
