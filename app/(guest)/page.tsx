import { fontJosefin } from "@/lib/fonts";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const MobileTitle = (text: string) => {
  return (
    <h2 className="hidden md:block md:absolute inset-x-0 top-0 mt-20 text-center h-16 w-full font-bold text-white text-4xl">
      <span className="drop-shadow-lg">{text}</span>
    </h2>
  );
};

export default function Home() {
  return (
    <>
      <main className="snap-y snap-mandatory h-screen overflow-scroll">
        <section className="snap-start relative w-full h-screen">
          <h1 className="my-10 pt-10 text-center w-full font-bold text-primary text-4xl md:hidden">
            <span className="drop-shadow-lg">AZLA JONULING </span>
            <br />
            <span className="italic font-semibold text-3xl md:text-5xl">
              PORTFOLIO
            </span>
          </h1>
          <Image
            src="/jonong.jpg"
            alt="Miss Azla photo"
            width={1000}
            height={800}
            className="w-full object-cover h-[400px] md:h-screen grayscale"
          />
          <h1 className="hidden md:block md:absolute inset-x-0 top-0 mt-20 text-center h-16 w-full font-bold text-white text-4xl md:text-8xl">
            <span className="drop-shadow-lg">AZLA JONULING </span>
            <br />
            <span className="italic font-semibold text-3xl md:text-5xl">
              PORTFOLIO
            </span>
          </h1>
        </section>
        <section className="snap-start relative w-screen h-screen p-2 md:p-[10vw] font-sans tracking-widest">
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <h2
              className="p-10 text-4xl w-full text-center md:hidden"
              data-view="mobile"
            >
              A LITTLE ABOUT ME
            </h2>
            <h2 className="hidden md:block text-4xl md:text-7xl w-full md:w-[30vw]">
              A LITTLE
              <br /> ABOUT ME
            </h2>
            <Image
              src="/graduated_landscape.jpg"
              alt="Miss Azla photo"
              width={400}
              height={250}
              className="w-[500px] object-cover grayscale hover:grayscale-0 md:-ml-[24vw]"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="my-8 md:my-1 font-sans w-full md:w-[500px] tracking-widest text-md md:text-2xl">
              <p>
                I am passionate about public health, particularly in mental
                health. I am currently based in Malaysia. I&apos;ve been working
                as a volunteer at Thrive Well for the past two months and am
                ready to expand my knowledge and gain further experience in the
                public health field.{" "}
              </p>
            </div>
            <div>
              <Image
                src="/graduated_portrait.jpg"
                alt="Miss Azla photo"
                width={200}
                height={250}
                className="rotate-12 pt-20 object-cover grayscale hover:grayscale-0 hidden md:block"
              />
            </div>
          </div>
        </section>
        <section className="snap-start relative w-screen h-screen p-2 pt-4 md:p-[10vw] font-sans tracking-widest">
          <div className="flex flex-row gap-2 justify-between">
            <h2 className="text-5xl md:text-7xl w-[30vw]">
              WORK
              <br /> EXPERIENCE
            </h2>
            <div></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-24">
            <div className="font-sans md:w-[500px] tracking-widest text-md md:text-2xl font-extralight">
              <h3 className={fontJosefin.className + " font-bold text-xl md:text-3xl"}>
                Agency work
              </h3>
              <p className="mt-4">
                THRIVE WELL <br />
              </p>
              <p>
                <span>⎼ </span>
                <span>ASSISTANT (SEPT 2023 - PRESENT)</span>
              </p>

              <p className="mt-8">
                ADVENTIST DEVELOPMENT AND <br /> RELIEF AGENCY (ADRA)
              </p>
              <p>
                <span>⎼ </span>
                <span>PROJECT INTERN (JUNE - NOV, 2022)</span>
              </p>
            </div>

            <div className="font-sans md:w-[500px] tracking-widest text-md md:text-2xl mt-12 md:-mt-12 font-extralight">
              <h3 className={fontJosefin.className + " font-bold text-xl md:text-3xl"}>
                Activities
              </h3>
              <p className="mt-4">
                COMMUNITY OUTREACH <br /> PROGRAMS | THAILAND, 2019 - 2021
              </p>

              <p className="mt-8">
                MEDICAL MUSIC MISSION TRIP <br /> PHILIPPINES, DEC 2018 - JAN
                2019
              </p>

              <p className="mt-8">
                COMMUNITY OUTREACH PROGRAMS <br /> MALAYSIA, 2019
              </p>
            </div>
            <div>
              <Image
                src="/graduated_portrait.jpg"
                alt="Miss Azla photo"
                width={200}
                height={250}
                className="rotate-12 pt-20 object-cover grayscale hover:grayscale-0 hidden md:block"
              />
            </div>
          </div>
        </section>

        <section className="snap-start relative w-screen h-screen p-[10vw] font-sans tracking-widest mx-auto">
          <div className="flex flex-col gap-8 text-center mx-auto items-center">
            <h2 className="text-4xl md:text-7xl">
              CORE <br />
              PROCIENCIES
            </h2>
            <Image
              src="/graduated_landscape.jpg"
              alt="Miss Azla photo"
              width={400}
              height={250}
              className="w-[500px] object-cover grayscale hover:grayscale-0 text-center"
            />
          </div>
          <div className="flex flex-row justify-between text-center mt-8">
            <div className="font-sans w-full tracking-widest text-xl md:text-2xl">
              <p>
                Public Health Knowledge | Community Outreach | Fundraising |
                Education | Health Promotion | Mental Health | Program
                Development and Evaluation | Problem - Solving | Transferable |
                Time Management
              </p>
            </div>
          </div>
        </section>

        <section className="snap-start relative w-screen h-screen p-[10vw] font-sans tracking-widest mx-auto">
          <div className="flex flex-col gap-8 text-center mx-auto items-center">
            <h2 className="text-4xl md:text-7xl">REFERENCES</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-center mt-20 md:mt-40 tracking-widest text-md md:text-2xl font-sans gap-8">
            <div>
              <p>DR MAXINE NEWELL,</p>
              <p>ADVISOR OF COMMUNITY PUBLIC HEALTH PROGRAM</p>
              <p>
                EMAIL: <a href="mailto:mnewell@apiu.edu">MNEWELL@APIU.EDU</a>
              </p>
            </div>
            <div>
              <p>DR ELVIN WALEMBA,</p>
              <p>DEAN OF SCIENCE FACULTY</p>
              <p>
                EMAIL: <a href="mailto:ewalemba@apiu.edu">EWALEMBA@APIU.EDU</a>
              </p>
            </div>
            <div>
              <p>MRS ZHU QINGYAN (LINDA),</p>
              <p>INTERNSHIP SUPERVISOR</p>
              <p>
                EMAIL:{" "}
                <a href="mailto:linda@adrathailand.org">
                  LINDA@ADRATHAILAND.ORG
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="snap-start relative w-screen h-screen p-[10vw] font-sans tracking-widest">
          <div className="flex flex-col gap-8">
            <p className={fontJosefin.className + " text-2xl font-semibold"}>
              AZLA JONULING
            </p>
            <h2 className="text-7xl">
              WORK
              <br /> WITH ME
            </h2>
          </div>
          <div className="flex flex-row justify-between mt-28">
            <div
              className={
                "font-bold w-[700px] md:w-[500px] tracking-widest text-md md:text-3xl " +
                fontJosefin.className
              }
            >
              <p className="flex flex-row gap-2 items-center"><ArrowRightIcon/> linkedin.com/in/azla</p>
              <p className="flex flex-row gap-2 items-center"><ArrowRightIcon /> azlasorubou83@gmail.com</p>
            </div>
            <div>
              <Image
                src="/graduated_portrait.jpg"
                alt="Miss Azla photo"
                width={400}
                height={200}
                className="rotate-12 pt-20 object-cover grayscale hover:grayscale-0 mt-20 md:-mt-80"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
