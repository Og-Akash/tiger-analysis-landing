"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge, badgeVariant } from "@/components/ui/badge";
import { Circle } from "lucide-react";
import { cn, getImageUrl } from "@/lib/utils";
import { Button, ButtonVariantType } from "@/components/ui/button";
import Link from "next/link";
import {
  motion,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BlockCardSectionProps, TitleBlockContentBlock } from "@/types";

export default function TabbedShowcase({ data }: { data: BlockCardSectionProps }) {
  const tabs = data.tabs;
  const title = data.title as unknown as React.ReactNode;
  const badge = data.tag || { variant: "", label: "" };
  const { cta_link, label, target, variant } = data.cta;

  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [isPaused, setIsPaused] = useState(false);

  const advanceTab = () => {
    setSelectedTab((prev: string) => {
      const currentIndex = tabs.findIndex((t: any) => t.id === prev);
      const nextIndex = (currentIndex + 1) % tabs.length;
      return tabs[nextIndex].id;
    });
  };

  if (tabs.some((tab: any) => !tab.image || !tab.image?.url)) {
    return null;
  }

  return (
    <section className="flex relative p-6 bg-white rounded-3xl">
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full gap-12"
      >
        {data.variant === "horizontal" && (badge || title) && (
          <div className="space-y-8">
            {badge && (
              <Badge
                variant={badge.variant as badgeVariant}
                className="rounded-full text-base font-bold font-inter leading-[18px] py-1"
              >
                <span>
                  <Circle size={16} />
                </span>
                <span>{badge.label}</span>
              </Badge>
            )}
            <div className="flex justify-between gap-4 flex-wrap">
              {title && (
                <h1 className="font-helvetica-neue font-light text-[#17100E] text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl lg:leading-[74px] lg:tracking-[-2.84px] lg:max-w-4/5">
                  {title}
                </h1>
              )}
              {data.cta && cta_link && (
                <div className=" flex flex-wrap gap-4">
                  <Button variant={variant as ButtonVariantType} asChild>
                    <Link href={cta_link}>{label}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
        <div
          className={cn(
            "flex w-full h-full",
            data.variant === "horizontal"
              ? "flex-col-reverse gap-12"
              : "flex-col lg:flex-row gap-12 lg:gap-0"
          )}
        >
          <TabsList
            className={cn(
              "w-full bg-transparent overflow-hidden flex flex-col items-stretch gap-24 rounded-none",
              data.variant === "vertical" ? "h-full flex-[45%]" : "h-fit"
            )}
          >
            <div className="h-full flex flex-col justify-between">
              {data.variant === "vertical" && (badge || title) && (
                <div className="space-y-8">
                  {badge && (
                    <Badge
                      variant={badge.variant as badgeVariant}
                      className="rounded-full text-base font-bold font-inter  leading-[18px] py-1"
                    >
                      <span>
                        <Circle size={16} />
                      </span>
                      <span>{badge.label}</span>
                    </Badge>
                  )}
                  <div className="flex justify-between">
                    {title && (
                      <h1 className="font-helvetica-neue font-light text-[#17100E] text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl lg:leading-[74px] lg:tracking-[-2.84px] lg:max-w-4/5">
                        {title}
                      </h1>
                    )}
                  </div>
                </div>
              )}

              <div
                onPointerEnter={() => setIsPaused(true)}
                onPointerLeave={() => setIsPaused(false)}
                className={cn(
                  "relative flex ",
                  data.variant === "vertical"
                    ? "flex-col lg:max-w-5/6"
                    : "flex-col lg:flex-row justify-between lg:gap-[5vw]"
                )}
              >
                {tabs.map((tab: any) => {
                  const title = tab.title as unknown as React.ReactNode;
                  const description =
                    tab.description as unknown as React.ReactNode;

                  return (
                    <TabsTrigger
                      value={tab.id}
                      key={tab.id}
                      className={cn(
                        "group relative w-full items-start justify-start py-6 max-h-none data-[state=active]:shadow-none rounded-none border-[#17100E33] border-0 border-t-3"
                      )}
                    >
                      <TabProgress
                        isActive={selectedTab === tab.id}
                        isPaused={isPaused}
                        onComplete={advanceTab}
                      />
                      <div className="w-full h-full flex flex-col items-start gap-2">
                        <div
                          dangerouslySetInnerHTML={{ __html: title as string }}
                          className="text-start font-helvetica-neue text-[#6D6D6D] group-data-[state=active]:text-[#17100E] font-bold text-lg leading-6 tracking-[-0.2px] text-wrap"
                        />

                        <div
                          dangerouslySetInnerHTML={{
                            __html: description as string,
                          }}
                          className="text-start font-helvetica-neue text-[#888888] group-data-[state=active]:text-[#17100E] font-normal text-lg leading-6 text-wrap "
                        />
                      </div>
                    </TabsTrigger>
                  );
                })}
                {data.variant === "vertical" && data.cta && cta_link && (
                  <div className=" flex flex-wrap gap-4">
                    <Button variant={variant as ButtonVariantType} asChild>
                      <Link href={cta_link}>{label}</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </TabsList>

          <div
            className={
              "shrink-0 flex flex-[55%] h-full max-h-[370px] sm:max-h-[500px] lg:max-h-none rounded-2xl overflow-hidden"
            }
          >
            <TabsContent value={selectedTab} className="flex w-full h-full">
              <AnimatePresence initial={false} mode="wait">
                {tabs.map((tab: any) => {
                  const image = tab.image;

                  if (tab.id !== selectedTab) return null;

                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                      animate={{ opacity: 100, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                      transition={{ duration: 0.35 }}
                      style={{
                        height: 958.34,
                      }}
                      className={cn(
                        "w-full h-full",
                        selectedTab === tab.id
                          ? "opacity-100 scale-100 blur-0"
                          : "opacity-0 scale-95 blur-sm"
                      )}
                    >
                      {image?.url && (
                        <div
                          className={cn(
                            "relative flex select-none w-full h-full"
                          )}
                        >
                          <Image
                            width={732}
                            height={958}
                            src={getImageUrl(image?.url) || ""}
                            alt={image.alternativeText || ""}
                            className={cn("z-1 w-full h-full object-cover")}
                            draggable={false}
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

function TabProgress({
  isActive,
  isPaused,
  onComplete,
}: {
  isActive: boolean;
  isPaused: boolean;
  onComplete: () => void;
}) {
  const width = useMotionValue(0);
  const widthPx = useTransform(width, (v) => `${v}%`);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    if (!isActive) {
      progressRef.current = 0;
      width.set(0);
      lastTimeRef.current = null;
      return;
    }

    function step(timestamp: number) {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        progressRef.current += delta / 5000;

        if (progressRef.current >= 1) {
          onComplete();
          return; // Stop the animation loop after completion
        }
        width.set(progressRef.current * 100);
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isActive, isPaused, onComplete, width]);

  return (
    <motion.span
      className="absolute -top-[3px] left-0 h-[3px] bg-black"
      style={{ width: widthPx }}
    />
  );
}
