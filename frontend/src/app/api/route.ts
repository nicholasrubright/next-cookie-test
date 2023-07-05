import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const sessionCookie = cookies().get("connect.sid")?.value;

  const response = await fetch("http://localhost:8080/api/test", {
    method: "GET",
    cache: "no-cache",
  });

  const myresponse = NextResponse.json({ test: "penis" });

  if (!sessionCookie) {
    console.log("big penis!");
    myresponse.headers.append("Set-Cookie", response.headers.getSetCookie()[0]);
  }

  return myresponse;
}
