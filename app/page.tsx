import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to DigiHealthCheck</h1>
      <p className="text-lg text-gray-700 mt-4">
        Your AI-powered health insights platform. Stay updated with the latest health trends.
      </p>

      <div className="mt-6">
        <a
          href="/latest-trends"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Explore Health Trends
        </a>
      </div>
    </div>
  );
}