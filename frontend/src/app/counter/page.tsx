import { cookies } from "next/headers";

export default async function Page() {
  const counterResponse = await getCount();

  return (
    <div>
      <h1>Counter!!</h1>
      <h4>Count: {counterResponse.counter}</h4>
    </div>
  );
}

async function getCount() {
  const sessionCookie = cookies().get("connect.sid")?.value;

  const response = await fetch("http://localhost:8080/api/counter", {
    method: "GET",
    cache: "no-cache",
    headers: {
      Cookie: `connect.sid=${sessionCookie}`,
    },
  });

  return response.json();
}
