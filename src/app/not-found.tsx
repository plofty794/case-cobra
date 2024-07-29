import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="text-center sm:text-left space-y-4 px-6 md:px-0">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-800">
          Oops!
        </h1>
        <h2 className="text-2xl lg:text-4xl text-pretty max-w-2xl text-zinc-700">
          We can&lsquo;t seem to find the page you&lsquo;re looking for.
        </h2>
        <p className="text-md lg:text-lg text-zinc-700">Error code: 404</p>
      </div>
      <Link
        href={"/"}
        className={buttonVariants({
          size: "lg",
          className: "mt-6 md:mt-8",
        })}
      >
        Go back to homepage
      </Link>
    </div>
  );
}

export default NotFound;
