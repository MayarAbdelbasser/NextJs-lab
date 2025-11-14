import Link from "next/link";
import { GET } from "../api/todos/route";

async function todosPage() {
  const res = await GET();
  const todos = await res.json();
  if (todos.length === 0) {
    return (
      <h1 classNameName="text-4xl text-amber-900 font-bold text-center">
        No todos found. Please <Link href={"/todo/addTodo"}>Add todo</Link>
      </h1>
    );
  }
  return (
    <div className="m-5">
      <Link
        href={"todos/addTodo"}
        className="border-2 p-3 bg-yellow-200 text-xl"
      >
        Add todo
      </Link>
      <div className="grid grid-cols-4 gap-3 m-5">
        {todos.map((todo) => {
          return (
            <div
              key={todo._id.toString()}
              className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium"
            >
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                {todo.title}
              </h5>
              <p className="text-body">{todo.author}</p>
              <Link href={`/todos/${todo._id}`}>Show details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default todosPage;
