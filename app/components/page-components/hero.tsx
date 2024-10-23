import Image from "next/image";
import Aloo from "@/app/images/aloo.webp";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold inline-flex">
              Hello there
              <Image src={Aloo} alt="" className="w-12 h-12 ml-2" />
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
