import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import Todo from "@/lib/models/todos";

export async function GET(req, { params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  await dbConnection();

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
    return NextResponse.json(todo);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
