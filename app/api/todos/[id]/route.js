import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Todo from "@/app/models/todo";

export async function PUT(request, { params }) {
    const { id } = params;
    const { title: title, description: description } = await request.json();
    await connectMongoDB();
    await Todo.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "todo updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const todo = await Todo.findOne({ _id: id });
    return NextResponse.json({ todo }, { status: 200 });
}

export async function DELETE(request,{params}) {
    const { id } = params;
    await connectMongoDB();
    const todo = await Todo.findByIdAndDelete({ _id: id });
    return NextResponse.json({ message: "todos deleted" }, { status: 200 });
}