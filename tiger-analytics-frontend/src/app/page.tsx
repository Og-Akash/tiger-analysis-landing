import { client } from "@/lib/apollo-client";
import { GET_HOMEDATA } from "@/lib/query/getLandingData"
import { HomepageResponse, HomepageSection } from "@/types";
import { componentMap, propsMap, ComponentKey } from "@/components/component-mapper";

export default async function HomePage() {

  const response = await client.query({
    query: GET_HOMEDATA
  })

  const data = response.data as HomepageResponse

  const renderSection = (section: HomepageSection, index: number) => {
    const Component = componentMap[section.__typename as ComponentKey];
    const props = propsMap[section.__typename as ComponentKey](section as any);
    
    return <Component key={index} {...props} />;
  };

  return (
    <main className="flex flex-wrap justify-center">
      {data?.homepage?.sections?.map((section, index) => 
        renderSection(section, index)
      )}
    </main>
  )
}