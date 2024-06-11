import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("GET request received");
  return NextResponse.json({ message: "GET request received" });
}

export async function POST(req) {
  console.log("POST request received");
  try {
    const body = await req.json();
    console.log("Received data:", body);

    return NextResponse.json({ message: "POST request received", data: body }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/Tickets:", error.message, error);
    return NextResponse.json({ message: "Error", error: error.message || error.toString() }, { status: 500 });
  }
}
