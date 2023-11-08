"use client";
import HeroSlider, { Nav, Slide } from "hero-slider";

const bogliasco = "https://picsum.photos/id/3/1200/800";
const countyClare = "https://picsum.photos/id/4/1200/800";
const craterRock = "https://picsum.photos/id/5/1200/800";
const giauPass = "https://picsum.photos/id/6/1200/800";

const ArticleTemplate = ({ title }: { title: string }) => {
  console.log({ title });
  return (
    <Slide>
      <article className="bg-black h-[400px] text-white">
        <h1>Hello {title}</h1>
      </article>
    </Slide>
  );
};

export function BasicSlider() {
  return (
    <HeroSlider
      className="ml-10"
      height={"60vh"}
      width={"50vw"}
      controller={{
        initialSlide: 2,
        slidingDuration: 120,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <ArticleTemplate title="Hey" />
      <ArticleTemplate title="Num 2" />
      <ArticleTemplate title="Num 3" />

      {/* <Slide
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco,
        }}
      /> */}

      <Nav />
    </HeroSlider>
  );
}
