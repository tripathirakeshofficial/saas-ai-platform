"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("21f330e5-9866-4c79-b561-7b90bc4bb4c5");
  }, []);

  return null;
};
