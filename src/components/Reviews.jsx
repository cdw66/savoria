import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Reviews = ({ reviews }) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <section className="bg-tan py-[18px] pb-[64px] lg:pt-[32px]">
      <div>
        <h2 className="text-center text-white font-eb-garamond lg:text-[48px] text-[36px]">
          Reviews
        </h2>
        <Carousel
          mt={18}
          withIndicators
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
          nextControlIcon={
            <IconChevronRight
              width={36}
              height={36}
              className="hidden sm:inline-block"
              aria-label="Next Review"
            />
          }
          previousControlIcon={
            <IconChevronLeft
              width={36}
              height={36}
              className="hidden sm:inline-block"
              aria-label="Previous Review"
            />
          }
          styles={{
            indicator: {
              width: "10px",
              height: "10px",
              backgroundColor: "white",
              transform: "translate(0px, 48px)",
            },
            controls: {
              backgroundColor: "transparent",
            },
            control: {
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              boxShadow: "none",
              width: "36px",
            },
          }}
        >
          {reviews.map((review, index) => (
            <Carousel.Slide key={index}>
              <div className="px-[24px] text-white flex flex-col gap-6 h-full justify-center sm:w-[500px] mx-auto">
                <blockquote className="font-lato">
                  <p>{review.content}</p>
                </blockquote>
                <cite className="self-end text-[20px] font-eb-garamond">
                  ~ {review.reviewer}
                </cite>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
