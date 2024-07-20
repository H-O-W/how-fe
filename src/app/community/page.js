"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Search } from "lucide-react";
import CommunityPreview from "../Components/CommunityPreview";
import axios from "axios";
import { Link } from "next/link";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";

const CommunityBoard = () => {
  const navigate = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(searchTerm);
  }, [searchTerm]);

  const getPosts = useCallback(
    debounce(async (term) => {
      try {
        const encodedSearchTerm = encodeURIComponent(term);
        let apiQuery = `${process.env.NEXT_PUBLIC_API_URL}/board/list`;
        if (term) {
          apiQuery += `?keyword=${encodedSearchTerm}`;
        }
        const response = await axios.get(apiQuery, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setPosts(response.data);
        console.log("글 불러오기 결과", response);
      } catch (error) {
        if (error) {
          refreshAccessToken();
          console.error(error);
        }
      }
    }, 200),
    []
  );

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const accessToken = localStorage.getItem("accessToken");
      if (refreshToken) {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/member/reissue`, {
          accessToken,
          refreshToken,
        });

        console.log("리프레시토큰 발급", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container mx-auto p-4 pt-24 mt-16 mb-16">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-black mb-6">하우 커뮤니티</h1>
        <div onClick={() => navigate.push("/community/write")}>
          <button className="px-4 py-1 m-2 font-bold text-xl rounded-lg bg-white text-black border shadow hover:shadow-md hover:translate-y-0.5 transition">
            글 작성
          </button>
        </div>
      </div>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="게시글 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <Search className="absolute left-3 top-2.5 text-black" size={20} />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {posts.map((post) => (
          <CommunityPreview
            key={post.boardId}
            title={post.title}
            content={post.content}
            author={post.writer}
            date={post.writeDate}
            likes={post.likes || 0}
            comments={post.commentReadDTOS.length || 0}
            navigate={() => navigate.push(`/community/${post.boardId}`)}
          />
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">검색 결과가 없습니다.</p>
      )}
    </section>
  );
};

export default CommunityBoard;
