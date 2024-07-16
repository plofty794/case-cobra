/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl-pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 hidden lg:block left-0 -top-20">
                <img src="/snake-1.png" alt="logo" className="w-full" />
              </div>
              <h1 className="relative mt-16 !leading-tight tracking-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
                Your Image on a{" "}
                <span className="bg-green-600 px-4 ml-2 text-white">
                  Custom
                </span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                Case cobra allows you to protect your memories, not just your
                phone.
              </p>
              <ul className="mt-8 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    High quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row  items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    src="/users/user-1.png"
                    className="w-10 h-10 object-cover ring ring-slate-100 rounded-full"
                    alt="user image"
                  />
                  <img
                    src="/users/user-2.png"
                    className="w-10 h-10 object-cover ring ring-slate-100 rounded-full"
                    alt="user image"
                  />
                  <img
                    src="/users/user-3.png"
                    className="w-10 h-10 object-cover ring ring-slate-100 rounded-full"
                    alt="user image"
                  />
                  <img
                    src="/users/user-4.jpg"
                    className="w-10 h-10 object-cover ring ring-slate-100 rounded-full"
                    alt="user image"
                  />
                  <img
                    src="/users/user-5.jpg"
                    className="w-10 h-10 object-cover ring ring-slate-100 rounded-full"
                    alt="user image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-1 w-full flex justify-center xl:justify-start px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="an arrow pointing to the sample phone image"
                className="absolute w-36 lg:w-48 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt="an line surrounding to the sample phone image"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone imgSrc="/testimonials/1.jpg" className="w-64" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:6">
            <h2 className="order-1 mt-2 tracking-tight !leading-tight text-center text-balance text-5xl md:text-6xl font-bold text-gray-900">
              What are{" "}
              <span className="relative px-2">
                customers
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 text-green-600 hidden sm:block" />
              </span>{" "}
              say
            </h2>
            <img
              src="/snake-2.png"
              alt="a snake image"
              className="order-0 lg:order-2 w-24"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I usually keep my phone together with my keys in my
                  pocket and that led to some pretty heavy scratchmarks on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight !leading-tight text-center text-balance text-5xl md:text-6xl font-bold text-gray-900">
                Upload your photo and get{" "}
                <span className="relative px-2 bg-green-600 text-white">
                  your own case
                </span>{" "}
                now.
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl lg:rounded-2xl bg-gray-900/5 ring-inset ring-gray-900/10">
                <img
                  src="/horse.jpg"
                  className="object-cover rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <Phone imgSrc="/horse_phone.jpg" className="w-60" />
            </div>
          </div>

          <ul className="w-fit max-w-prose mx-auto space-y-2 mt-12 sm:text-lg">
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              High quality silicone material
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              Scratch and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />5 year
              print warranty
            </li>
          </ul>

          <div className="mt-12 w-max mx-auto">
            <Link
              href={"/configure/upload"}
              className={buttonVariants({
                size: "lg",
              })}
            >
              Create your case now
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
