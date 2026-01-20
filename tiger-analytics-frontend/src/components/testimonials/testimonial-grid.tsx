import React from "react";
import Testimonial from "@/components/testimonials/testimonial";
import { TestimonialGridSectionProps } from "@/types";

export default function TestimonialGrid({ data }: { data: TestimonialGridSectionProps }) {


  let fullCount = 0;
  let compactCount = 0;

  const items = (data.testimonials ?? []).map((t:any) => {
    const hasContent =
      !!t.content &&
      (t.content as string).replace(/<[^>]+>/g, "").trim().length > 0;

    return { t, hasContent };
  });

  return (
    <section className="flex flex-col gap-16 xl:gap-[8.5rem] bg-[#FEF7EE] rounded-3xl p-4 sm:p-6 sm:pt-16 xl:p-20 xl:py-20">
      <div className="flex flex-col xl:gap-4 font-bold font-inter sm:text-[clamp(1.6rem,2.6vw,2.25rem)] xl:leading-14 xl:text-[3.35rem] 2xl:leading-20 2xl:text-[4.65rem]">
        <div
          className="text-start"
          dangerouslySetInnerHTML={{
            __html: data.heading_1 as unknown as string as string,
          }}
        />
        <div
          className="text-end"
          dangerouslySetInnerHTML={{
            __html: data.heading_2 as unknown as string,
          }}
        />
      </div>

      <div className="xl:px-10 grid gap-[clamp(0.75rem,1.8vw,1.25rem)] grid-cols-1 md:grid-cols-6">
        {items.map(({ t, hasContent }: { t: any; hasContent: boolean }) => {
          if (hasContent) {
            const flip = fullCount++ % 2 === 1; // alternate full rows
            return (
              <div key={t._uid} className="md:col-span-6">
                <Testimonial
                  hasContent={hasContent}
                  data={t as any}
                  flip={flip}
                />
              </div>
            );
          } else {
            const flip = compactCount++ % 2 === 1; // alternate compact pairs
            return (
              <div key={t._uid} className="md:col-span-3">
                <Testimonial
                  hasContent={hasContent}
                  data={t as any}
                  flip={flip}
                />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
