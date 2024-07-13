import React from "react";

const Comment = ({ comment }) => {
  return (
    <div key={comment.id} className="border-b border-gray-300 py-4">
      <div className="font-bold">{comment.id}</div>
      <div>{comment.comment}</div>
    </div>
  );
};

export default Comment;
