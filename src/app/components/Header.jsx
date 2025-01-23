import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Header() {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          {authenticated && (
            <Link href="/profile" className="hover:text-gray-300">Profile</Link>
          )}
        </div>
        <div>
          {authenticated ? (
            <LogoutLink className="bg-red-500 px-4 py-2 rounded">
              Logout
            </LogoutLink>
          ) : (
            <LoginLink className="bg-blue-500 px-4 py-2 rounded">
              Login
            </LoginLink>
          )}
        </div>
      </nav>
    </header>
  );
}