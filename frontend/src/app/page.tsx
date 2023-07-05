import { cookies } from "next/headers";
import Counter from "./counter";

export default async function Home() {
  const sessionCookie = await getSessionCookie();

  return (
    <div>
      <h1>Hello World!</h1>
      <Counter cookie={sessionCookie} />
    </div>
  );
}

async function getSessionCookie() {
  return cookies().get("connect.sid")?.value;
}
