"use client";

import React from "react";
import Image from "next/image";
import { Button, ButtonVariantType } from "../ui/button";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";
import { HighlightSectionProps } from "@/types";

// const getCtaLink = (link: LinkType) => {
// 	const { _uid, href, isExternal, label, variant } = getLinkDetails(link);
// 	return (
// 		<div>
// 			<Button key={_uid} variant={variant as ButtonVariantType} className='font-bold' asChild>
// 				{isExternal ? (
// 					<a href={href} target='_blank' rel='noopener noreferrer'>
// 						{label}
// 					</a>
// 				) : (
// 					<Link href={href}>{label}</Link>
// 				)}
// 			</Button>
// 		</div>
// 	);
// };

export default function HighlightSection({ data }: {data: HighlightSectionProps}) {
  const title = data.title;
  const description = data.description;
  const content = data.content;
  const highlightImage = getImageUrl(data.highlight_image.url)
  const highlightImageAlt = data.highlight_image.alternativeText
  const {label, cta_link, variant, target} = data.cta_btn;

  return (
    <LayoutWrapper className="py-24">
      <section className="space-y-[4.75rem]">
        <div className="flex flex-col items-center gap-4">
          {title && (
            <h1 className="flex flex-col items-center text-center font-helvetica-neue gap-4 font-bold text-6xl leading-[60px] tracking-[-3.84px] max-w-3xl">
              {title}
            </h1>
          )}
          {description && (
            <p className="max-w-lg text-center font-helvetica-neue font-medium text-xl tracking-[-0.5px]">
              {description}
            </p>
          )}
        </div>
        <div className="relative flex gap-4">
          <div className="flex-1 flex flex-col gap-10 md:pb-44 ">
            <div className="flex-1 flex flex-col gap-4 ">
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="font-helvetica-neue text-2xl font-normal leading-[30px] tracking-[-1px] flex flex-col gap-6 text-[#888888] [&_strong]:text-black"
              />
            </div>
            <Button
              key={cta_link}
              variant={variant as ButtonVariantType}
              className={
                "px-4 sm:px-6 text-sm sm:text-base max-w-fit h-10 sm:h-11 md:h-12"
              }
              asChild
            >
              <Link
                target={target === "blank" ? "_blank" : "_self"}
                rel={target === "blank" ? "noopener noreferrer" : undefined}
                href={cta_link}
              >
                {label}
              </Link>
            </Button>
          </div>
          <div className="absolute -bottom-24 w-full h-full -z-10 blur-xl lg:relative lg:bottom-0 lg:z-0 lg:blur-none lg:h-auto flex-1 flex">
            {highlightImage && (
              <div className="flex justify-center lg:justify-end">
                <div className="w-full h-full">
                  <Image
                    src={highlightImage}
                    alt={
                      highlightImageAlt ?? "highlight image"
                    }
                    fill
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
