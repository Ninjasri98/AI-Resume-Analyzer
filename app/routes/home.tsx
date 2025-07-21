import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVise" },
    { name: "description", content: "Resume Analyser for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
     <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        </div>
      </section>
  </main>
}
