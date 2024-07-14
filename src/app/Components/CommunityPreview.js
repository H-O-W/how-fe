import { ThumbsUp, MessageCircle } from "lucide-react";

const CommunityPreview = ({ title, content, author, date, likes, comments, navigate }) => {
  return (
    <div
      onClick={navigate}
      className="border-b border-gray-200 hover:bg-green-50 transition duration-300"
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold text-green-700 mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{content}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span>{author}</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ThumbsUp size={16} className="mr-1 text-green-500" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle size={16} className="mr-1 text-green-500" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPreview;
