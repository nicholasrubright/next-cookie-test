"use client";

import { useEffect } from "react";

export default function LoadSession() {
  useEffect(() => {
    const getData = async () => {
      await fetch("/api");
    };

    getData();
  }, []);

  return null;
}
