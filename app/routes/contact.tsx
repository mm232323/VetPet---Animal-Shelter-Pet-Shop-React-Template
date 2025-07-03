import Contact from "~/pages/Contact";
import type { Route } from "./+types/about";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "PetVet - Contact" },
    { name: "description", content: "About PetVet" },
  ];
}
export default function contact() {
  return (
    <main>
      <Contact />
    </main>
  );
}
