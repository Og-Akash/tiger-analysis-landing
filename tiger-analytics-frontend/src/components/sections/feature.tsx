"use client";

import React from "react";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
import Image from "next/image";
import { cn, getImageUrl } from "@/lib/utils";
import { FeatureSectionProps } from "@/types";

export default function FeatureSection({ data }: FeatureSectionProps) {
  const imageUrl = getImageUrl(data.image?.url || "");

  return (
    <section className="w-full relative bg-[#F4F3EC] overflow-hidden">
      <LayoutWrapper className="pt-[clamp(11rem,40vw,16rem)] pb-20 sm:pt-72 md:py-20 2xl:py-36 xl:pr-0">
        <div className="flex flex-col justify-between gap-10 md:gap-[clamp(2.5rem,12vw,5rem)] xl:gap-28 2xl:gap-80">
          <div
            className={cn(
              "md:max-w-[70%] text-lg leading-8 lg:leading-10 font-bold pt-10 text-[#0F0F0F]/50 [&_strong]:!text-[#0F0F0F] [&_b]:!text-[#0F0F0F]",
              "md:text-[clamp(1.125rem,2vw,1.5rem)]",
              "  xl:text-3xl xl:leading-12",
              "2xl:text-4xl 2xl:leading-relaxed"
            )}
            dangerouslySetInnerHTML={{
              __html: data.content as unknown as string,
            }}
          />

          {imageUrl && (
            <div
              className={`absolute h-auto w-full border rounded-3xl border-[#0F0F0F]
                        left-4 top-0 -translate-y-2/3
                        md:top-auto md:left-auto md:right-0 md:translate-y-0 md:translate-x-[38%] md:w-[clamp(40%,10vw,450px)]
                        2xl:w-1/2 2xl:-right-0 xl:translate-x-[56%]
                        `}
            >
              <Image
                src={imageUrl ?? ""}
                alt={data.image?.alternativeText ?? ""}
                width={1000}
                height={1000}
                className="translate-10 md:translate-6 lg:translate-10"
              />
            </div>
          )}

          <div className="w-full md:max-w-1/2 xl:max-w-[43%] space-y-4 2xl:space-y-6">
            <div
              className="font-medium font-helveticaNeue text-lg 2xl:text-2xl text-[#0F0F0F]"
              dangerouslySetInnerHTML={{
                __html: data.sub_heading as unknown as string,
              }}
            />
            <div
              className="font-regular font-helveticaNeue text-base xl:text-xl 2xl:text-2xl text-[#0F0F0F]"
              dangerouslySetInnerHTML={{
                __html: data.description as unknown as string,
              }}
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
