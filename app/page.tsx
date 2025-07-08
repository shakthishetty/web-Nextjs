

import Address from "@/components/address/Address";
import Collection from "@/components/collection/Collection";
import Origins from "@/components/origins/Origins";
import ProjectCarousel from "@/components/project/Project";
import Resource from "@/components/resources/Resource";
import Veins from "@/components/veins/Veins";

export default async function Home() {
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const [collectionRes, veinsRes] = await Promise.all([
    fetch(`${baseUrl}/api/exoticCollection`, { cache: "no-store" }),
    fetch(`${baseUrl}/api/veins`, { cache: "no-store" }),
  ]);




  const exoticCollection = await collectionRes.json();
  const veins = await veinsRes.json();

  return (
    <>
      <Collection collection={exoticCollection} />
      <Origins/>
      <Veins items={veins} />
      <ProjectCarousel/>
      <Address/>
      <Resource/>
     

    </>
  );
}
