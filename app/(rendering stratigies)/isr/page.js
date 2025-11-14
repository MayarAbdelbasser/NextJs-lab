async function getData() {
  const data = await fetch(
    "https://69174668a7a34288a280302d.mockapi.io/posts",
    {
      next: {
        revalidate: 3,
      },
    }
  );
  const res = await data.json();
  return res;
}
async function ISR() {
  const posts = await getData();
  return (
    <div className="grid grid-cols-4">
      {posts.map((p) => {
        return <p key={p.id}>{p.name}</p>;
      })}
    </div>
  );
}

export default ISR;
