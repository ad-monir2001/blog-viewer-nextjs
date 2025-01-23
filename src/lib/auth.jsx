import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function checkAuthentication() {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    redirect("/login");
  }
}

export async function getUserInfo() {
  const { getUser } = getKindeServerSession();
  return await getUser();
}