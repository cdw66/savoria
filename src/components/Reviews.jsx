import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

const Reviews = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      source: "Eatery Magazine",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      source: "New York Times",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      source: "Tasty",
    },
  ];

  return (
    <section className="bg-tan py-[18px] pb-[64px] lg:pt-[32px]">
      <div>
        <h2 className="text-center text-white font-eb-garamond text-[36px]">
          Reviews
        </h2>
        {/* <p>Test Review</p> */}
        <Carousel
          mt={18}
          withIndicators
          withControls={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
          styles={{
            indicator: {
              width: "10px",
              height: "10px",
              backgroundColor: "white",
              transform: "translate(0px, 48px)",
            },
          }}
        >
          {reviews.map((review, index) => (
            <Carousel.Slide key={index}>
              <div className="px-[24px] text-white flex flex-col gap-6 h-full justify-center sm:w-[500px] mx-auto">
                <blockquote className="font-lato">
                  <p>{review.text}</p>
                </blockquote>
                <cite className="self-end text-[20px] font-eb-garamond">
                  ~ {review.source}
                </cite>
              </div>
            </Carousel.Slide>
          ))}
          {/* <Carousel.Slide>
            <div className="px-[24px] text-white flex flex-col gap-6">
              <blockquote className="font-lato">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </blockquote>
              <cite className="self-end text-[20px] font-eb-garamond">
                ~ New York Times
              </cite>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="px-[24px] text-white flex flex-col gap-6 h-full justify-center">
              <blockquote className="font-lato">
                <p>
                  "Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum."
                </p>
              </blockquote>
              <cite className="self-end text-[20px] font-eb-garamond">
                ~ New York Times
              </cite>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="px-[24px] text-white flex flex-col gap-6">
              <blockquote className="font-lato">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
              </blockquote>
              <cite className="self-end text-[20px] font-eb-garamond">
                ~ New York Times
              </cite>
            </div>
          </Carousel.Slide> */}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
