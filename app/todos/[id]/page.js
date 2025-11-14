export default async function TodoDetails({ params }) {
  const resolvedParams = await params; // هنا نفك الـ Promise
  const { id } = resolvedParams;
  const deleteTodo = (id) => {
    console.log(id);
  };
  let todo = null;

  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      todo = await res.json();
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div
      key={todo._id.toString()}
      className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium"
    >
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
        {todo.title}
      </h5>
      <p className="text-body">{todo.author}</p>
    </div>
  );
}
