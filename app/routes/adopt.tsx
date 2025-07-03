import React from 'react'
import Adopt from '~/pages/Adopt'
import type { Route } from "./+types/adopt";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PetVet - Adopt" },
    { name: "description", content: "Adopt a pet from PetVet" },
  ];
}

export default function adopt() {
  return <main><Adopt /></main>
}
