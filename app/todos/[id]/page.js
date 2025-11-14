export default async function TodoDetails({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Todo not found</div>;
  }

  const todo = await res.json();

  return <div>{todo.title}</div>;
}
