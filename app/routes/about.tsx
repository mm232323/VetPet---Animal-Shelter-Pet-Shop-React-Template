import About from "~/pages/About";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PetVet - About" },
    { name: "description", content: "About PetVet" },
  ];
}
export default function about() {
  return <main>
    <About />
  </main>
}
