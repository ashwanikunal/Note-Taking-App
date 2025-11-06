import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-center p-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Noterr</h1>
      <p className="text-gray-700 text-lg max-w-md mb-8">
        We made an easy and beautiful way to manage your notes efficiently. Stay
        organized, creative, and focused — all in one place.
      </p>
      <button
        onClick={() => navigate("/notes")}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-md transition-transform hover:scale-105"
      >
        Start
      </button>
    </div>
  );
}
