import React from "react";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
import { Button, ButtonVariantType } from "../ui/button";
import Link from "next/link";
import { extractCtaItems, getImageUrl } from "@/lib/utils";
import { CtaSectionProps } from "@/types";

export default function CtaSection({ data }: CtaSectionProps) {
  const bgUrl = getImageUrl(data.cta_bg_image.url);

  const { target, cta_link, label, variant } =
    extractCtaItems(data.cta_btn) || {};

  return (
    <section
      className="py-36 bg-cover bg-center w-full aspect-video"
      style={{ backgroundImage: bgUrl ? `url(${bgUrl})` : undefined }}
    >
      <LayoutWrapper className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col gap-5 2xl:gap-24 items-center">
          <div
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-center text-white"
            dangerouslySetInnerHTML={{
              __html: data.cta_heading as unknown as string,
            }}
          />
          {data.cta_btn && (
            <div className="flex flex-wrap gap-4">
              <Button
                key={cta_link}
                variant={variant as ButtonVariantType}
                className="2xl:text-2xl 2xl:px-8 2xl:py-4 2xl:h-auto hover:bg-white hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link
                  rel={target === "blank" ? "noopener noreferrer" : undefined}
                  target={target === "blank" ? "_blank" : "_self"}
                  href={cta_link ?? ""}
                >
                  {label}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
}
