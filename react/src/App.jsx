import { useState } from "react";

export default function AvatarManager() {
  const [name, setName] = useState("");
  const [avatars, setAvatars] = useState([]);

  const getInitials = (fullName) => fullName.split(" ").map((n) => n[0]?.toUpperCase()).join("");

  const randomColor = () => {
    const colors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa", "#fb923c"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addAvatar = () => {
    if (!name.trim()) return;
    setAvatars([...avatars, { name, color: randomColor() }]);
    setName("");
  };

  const removeAvatar = (index) => {
    setAvatars(avatars.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addAvatar();
    }
  };

  const handleName = (e) => {
  setName(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Avatar Generator
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleName}
            onKeyDown={handleKeyPress}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={addAvatar}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-4 flex flex-col items-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold mb-2"
                style={{ backgroundColor: avatar.color }}
              >
                {getInitials(avatar.name)}
              </div>
              <p className="text-sm text-gray-700">{avatar.name}</p>
              <button
                onClick={() => removeAvatar(index)}
                className="mt-2 text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
