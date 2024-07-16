"use server";

import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

async function NavigationMenu() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = process.env.ADMIN_EMAIL === user?.email;

  return (
    <nav className="inset-x-0 w-full px-8 py-4 border-b border-zinc-200 backdrop-blur-lg sticky top-0 bg-white/75 z-[100]">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user && (
              <Link
                className={buttonVariants({
                  className: "font-semibold",
                  size: "sm",
                  variant: "ghost",
                })}
                href="/api/auth/logout"
              >
                Sign out
              </Link>
            )}
            {!user && (
              <>
                <Link
                  className={buttonVariants({
                    className: "font-semibold",
                    size: "sm",
                    variant: "ghost",
                  })}
                  href="/api/auth/register"
                >
                  Sign up
                </Link>
                <Link
                  className={buttonVariants({
                    className: "font-semibold",
                    size: "sm",
                    variant: "ghost",
                  })}
                  href="/api/auth/login"
                >
                  Log in
                </Link>
              </>
            )}
            {isAdmin && (
              <Link
                className={buttonVariants({
                  className: "font-semibold",
                  size: "sm",
                })}
                href="/dashboard"
              >
                Dashboard ✨
              </Link>
            )}
            <Link
              className={buttonVariants({
                className: "font-semibold hidden md:flex",
                size: "sm",
              })}
              href="/configure/upload"
            >
              Create case
              <ArrowRight className="ml-1.5 size-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default NavigationMenu;
