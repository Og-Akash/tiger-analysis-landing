import React from "react";
import CompetitionLeaderBoardBlock from "./leader-board-block";
import { getImageUrl } from "@/lib/utils";
import { BackgroundPatternSectionProps } from "@/types";

export default function BackgroundPatternSection({ data }: { data: BackgroundPatternSectionProps }) {
  console.log("bg pattern", data);

  return (
    <section
      className="flex relative p-6 rounded-3xl bg-no-repeat bg-contain aspect-square"
      style={{
        backgroundImage: `url("${getImageUrl(data.background_image?.url)}")`,
      }}
    >
      {data.leader_board_block && (
        <CompetitionLeaderBoardBlock data={data.leader_board_block} />
      )}
    </section>
  );
}
