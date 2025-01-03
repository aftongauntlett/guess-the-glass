// app/api/wines/route.ts
import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";

export async function GET() {
  // Ensure the table name is lowercase
  const { data, error } = await supabase
    .from("wines") // lowercase 'wines', as per your table name
    .select("*");

  if (error) {
    console.error("Supabase Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
