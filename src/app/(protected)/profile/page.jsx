import { checkAuthentication, getUserInfo } from "@/lib/auth";

export default async function ProfilePage() {
  await checkAuthentication();
  const user = await getUserInfo();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
      <p>Logged in as: {user?.email}</p>
    </div>
  );
}