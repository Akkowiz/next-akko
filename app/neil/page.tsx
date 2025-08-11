import Link from "next/link";
import NeilIntro from "../components/page-components/neil-intro";

export default function Neil() {
    return (
        <div className="max-h-[calc(100vh-64px)] lg:max-h-[calc(100vh-80px)]  h-full w-full">
            <div className=" flex flex-col items-center justify-center ">
                <NeilIntro />
            </div>
        </div>
    );
}
