import React from 'react'
import Support from '~/pages/Support'
import type { Route } from "./+types/support";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PetVet - Support" },
    { name: "description", content: "Support PetVet" },
  ];
}

export default function support() {
  return <main>
    <Support />
  </main>
}
