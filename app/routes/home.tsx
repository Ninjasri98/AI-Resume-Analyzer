import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVise" },
    { name: "description", content: "Resume Analyser for your dream job" },
  ];
}

export default function Home() {
  return <main>

  </main>
}
