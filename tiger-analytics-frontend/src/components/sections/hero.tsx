import React from "react";
import { HeroSectionProps } from "../../types";
import LayoutWrapper from "../layouts/layout-wrapper";
import { Button, ButtonVariantType } from "../ui/button";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  cta_btns,
  heroImage,
  subTitle,
}) => {
  const imageUrl = getImageUrl(heroImage.url);

  return (
    <section
      className="h-full w-full bg-cover bg-center pt-24 pb-32 sm:pt-32 sm:pb-40 md:pt-40 md:pb-48 lg:pt-48 lg:pb-56"
      style={{ backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined }}
    >
      <LayoutWrapper>
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 max-w-full lg:max-w-[75%] xl:max-w-[80%]">
          <h1
            className={
              "font-medium text-white flex flex-col gap-1 w-fit pb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
            }
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <div className="border-t mb-2 sm:mb-4 border-white max-w-full pt-6 sm:pt-7 md:pt-8 sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[730px]">
            <p
              className={
                "text-white font-helvetica-neue text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed"
              }
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
          </div>
        </div>

        {cta_btns && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {cta_btns.map((cta) => {
              const { cta_link, label, target, variant } = cta;
              return (
                <Button
                  key={cta_link}
                  variant={variant as ButtonVariantType}
                  className={
                    "px-4 sm:px-6 text-sm sm:text-base h-10 sm:h-11 md:h-12"
                  }
                  asChild
                >
                  <Link
                    target={cta_link === "blank" ? "_blank" : "_self"}
                    rel={
                      cta_link === "blank" ? "noopener noreferrer" : undefined
                    }
                    href={cta_link}
                  >
                    {label}
                  </Link>
                </Button>
              );
            })}
          </div>
        )}
      </LayoutWrapper>
    </section>
  );
};

export default HeroSection;
