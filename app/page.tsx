import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./user";
import { LoginButton, LogoutButton } from "./auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <p>hello world</p>
      {JSON.stringify(session)}
      <User />
    </div>
  );
}
