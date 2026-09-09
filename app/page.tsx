import { LoungeNav } from "@/components/lounge/LoungeNav/LoungeNav";
import { LoungeHero } from "@/components/lounge/LoungeHero/LoungeHero";
import { LoungeAtmosphere } from "@/components/lounge/LoungeAtmosphere/LoungeAtmosphere";
import { LoungeOfferings } from "@/components/lounge/LoungeOfferings/LoungeOfferings";
import { LoungeGallery } from "@/components/lounge/LoungeGallery/LoungeGallery";
import { LoungeEvents } from "@/components/lounge/LoungeEvents/LoungeEvents";
import { LoungeReservation } from "@/components/lounge/LoungeReservation/LoungeReservation";
import { LoungeFooter } from "@/components/lounge/LoungeFooter/LoungeFooter";

export default function Home() {
  return (
    <>
      <LoungeNav />
      <main id="main-content">
        <LoungeHero />
        <LoungeAtmosphere />
        <LoungeOfferings />
        <LoungeGallery />
        <LoungeEvents />
        <LoungeReservation />
      </main>
      <LoungeFooter />
    </>
  );
}