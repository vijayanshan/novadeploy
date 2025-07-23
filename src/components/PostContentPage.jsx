import React from "react";

const samplePosts = [
  {
    id: 1,
    type: "video",
    mediaURL: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "🎬 Behind the scenes! #filmmaking",
    time: "1 hr ago",
    likes: 132,
    comments: ["Awesome!", "🔥🔥🔥"],
  },
  {
    id: 2,
    type: "image",
    mediaURL: "https://via.placeholder.com/500x700",
    caption: "On set today with amazing vibes 💡",
    time: "3 hrs ago",
    likes: 94,
    comments: ["Where is this?", "Love the lighting!"],
  },
];

const PostContentPage = () => {
  const handleShare = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("🔗 Link copied to clipboard!");
    } catch {
      alert("❌ Could not copy link.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black font-sans px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">News Feed</h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        {samplePosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300"
          >
            <div className="p-4">
              <div className="font-semibold text-lg mb-1">🎥 {post.caption}</div>
              <div className="text-sm text-gray-500 mb-2">🕒 {post.time}</div>
            </div>
            {post.type === "video" ? (
              <video
                src={post.mediaURL}
                controls
                className="w-full max-h-[450px] object-cover"
              />
            ) : (
              <img
                src={post.mediaURL}
                alt="post"
                className="w-full max-h-[450px] object-cover"
              />
            )}
            <div className="p-4">
              <div className="flex gap-6 text-sm text-gray-600 mb-2">
                <span>❤️ {post.likes} Likes</span>
                <span>💬 {post.comments.length} Comments</span>
              </div>
              <div className="flex gap-4 mt-2">
                <button className="text-blue-600 font-semibold hover:underline">Like</button>
                <button className="text-blue-600 font-semibold hover:underline">Comment</button>
                <button
                  className="text-blue-600 font-semibold hover:underline"
                  onClick={() => handleShare(post.mediaURL)}
                >
                  Share
                </button>
              </div>
              <div className="mt-3 space-y-1 text-sm text-gray-700">
                {post.comments.map((cmt, i) => (
                  <p key={i}>💬 {cmt}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContentPage;
