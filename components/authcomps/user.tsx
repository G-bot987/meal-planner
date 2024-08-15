"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();
  console.log("session user client", session);
  return (
    <div>
      <h2>user client</h2>
      {JSON.stringify(session)}
    </div>
  );
};
