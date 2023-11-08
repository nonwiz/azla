import Image from "next/image";
import { BasicSlider } from "./client/slider";

export default function HeroHome() {
  return (
    <>
      <section className="flex flex-row justify-center items-center">
        <BasicSlider />
        <div className="h-full p-4 -ml-10">
        <Image
          src="/assets/hero/flower-vase.jpg"
          width={400}
          height={400}
          alt="Illustration on hero section."
        />
        </div>
      </section>
    </>
  );
}
