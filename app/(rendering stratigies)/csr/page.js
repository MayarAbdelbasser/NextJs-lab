"use client";

import { useEffect, useState } from "react";

function CSR() {
  const [posts, setPosts] = useState([]);
  async function getData() {
    const res = await fetch(
      "https://69174668a7a34288a280302d.mockapi.io/posts"
    );
    const data = await res.json();
    setPosts(data);
  }
  useEffect(() => {
    (() => getData())();
  }, []);
  return (
    <div className="grid grid-cols-4">
      {posts.map((p) => {
        return <p key={p.id}>{p.name}</p>;
        sdf;
      })}
    </div>
  );
}

export default CSR;
