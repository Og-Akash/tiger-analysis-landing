import React from "react";
import { Button, ButtonVariantType } from "../ui/button";
import Link from "next/link";
import { extractCtaItems } from "@/lib/utils";

export default function PromoBanner({ data }: any) {
  const title = data.title;
  const description = data.description;
  const line_1 = data.line_1;
  const line_2 = data.line_2;
  const line_3 = data.line_3;

  const { label, variant, cta_link, target } = extractCtaItems(data.cta) || {};

  return (
    <section className="flex w-full justify-center items-center relative p-6 py-16 2xl:py-34 2xp:pb-44 bg-[#1E0903]">
      <div className="relative w-full max-w-7xl ">
        <div className="flex flex-col sm:flex-row rounded-md pl-6 pr-3 py-6 bg-white divide-y lg:divide-y-0 lg:divide-x-3 divide-dotted divide-black relative z-1">
          <div className="flex sm:1/2 lg:w-2/3 flex-col justify-between gap-12 lg:px-6 py-6 sm:py-0">
            {title && (
              <div
                dangerouslySetInnerHTML={{ __html: title as unknown as string }}
                className="font-helvetica-neue text-3xl md:text-4xl font-light text-black lg:max-w-2/3"
              />
            )}
            {description && (
              <div
                className="font-helvetica-neue font-normal md:text-xl lg:max-w-2/3 tracking-tight"
                dangerouslySetInnerHTML={{
                  __html: description as unknown as string,
                }}
              />
            )}
          </div>
          <div className="sm:1/2 lg:w-1/3 pt-6 sm:pt-0 flex flex-col justify-end items-end gap-4">
            <div className="flex flex-col items-end">
              {line_1 && (
                <div
                  className="self-start font-helvetica-neue font-normal text-sm 2xl:text-base"
                  dangerouslySetInnerHTML={{
                    __html: line_1 as unknown as string,
                  }}
                />
              )}
              {line_2 && (
                <div
                  className="self-center font-helvetica-neue font-bold text-9xl"
                  dangerouslySetInnerHTML={{
                    __html: line_2 as unknown as string,
                  }}
                />
              )}
              {line_3 && (
                <div
                  className="self-end font-helvetica-neue font-normal text-sm 2xl:text-base"
                  dangerouslySetInnerHTML={{
                    __html: line_3 as unknown as string,
                  }}
                />
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              {data.cta && (
                <div className="">
                  <Button
                    key={cta_link}
                    variant={variant as ButtonVariantType}
                    className="text-foreground"
                    asChild
                  >
                    <Link
                      rel={
                        target === "blank" ? "noopener noreferrer" : undefined
                      }
                      target={target === "blank" ? "_blank" : "_self"}
                      href={cta_link ?? ""}
                    >
                      {label}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="absolute -translate-x-3 translate-y-3 inset-0 rounded-md shadow-lg z-0"
          style={{
            background: `linear-gradient(to right,#E7DFD4 0%,#E9BFC9 14%,#FF59AE 26%,#FD368A 33%,#F45669 44%,#EC7551 51%,#49AA3F 67%,#1C997C 78%,#B1DFAB 96%,#E7DFD4 100%)`,
          }}
        />
      </div>
    </section>
  );
}
