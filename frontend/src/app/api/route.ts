import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const sessionCookie = cookies().get("connect.sid")?.value;

  const response = await fetch("http://localhost:8080/api/counter", {
    method: "GET",
    cache: "no-cache",
    headers: {
      Cookie: sessionCookie ? `connect.sid=${sessionCookie}` : "",
    },
  });

  const data = await response.json();

  const myresponse = NextResponse.json(data);

  if (!sessionCookie) {
    myresponse.headers.append("Set-Cookie", response.headers.getSetCookie()[0]);
  }

  return myresponse;
}
