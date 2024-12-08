import ProductSection from "./components/productsection";
import Hero from "./components/hero";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json();
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <ProductSection 
      heading="Flash Sales"
      subHeading="Today's"
      showTimer
      isCarousel
      ctaText="See more"
      products={data}
      action={
        <div className="flex gap-2">
          <Button 
          variant={"outline"} size={"icon"} className="rounded-full">
            <ChevronLeftIcon />
          </Button>
          <Button 
          variant={"outline"} size={"icon"} className="rounded-full">
            <ChevronRightIcon />
          </Button>
        </div>
      }
      />
    </div>
  );
}
