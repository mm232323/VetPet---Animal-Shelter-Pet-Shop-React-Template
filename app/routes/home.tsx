import Welcome from "~/pages/Welcome";
import type { Route } from "./+types/home";
import About from "~/pages/About";
import Adopt from "~/pages/Adopt";
import Support from "~/pages/Support";
import Contact from "~/pages/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "VetPet: Your Trusted Partner in Pet Adoption, Health, and Supplies",
    },
    {
      name: "description",
      content:
        "Find your new best friend at VetPet's adoption center, shop for premium pet supplies, and discover expert veterinary tips. We're your one-stop shop for everything your pet needs to live a happy, healthy life.",
    },
    {
      name: "keywords",
      content:
        "pet adoption, animal shelter, veterinary clinic, pet supplies, dog adoption, cat adoption, rescue pets, pet health, pet care, animal wellness",
    },
  ];
}

export default function Home() {
  return (
    <main className="selection:bg-[#2A1458] selection:text-white relative top-[-150px] w-full h-fit">
      <div className="w-full relative overflow-hidden h-full z-[2]">
        <img
          src="/texture.png"
          alt="pages background"
          className="h-full max-w-[100000000000000000000px] w-auto absolute z-[-10000] opacity-15 top-0"
        />
        <Welcome />
        <About />
        <Adopt />
        <Support />
        <Contact />
      </div>
    </main>
  );
}
