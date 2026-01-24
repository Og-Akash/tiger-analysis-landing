import React from "react";
import { client } from "@/lib/apollo-client";
import { GET_TITLE_BLOCK_DATA } from "@/lib/query/getTitleBlockData";
import { useQuery } from "@apollo/client/react";
import TabbedShowcase from "../title-blocks/tabbed-showcase";
import BackgroundPatternSection from "../title-blocks/background-pattern-section";
import TestimonialGrid from "../testimonials/testimonial-grid";
import { BackgroundPatternSectionProps, BlockCardSectionProps, TestimonialGridSectionProps, TitleBlockSectionProps, TitleBlocksResponse } from "@/types";

export default function TitleBlocksSection({ data }: { data: TitleBlockSectionProps }) {
  let titleBlockData: TitleBlocksResponse | null = null;

  const {data: titleBlock} = useQuery(GET_TITLE_BLOCK_DATA)

  titleBlockData = titleBlock as TitleBlocksResponse

  if (!titleBlockData || !titleBlockData.titleBlocks?.length) return null;
  const title = titleBlockData.titleBlocks[0].title

  return (
    <section
      className="space-y-20 p-4 pb-8 pt-20 w-full"
      style={{
        backgroundColor: data.background_color || "#1E0903",
      }}
    >
      {title && (
        <div className="w-full flex justify-center">
          <div className="relative w-fit">
            <h1
              // html={title as unknown as StorydataRichTextNode}
              className="absolute text-center text-white font-helvetica-neue text-[56px] tracking-[-1.04px] max-w-4xl brightness-125 blur-sm not-sr-only"
            >
              {title}
            </h1>
            <h1
              // html={title as unknown as StorydataRichTextNode}
              className="text-center text-white font-helvetica-neue text-[56px] tracking-[-1.04px] max-w-4xl brightness-125"
            >
              {title}
            </h1>
          </div>
        </div>
      )}
      <div className="space-y-20">
        {titleBlockData.titleBlocks[0]?.conte_blocks &&
          titleBlockData.titleBlocks[0]?.conte_blocks.length > 0 &&
          titleBlockData.titleBlocks[0].conte_blocks.map((data, i) => {
            if (data.__typename == "ComponentBlockBlockCard" || i == 0) {
              return <TabbedShowcase data={data as BlockCardSectionProps} key={data.id} />;
            }
            else if (data.__typename === "ComponentBlockTestimonialGrid") {
              return <TestimonialGrid data={data as TestimonialGridSectionProps} key={data.id} />;
            }
            else if (data.__typename === "ComponentBlockBackgroundPattern") {
              return <BackgroundPatternSection data={data as BackgroundPatternSectionProps} key={data.id} />;
            }
            else {
              return null;
            }
          })}
      </div>
    </section>
  );
}
