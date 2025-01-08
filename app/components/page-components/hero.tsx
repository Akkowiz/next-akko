import Image from "next/image";
import Aloo from "@/app/images/aloo.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="card w-10/12 lg:w-6/12 outline justify-center items-center">
        <div className="hero-content ">
          <div className="">
            <div className="text-center">
              <h1 className="text-5xl font-bold inline-flex py-2">
                Hello
                <Image
                  src={Aloo}
                  alt="funny frog emoji"
                  className="w-12 h-12 ml-2"
                />
              </h1>
            </div>
            <div className="space-y-4">
              <p>
                On the top left you can pick a theme to your liking. My personal
                favourite is cyberpunk, despite the powerful yellow, or maybe
                <span className="font-extrabold"> because </span>of the powerful
                yellow.
              </p>
              <p>
                On the top right you can find a{" "}
                <Link className="link" href="/resources">
                  link to all the resources I used for making this website.
                </Link>{" "}
                It is made in nextjs, Tailwind and daisyUI.
              </p>
              <p>
                Also, try out the button on the very bottom of this page, it is
                made with much love and care (it has multiple soundclips!)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
