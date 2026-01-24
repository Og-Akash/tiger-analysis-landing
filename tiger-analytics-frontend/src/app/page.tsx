"use client";

import { useQuery } from "@apollo/client/react";
import { GET_HOMEDATA } from "@/lib/query/getLandingData";
import { HomepageResponse, HomepageSection } from "@/types";
import {
  componentMap,
  propsMap,
  ComponentKey,
} from "@/components/component-mapper";

export default function HomePage() {
  let homeDataResponse: HomepageResponse | null = null;
  const { data, loading, error } = useQuery(GET_HOMEDATA, {
    fetchPolicy: "network-only",
  });

  homeDataResponse = data as HomepageResponse

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-black items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black dark:border-gray-600 dark:border-t-white" />
      </div>
    );
  }

  if (error) {
    console.error("Failed to fetch homepage data:", error);
    return null; // Or render a friendly error message
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
