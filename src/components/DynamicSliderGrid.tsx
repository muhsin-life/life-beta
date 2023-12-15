import { Content, SectionDataArray } from "@/types/api/page";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

export const DynamicSliderGrid = ({
  contentData,
  deviceType,
}: {
  contentData: Content;
  deviceType: "mobile" | "desktop";
}) => {
  const { section_data_array } = contentData;

  const sliderLength = section_data_array?.length || 0;

  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === sliderLength - 1,
  });

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
  const inactiveStyles = "hidden text-gray-400";

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === sliderLength - 1,
      });
    });
  }, [swiper, sliderLength]);

  return section_data_array !== null ? (
    <div className="group relative overflow-hidden rounded-xl">
      <div className=" z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
          className={cn(activeStyles, "right-3 transition", {
            [inactiveStyles]: slideConfig.isEnd,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isEnd,
          })}
          aria-label="next image"
        >
          <ChevronRight className="h-4 w-4 text-zinc-700" />{" "}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slidePrev();
          }}
          className={cn(activeStyles, "left-3 transition", {
            [inactiveStyles]: slideConfig.isBeginning,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isBeginning,
          })}
          aria-label="previous image"
        >
          <ChevronLeft className="h-4 w-4 text-zinc-700" />{" "}
        </button>
      </div>

      <Swiper
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="rounded-full transition ${className}"></span>`;
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        className="h-full w-full"
      >
        {section_data_array.map((sectionData) => {
          const getSliderDataFromDeviceType = () => {
            switch (deviceType) {
              case "mobile":
                return {
                  image_url:
                    sectionData.mobile.image_url ??
                    "/images/default-product-image.png",
                  dimensions: {
                    height: sectionData.mobile.height || 100,
                    width: sectionData.mobile.width || 100,
                  },
                };
              case "desktop":
                return {
                  image_url:
                    sectionData.desktop.image_url ??
                    "/images/default-product-image.png",
                  dimensions: {
                    height: sectionData.desktop.height || 500,
                    width: sectionData.desktop.width || 1440,
                  },
                };
            }
          };

          const data = getSliderDataFromDeviceType();

          return (
            <SwiperSlide
              key={sectionData.id}
              className="-z-10 relative h-full w-full"
            >
              <Image
                loading="eager"
                height={data.dimensions.height}
                width={data.dimensions.width}
                // className={cn(
                //   `sm:w-[${sectionData.desktop.width}px] w-[${sectionData.mobile.width}px] sm:h-[${sectionData.desktop.height}px] h-[${sectionData.mobile.height}px]`
                // )}
                src={data.image_url}
                alt="Product image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ) : (
    <div></div>
  );
};
