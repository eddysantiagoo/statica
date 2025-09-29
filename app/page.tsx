import ParametrizedPage from "@/components/parametrized-page";
import { caterpillarPageData } from "@/data/pages/caterpillar-page";
import { caterpillarData } from "@/data/brands/caterpillar";

export default async function Home({}: {}) {
  return (
    <ParametrizedPage 
      pageData={caterpillarPageData} 
      brandData={caterpillarData} 
    />
  );
}
