import Image from "next/image";
import Aloo from "@/app/images/aloo.webp";

export default function Hero() {
  return (
    <>
      <div className="card w-6/12">
        <div className="hero-content">
          <div className="">
            <div className="text-center">
              <h1 className="text-5xl font-bold inline-flex">
                Hello there
                <Image src={Aloo} alt="" className="w-12 h-12 ml-2" />
              </h1>
            </div>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              maxime ducimus veniam ex corporis at sapiente beatae? Aut esse
              laudantium ad? Laborum totam illum blanditiis error, ea corrupti
              eligendi consequuntur!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
