"use client";

import React from "react";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
import Image from "next/image";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "../ui/marquee";
import { getImageUrl } from "@/lib/utils";
import { SponsorsSectionProps } from "@/types";

export default function SponsorsSection({ data }: {data: SponsorsSectionProps}) {
  return (
    <div className="2xl:py-16 py-8 max-w-screen overflow-hidden">
      <LayoutWrapper>
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent className="flex flex-col">
            {data?.sponsors?.map((sponsor, index: number) => {
              if (!sponsor.logo.url) return null;
              return (
                <>
                  <MarqueeItem
                    className="lg:h-20 lg:w-48 h-10 w-36 flex flex-col items-center justify-center"
                    key={index}
                  >
                    <Image
                      alt={sponsor.name || ""}
                      className="overflow-hidden object-contain"
                      height={128}
                      src={getImageUrl(sponsor.logo.url) || ""}
                      width={128}
                    />
                  </MarqueeItem>
                </>
              );
            })}
          </MarqueeContent>
        </Marquee>
      </LayoutWrapper>
    </div>
  );
}
