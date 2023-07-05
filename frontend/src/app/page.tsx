import { CounterResponse } from "@/types/api";
import { cookies } from "next/dist/client/components/headers";

export default async function Home() {
  const response = await getCounter();

  console.log("test cookie: ", cookies().get("test"));

  return (
    <div>
      <h1>Hello World!</h1>
      <h4>Counter: {response.counter}</h4>
    </div>
  );
}

async function getCounter() {
  const response = await fetch("http://localhost:3000/api", {
    method: "GET",
    cache: "no-cache",
  });

  const test = cookies().get("connect.sid");

  console.log("cookie: ", test);

  return response.json();
}
