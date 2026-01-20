import React from "react";
import { Button, ButtonVariantType } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { extractCtaItems, getImageUrl } from "@/lib/utils";
import { CtaButton, LeaderBoardBlock } from "@/types";

export default function CompetitionLeaderBoardBlock({ data }: { data: LeaderBoardBlock }) {
  const { cta_link, label, target, variant } = extractCtaItems(data.cta) as CtaButton;

  return (
    <section className="sm:mx-[6.5vw] sm:my-48 flex w-full lg:max-w-2/3 relative p-6 2xl:p-8 rounded-2xl bg-white h-fit">
      <div className="flex flex-col items-start gap-8 2xl:gap-10">
        {data.title && (
          <div
            dangerouslySetInnerHTML={{
              __html: data.title as string,
            }}
            className="font-inter font-light text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl 2xl:text-7xl lg:leading-17 2xl:leading-20 lg:tracking-[-3.84px]"
          />
        )}
        {data.description && (
          <div
            dangerouslySetInnerHTML={{
              __html: data.description as string,
            }}
            className="font-inter font-400 text-lg md:text-xl lg:text-2xl leading-8 max-w-4/5 2xl:text-3xl 2xl:max-w-2/3 2xl:leading-10"
          />
        )}
        {data.cta && (
          <Button variant={variant as ButtonVariantType} asChild>
            <Link
              href={cta_link}
              rel={target === "blank" ? "noopener noreferrer" : undefined}
              target={target === "blank" ? "_blank" : "_self"}
            >
              {label}
            </Link>
          </Button>
        )}
        <div className="flex flex-col gap-2">
          {data.status_title && (
            <h1
              dangerouslySetInnerHTML={{ __html: data.status_title }}
              className="text-lg font-bold 2xl:text-[26px]"
            />
          )}
          {data.status_image && data.status_image.url && (
            <div className="border-t-2 border-[#17100E] mb-10 sm:mb-28 2xl:border-t-3">
              <Image
                src={getImageUrl(data.status_image.url) || ""}
                alt={data.status_image.alternativeText || ""}
                height={500}
                width={850}
                className=""
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
