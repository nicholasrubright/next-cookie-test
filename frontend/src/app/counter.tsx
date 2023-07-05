"use client";

import { useEffect, useState } from "react";

export default function Counter(props: CounterProps) {
  const { cookie } = props;

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      console.log(cookie);

      const response = await fetch("/api", {
        cache: "no-cache",
        headers: {
          Cookie: `connect.sid=${cookie}`,
        },
      });

      const res = await response.json();

      setCount(res.counter);
    };

    getData();
  }, [cookie]);

  return <h4>Counter: {count}</h4>;
}

interface CounterProps {
  cookie?: string;
}
