import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.jpeg"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
        priority={true}
      />
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";
