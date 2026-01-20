import { cn, getImageUrl } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import PixelTransition from "@/components/react-bits-ui/pixel-transition";
import { Testimonial as TestimonialProps } from "@/types";

export default function Testimonial({
  data,
  flip = false,
  hasContent,
}: {
  data: TestimonialProps;
  flip: boolean;
  hasContent: boolean;
}) {
  if (hasContent) {
    return <FullReview data={data} flip={flip} />;
  } else {
    return <CompactReview data={data} flip={flip} />;
  }
}

function FullReview({ data, flip }: { data: any; flip: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(0.75rem,1.8vw,1.25rem)]">
      {flip ? (
        <>
          <ReviewTile data={data} flip={flip} />
          <LogoTile asset={data.logo_image} name={data.name} />
          <ImageTile
            asset={data.image}
            name={data.name}
            pos={data.position}
          />
        </>
      ) : (
        <>
          <ImageTile
            asset={data.image}
            name={data.name}
            pos={data.position}
          />
          <LogoTile asset={data.logo_image} name={data.name} />
          <ReviewTile data={data} flip={flip} />
        </>
      )}
    </div>
  );
}

function CompactReview({ data, flip }: { data: any; flip: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-[clamp(0.75rem,1.8vw,1.25rem)]">
      {flip ? (
        <>
          <ImageTile
            asset={data.image}
            name={data.name}
            pos={data.name_overlay_position}
          />
          <LogoTile asset={data.logo_image} name={data.name} />
        </>
      ) : (
        <>
          <LogoTile asset={data.logo_image} name={data.name} />
          <ImageTile
            asset={data.image}
            name={data.name}
            pos={data.name_overlay_position}
          />
        </>
      )}
    </div>
  );
}

function ImageTile({
  asset,
  name,
  pos = "bottom-left",
}: {
  asset: any;
  name: string;
  pos: any;
}) {
  return (
    <div className="aspect-square h-full relative  w-full overflow-hidden border border-[#0F0F0F]">
      <PixelTransition
        firstContent={
          <>
            {asset?.url ? (
              <Image
                src={getImageUrl(asset.url) || ""}
                alt={asset.alternativeText ?? name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[clamp(1rem,2vw,1.5rem)] text-[#0F0F0F]/60">
                No image
              </div>
            )}
            <span
              className={cn(
                "absolute px-2 py-1 text-base 2xl:text-2xl font-bold text-white font-karantina",
                pos === "top-left"
                  ? "top-2 left-2 2xl:top-4 2xl:left-4"
                  : pos === "top-right"
                  ? "top-2 right-2 2xl:top-4 2xl:right-4"
                  : pos === "bottom-left"
                  ? "bottom-2 left-2 2xl:bottom-4 2xl:left-4"
                  : "sr-only"
              )}
            >
              {name}
            </span>
          </>
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#111",
            }}
          >
            <span
              className={cn(
                "px-2 py-1 text-base text-center 2xl:text-7xl font-bold text-white font-karantina"
              )}
            >
              {name}
            </span>
          </div>
        }
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.4}
        className="w-full h-full border-0 border-none rounded-none"
      ></PixelTransition>
    </div>
  );
}

function LogoTile({
  asset,
  name,
}: {
  asset: any;
  name: string;
}) {
  return (
    <div className="aspect-square h-full flex w-full items-center justify-center border border-[#0F0F0F] bg-[#F7EFE6]">
      {asset?.url ? (
        <Image
          src={getImageUrl(asset.url) || ""}
          alt={asset.alternativeText ?? name}
          width={180}
          height={80}
          className="h-auto w-[min(60%,220px)] object-contain"
        />
      ) : (
        <div className="px-4 text-center font-karantina font-semibold tracking-wide text-[#0F0F0F] text-[clamp(1.25rem,2.6vw,1.75rem)]">
          {name}
        </div>
      )}
    </div>
  );
}

function ReviewTile({ data, flip }: { data: any; flip: boolean }) {

  return (
    <div
      className={cn(
        "col-span-2 flex flex-col justify-between border border-[#0F0F0F] p-[clamp(0.9rem,1.8vw,1.35rem)] font-inter font-light",
        flip ? "bg-[#FC7AFF]" : "bg-[#7AFFE7]"
      )}
    >
      <div
        className="mb-6 text-[#0F0F0F] text-[clamp(1rem,1.4vw,1.05rem)] leading-[clamp(1.5rem,2.2vw,1.8rem)]
                sm:text-[clamp(1.25rem,1.8vw,1.8rem)] sm:leading-[clamp(1.9rem,2.6vw,2rem)]
                md:text-[clamp(1rem,1.8vw,1.5rem)] md:leading-[clamp(1.5rem,2.6vw,2rem)]
                lg:text-[clamp(1rem,1.4vw,1.5rem)] lg:leading-[clamp(1.9rem,2.6vw,2.3rem)]
                2xl:text-[clamp(1.5rem,1.4vw,2rem)] 2xl:leading-[clamp(2.3rem,2.6vw,2.8rem)]"
        dangerouslySetInnerHTML={{
          __html:
            (data.content as string) || "",
        }}
      />
      <div className="flex justify-between items-end mt-[clamp(0.75rem,1.4vw,1rem)]">
        <div className="">
          <div
            className="border-t border-[#0F0F0F] pt-1 text-[#0F0F0F] text-[clamp(1rem,1.4vw,1.05rem)] leading-[clamp(1.5rem,2.2vw,1.8rem)]
                    sm:text-[clamp(1.25rem,1.8vw,1.8rem)] sm:leading-[clamp(1.9rem,2.6vw,2rem)]
                    md:text-[clamp(1rem,1.8vw,1.5rem)] md:leading-[clamp(1.5rem,2.6vw,2rem)]
                    lg:text-[clamp(1rem,1.4vw,1.5rem)] lg:leading-[clamp(1.9rem,2.6vw,2.3rem)] font-bold"
          >
            {data.name}
          </div>
          {data.role && (
            <div
              className="text-[#0F0F0F] text-[clamp(0.8rem,1vw,0.95rem)]
                            sm:text-[clamp(0.9rem,1vw,1rem)] sm:leading-[clamp(1.5rem,2.2vw,1.8rem)]
                            md:text-[clamp(0.8rem,1vw,0.95rem)] md:leading-[clamp(1.5rem,2.2vw,1.8rem)]
                            lg:text-[clamp(0.9rem,1vw,1rem)] lg:leading-[clamp(1.5rem,2.2vw,1.8rem)]
                            2xl:text-[clamp(0.8rem,1vw,1rem)] 2xl:leading-[clamp(1.5rem,2.2vw,1.8rem)]"
              dangerouslySetInnerHTML={{
                __html:
                  (data.role as string) || "",
              }}
            />
          )}
        </div>
        <div
          className={cn(
            "hidden bg-[#0F0F0F] rounded-full p-0.5 w-fit aspect-square md:flex items-center justify-center",
            flip ? "text-[#FC7AFF]" : "text-[#7AFFE7]"
          )}
        >
          <Plus className="size-6" />
        </div>
      </div>
    </div>
  );
}
