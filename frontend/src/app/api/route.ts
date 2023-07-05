import { cookies, headers } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = await fetch("http://localhost:8080/api/counter", {
    method: "GET",
    cache: "no-cache",
  });

  // console.log("SetCookie: ", response.headers.getSetCookie());
  const mycookie = response.headers.getSetCookie()[0];

  cookies().set({
    name: "test",
    value: "myballs",
    httpOnly: false,
    path: "/",
  });

  const data = await response.json();

  const myresponse = NextResponse.json(data);

  myresponse.headers.append("Set-Cookie", response.headers.getSetCookie()[0]);

  return myresponse;
}
