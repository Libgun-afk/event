/** @format */

import { BannerGrid } from "@/components/BannerGrid";
import EntertainmentPage from "@/components/EntertaimentPage";
import EventsConcerts from "@/components/EventsConcerts";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import React from "react";

const Home = () => {
  return (
    <div>
      <PromotionalBanner />
      <main>
        <BannerGrid />
      </main>
      <EntertainmentPage />
      <EventsConcerts />
      {/* <FeaturedServises /> */}
    </div>
  );
};

export default Home;
