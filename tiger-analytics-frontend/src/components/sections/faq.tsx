import React from "react";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaqSectionProps } from "@/types";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

export default function FaqSection({ data }: FaqSectionProps) {
  const bgUrl = getImageUrl(data.background_image?.url || "");
  const gradientUrl = getImageUrl(data.gradient_overlay?.url || "");
	// console.log(data)
  return (
    <section
      className="w-full py-36 relative min-h-[1000px] bg-cover bg-center"
      style={{ backgroundImage: bgUrl ? `url(${bgUrl})` : undefined }}
    >
      {/* Gradient overlay */}

      <div className="absolute inset-0 opacity-50">
        <Image src={gradientUrl || "https://res.cloudinary.com/dtmrukk9f/image/upload/v1769243986/9f0b9a7b15fae4b9edf12bf8e391c6a35b432e04_ea90ab65cd.png"} fill alt={`faq-gradient-overlay`} />
      </div>

      <LayoutWrapper className="grid relative place-items-center gap-12 z-99">
        <div className="flex flex-col gap-5 2xl:gap-10 items-center">
          <p className="text-[#E87722] text-2xl">FAQ</p>
          <div className="flex flex-col gap-5 2xl:gap-10 md:max-w-min">
            <h3 className="font-inter px-3 text-center md:text-nowrap text-white text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
              {data.heading}
            </h3>
            <p className="font-inter text-center text-[#D1D1D1] md:text-lg 2xl:text-[23px] font-medium">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 2xl:gap-10 w-full max-w-3xl 2xl:max-w-4xl">
          {data.faqs && (
            <Accordion type="single" collapsible className="space-y-4.5">
              {data.faqs?.map((accordion, index) => (
                <AccordionItem
                  key={accordion.id}
                  value={accordion.id as string}
                  className="py-2 shadow-[inset_0_2px_8px_rgba(255,255,255,0.05),inset_0_4px_16px_rgba(255,255,255,0.05)] border border-b border-white/10 last:border-b rounded-[20px] bg-radial from-black/5 via-black/5 via-30% to-white/10"
                >
                  <AccordionTrigger className="text-white text-lg sm:text-xl lg:text-2xl font-medium px-5 items-center [&>svg]:text-white [&>svg]:w-5 [&>svg]:h-5 hover:no-underline">
                    <div className="flex items-center gap-10">
                      <span>{index < 10 ? `0${index + 1}` : index + 1}</span>
                      <span>{accordion.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white px-5">
                    <div className="flex items-center gap-10 text-sm sm:text-base lg:text-lg font-light pr-10 sm:pr-16 lg:pr-48">
                      <span className="text-lg sm:text-xl lg:text-2xl font-medium text-transparent select-none opacity-0 invisible">
                        {index < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: accordion.answer as unknown as string,
                        }}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
}
