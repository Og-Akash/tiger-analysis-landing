import { client } from "@/lib/apollo-client";
import { GET_HOMEDATA } from "@/lib/query/getLandingData";
import { HomepageResponse, HomepageSection } from "@/types";
import {
  componentMap,
  propsMap,
  ComponentKey,
} from "@/components/component-mapper";
import { Metadata } from "next";
import { getImageUrl } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.query<HomepageResponse>({
    query: GET_HOMEDATA,
    fetchPolicy: "no-cache",
  });

  const seo = data?.homepage?.seo;
  const faviconUrl = seo?.favicon?.url ? getImageUrl(seo.favicon.url) : null;
  const shareImageUrl = seo?.shareImage?.url
    ? getImageUrl(seo.shareImage.url)
    : null;

  return {
    title: seo?.title || seo?.metaTitle || "Tiger Analytics",
    description: seo?.description || seo?.metaDescription,
    openGraph: {
      title: seo?.metaTitle || seo?.title,
      description: seo?.metaDescription || seo?.description,
      images: shareImageUrl ? [{ url: shareImageUrl }] : [],
    },
    icons: {
      icon: faviconUrl || "/favicon.ico",
    },
  };
}

export default async function HomePage() {
  let homeDataResponse: HomepageResponse | null = null;

  try {
    const { data } = await client.query({
      query: GET_HOMEDATA,
      fetchPolicy: "no-cache",
    });
    homeDataResponse = data as HomepageResponse;
  } catch (error) {
    console.error("Failed to fetch homepage data:", error);
    return (
      <div className="flex h-screen w-full bg-black items-center justify-center">
        <p className="text-white">
          Something went wrong while loading the page.
        </p>
      </div>
    );
  }

  const renderSection = (section: HomepageSection, index: number) => {
    const Component = componentMap[section.__typename as ComponentKey];
    if (!Component) return null;
    const props = propsMap[section.__typename as ComponentKey](section as any);

    return <Component key={index} {...props} />;
  };

  return (
    <main className="flex flex-wrap justify-center">
      {homeDataResponse?.homepage?.sections?.map((section: any, index: any) =>
        renderSection(section, index),
      )}
    </main>
  );
}
