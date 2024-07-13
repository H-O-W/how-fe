"use client";
import CommunityPreview from "../Components/CommunityPreview";

const CommunityBoard = () => {
  const posts = [
    { id: 1, title: "제목1", date: "2023-06-01", likes: 10 },
    { id: 2, title: "제목2", date: "2023-06-02", likes: 20 },
    { id: 3, title: "제목3", date: "2023-06-03", likes: 30 },
    { id: 4, title: "제목4", date: "2023-06-04", likes: 40 },
  ];

  return (
    <section className="container mx-auto p-4 flex gap-2 pt-24 mt-16">
      <div className="w-screen">
      {posts.map(post => (
        <CommunityPreview key={post.id} post={post} />
      ))}
    </div>
    </section>
  );
};

export default CommunityBoard;
