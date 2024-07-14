"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import CommunityPreview from "../Components/CommunityPreview";
import axios from "axios";
import { Link } from "next/link";
import { useRouter } from "next/navigation";

const CommunityBoard = () => {
  const navigate = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const posts = [
    { id: 1, title: "제목1", date: "2023-06-01", likes: 10, author: "사용자1" },
    { id: 2, title: "제목2", date: "2023-06-02", likes: 20, author: "사용자2" },
    { id: 3, title: "제목3", date: "2023-06-03", likes: 30, author: "사용자3" },
    { id: 4, title: "제목4", date: "2023-06-04", likes: 40, author: "사용자4" },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/board/list");
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
        {filteredPosts.map((post) => (
          <CommunityPreview
            key={post.id}
            post={post}
            navigate={() => navigate.push(`/community/${post.id}`)}
          />
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">검색 결과가 없습니다.</p>
      )}
    </section>
  );
};

export default CommunityBoard;
