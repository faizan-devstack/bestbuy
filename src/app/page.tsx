import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HottestOffers from "@/components/HottestOffers";
import ShopByCategory from "@/components/ShopByCategory";
import TopSellingProducts from "@/components/TopSellingProducts";
import LovingProducts from "@/components/LovingProducts";
import ValentinesDay from "@/components/ui/ValentinesDay";
import ShopAndSave from "@/components/ShopAndSave";
import GreatestTech from "@/components/GreatestTech";
import WatchPartySale from "@/components/WatchPartySale";
import DiscoverDeals from "@/components/DiscoverDeals";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HottestOffers />
      <ShopByCategory />
      <WatchPartySale />
      <ValentinesDay />
      <GreatestTech />
      <ShopAndSave />
      <DiscoverDeals />
      <TopSellingProducts />
      <LovingProducts />
      <Footer />
    </div>
    
  );
}
