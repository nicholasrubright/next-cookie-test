import { cookies } from "next/headers";
import LoadSession from "./LoadSession";

export default async function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

async function getSessionCookie() {
  return cookies().get("connect.sid")?.value;
}
