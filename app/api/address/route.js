import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import VisitorInfo from "@/models/visitorsinfo";


export async function POST(request) {
    const data = await request.json();
    await connectMongoDB();
    try {
        await VisitorInfo.create(data);
        return NextResponse.json({ message: "Visitor information saved" }, { status: 201 });
    } catch (error) {
        console.error("Error saving visitor information:", error);
        return NextResponse.json({ error: "Failed to save visitor information" }, { status: 500 });
    }
}
