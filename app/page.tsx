import { getServerSession } from "next-auth";
import { User } from "../components/authcomps/user";
import { LoginButton, LogoutButton } from "../components/buttons/auth";
import { authOptions } from "@/utils/authOptions";

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
