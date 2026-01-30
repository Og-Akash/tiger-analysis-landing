"use client";

import React, { useEffect, useState, useCallback } from "react";
import { HeroSlider as HeroSliderType } from "../../types/homepage-hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroSliderProps {
  data: HeroSliderType;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 md:gap-12 mt-12 md:mt-20">
      {/* Top Title */}
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-5xl leading-tight uppercase tracking-tight">
        {data?.title}
      </h2>

      {/* Tabs Navigation */}
      <div className="w-full max-w-5xl overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center justify-center gap-6 md:gap-12 px-4 whitespace-nowrap min-w-max mx-auto">
          {data?.hero_image_slider?.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "pb-2 text-sm md:text-base cursor-pointer transition-all duration-300 relative",
                current === index
                  ? "text-white font-bold"
                  : "text-neutral-300 font-medium hover:text-white/80",
              )}
            >
              {item?.slider_text}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full max-w-6xl relative px-4 md:px-12">
        <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {data?.hero_image_slider?.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/20 bg-black/40 backdrop-blur-sm">
                  <Image
                    src={getImageUrl(item?.slider_image?.url) || ""}
                    alt={item?.slider_image?.alternativeText || item?.slider_text}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute top-1/2 -left-2 md:-left-20 -translate-y-1/2 z-10">
            <CarouselPrevious className="bg-transparent border-2 cursor-pointer
             max-sm:size-8 border-white text-white hover:bg-white hover:text-black transition-all" />
          </div>
          <div className="absolute top-1/2 -right-2 md:-right-20 -translate-y-1/2 z-10">
            <CarouselNext className="bg-transparent border-2 cursor-pointer
             max-sm:size-8 border-white text-white hover:bg-white hover:text-black transition-all" />
          </div>
        </Carousel>
      </div>

      {/* Bottom Text */}
      <div className="max-w-2xl px-4 text-center">
        <p className="text-white text-sm md:text-base font-semibold leading-tight tracking-wider uppercase">
          {data?.sub_title}
        </p>
      </div>
    </div>
  );
};

export default HeroSlider;
