import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Todo from "@/app/models/todo";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Todo.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const todos = await Todo.find();
    return NextResponse.json({ todos });
}

// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectMongoDB();
//     await Todo.findByIdAndDelete(id);
//     return NextResponse.json({ message: "todos deleted" }, { status: 200 });
// }