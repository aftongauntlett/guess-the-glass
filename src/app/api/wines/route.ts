import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase.from("wines").select("*");

  if (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }

  return NextResponse.json(data, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  try {
    const wine = await request.json();

    const { error } = await supabase.from("wines").insert([wine]);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Wine added successfully!" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding wine:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
