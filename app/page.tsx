import React from "react";

export default function Home() {
  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to DigiHealthCheck</h1>
      <p className="text-lg text-gray-700 mt-2">Your AI-Powered Health Insights Platform</p>
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Latest Health Trends</h2>
        <p>Automatically updated daily using AI-driven insights from Google Trends.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Featured Articles</h2>
        <ul className="list-disc list-inside">
          <li>AI in Healthcare: How It’s Changing Medicine</li>
          <li>Top 5 Health Gadgets for 2025</li>
        </ul>
      </section>
      <footer className="mt-10 text-sm text-gray-500">
        &copy; 2025 DigiHealthCheck. All rights reserved.
      </footer>
>>>>>>> 6ab19d1 (Added Next.js site)
    </div>
  );
}