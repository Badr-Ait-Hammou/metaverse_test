import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Todo from "@/models/todo";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Todo.create({ title, description });
    return NextResponse.json({ message: "Todo Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const todos = await Todo.find();
    return NextResponse.json({ todos });
}

