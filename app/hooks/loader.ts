"use client";
import { useEffect, useState } from "react";

export const useLoader = () => {
  const [loader, setLoader] = useState(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const load = async () => {
      await delay(1500);
      setLoader(false);
    };
    load();
  }, []);

  return {
    loader
  }
};
