import { dbConnection } from "@/lib/dbConnection";
import Todo from "@/lib/models/todos";
import { NextResponse } from "next/server";

dbConnection();

export async function GET() {
  try {
    const todos = await Todo.find();
    return NextResponse.json(todos, { status: 200 });
  } catch (err) {
    return NextResponse(err, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title, author } = await req.json();
    const todo = await Todo.create({ title, author });
    return NextResponse.json(
      { message: "Todo added successfully", todo },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: err,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const todo = await Todo.findOneAndDelete({ _id: id });
    return NextResponse.json(
      { message: "Todo deleted successfully", todo },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: err,
      },
      { status: 500 }
    );
  }
}
