"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        An Error Occurred
      </h1>
      <p className="mb-6">{error.message}</p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
