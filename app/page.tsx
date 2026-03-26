"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  name: string;
  category: string;
  accent: string;
  summary: string;
  previewTitle: string;
  previewMeta: string;
  imageSrc: string;
  why: string;
  how: string[];
  what: string[];
};

const projects: Project[] = [
  {
    name: "Supper Club Social Platform",
    category: "Curated Social Experiences",
    accent: "from-cyan-300 via-sky-500 to-indigo-700",
    summary:
      "A curated social dining marketplace connecting hosts, cooks, and guests through structured screening, payments, and repeatable event quality.",
    previewTitle: "Supper Club Marketplace",
    previewMeta: "Marketplace",
    imageSrc: "/wesupperclub.png",
    why: 
      "Hobby chef Mario would love to host dinners, but does not have the space. Maria has the space, but finds cooking so much work. Lea, Tom and Luca would love to attend a dinner party and meet new people. ",
    how: [
      "Structure the product as a two-sided marketplace connecting hosts, cooks, and guests.",
      "Use a pre-event filtering layer with structured questions to surface guest fit.",
      "Let hosts review and approve applicants to shape stronger group chemistry.",
      "Standardize the event format around menu, price, timing, and capacity.",
      "Support trust with profiles, reviews, attendance history, and upfront payments.",
    ],
    what: [
      "Event creation with date, location, menu, seat price, and participant roles.",
      "Guest application flows with structured questions before approval.",
      "Selection dashboard for reviewing and accepting attendees.",
      "Prepaid booking with platform fees and lower no-show risk.",
      "Profiles, group chat, reviews, feedback, and repeat matching after events.",
    ],
  },
  {
    name: "Butcher Guide App",
    category: "Interactive Product Education",
    accent: "from-rose-300 via-red-500 to-stone-900",
    summary:
      "An interactive meat-cut explorer that helps customers and staff choose the right cut, cook it correctly, and buy with confidence.",
    previewTitle: "Beef Cut Explorer",
    previewMeta: "English",
    imageSrc: "/consciouscatering.png",
    why: 
      "Whenever hobby chef Mario buys meat, he gets lost in all the different cuts, names, and cooking methods. Let alone the nutrition value. He wants to buy the right cut for his meal, but the information is scattered and confusing.",
    how: [
      "Use a visual-first interface with an interactive animal map for intuitive cut discovery.",
      "Show only the relevant context for each cut, including nutrition and best cooking methods.",
      "Guide decisions by matching cuts to goals such as grilling, lean meals, premium dining, or budget cooking.",
      "Normalize naming differences across regions to reduce confusion.",
      "Add lightweight filters for tenderness, fat level, protein, and preparation speed.",
    ],
    what: [
      "Interactive cow diagram with tap-to-select cut exploration.",
      "Per-cut nutritional values, cooking methods, and quality attributes.",
      "Filters for grilling, lean cuts, budget options, and quick meals.",
      "Cooking guides with time and temperature ranges per method.",
      "Comparison tools and multilingual cut mapping across markets.",
    ],
  },
  
  {
    name: "Conscious Catering",
    category: "Digital Catering Menu Management",
    accent: "from-amber-300 via-orange-500 to-red-600",
    summary:
      "A system where you upload your recipes and communicate daily menus to your customers, including automatic allergy and nutrition info.",
    previewTitle: "Kitchen Operations",
    previewMeta: "Web App",
    imageSrc: "/butcherguide.png",
    why: "Caterer Mario provides daily changing menus to his customers, but is tired of manually updating PDFs, communicating changes, and answering questions about ingredients, allergies, and nutrition.",
    how: [
      "Upload recipe books in one click.",
      "Attach them to meals dishes.",
      "Decide which meals you are offering today/this week.",
      "Communicate them interactively with all relevant info to customers.",
    ],
    what: [
      "One place in which all your recipe data is stored and structured.",
      "Automatic info provision to customers.",
    ],
  },
];

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/30">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.78))]" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/80">
          <span>{project.category}</span>
          <span>0{index + 1}</span>
        </div>
        <div className="overflow-hidden rounded-[1.6rem] border border-white/20 bg-transparent">
          <div className="mb-4 flex items-center justify-between px-4 pt-4">
            <div>
              <div className="text-xs uppercase tracking-[0.26em] text-rose-100/80">
                Product Preview
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {project.previewTitle}
              </div>
            </div>
            <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
              {project.previewMeta}
            </div>
          </div>
          <div className="w-full overflow-hidden border-t border-white/10 bg-transparent">
            <Image
              src={project.imageSrc}
              alt={`${project.name} preview`}
              width={1600}
              height={1100}
              className="block h-auto w-full"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </div>
        <p className="max-w-lg text-sm leading-6 text-white/82">{project.summary}</p>
      </div>
    </div>
  );
}

function SectionList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[] | string;
  tone: string;
}) {
  return (
    <div className={`rounded-[1.7rem] border ${tone} p-5`}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-3 text-md leading-6 text-slate-200">
        {typeof items === "string" ? (<span>{items}</span>
        ) : (
          items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-current opacity-80" />
              <span>{item}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_26%),linear-gradient(180deg,#07111f_0%,#091827_45%,#081423_100%)] text-slate-50">
      <section className="relative overflow-hidden px-6 pb-20 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.3em] text-slate-200 backdrop-blur-sm">
            TechVanEck · Software Development · Product Design for Operational Systems
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-8">
              <div className="space-y-5">
                
                <h1 className="w-full text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                  TechVanEck Software
                </h1>
              </div>

            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <div className="mb-4 flex flex-wrap gap-3">
                {projects.map((item, index) => {
                  const isActive = index === activeProject;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveProject(index)}
                      className={`rounded-full border px-4 py-2 text-left text-sm transition ${
                        isActive
                          ? "border-white bg-white text-slate-950"
                          : "border-white/20 bg-white/5 text-slate-200 hover:border-white/35 hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                   Browse Projects
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {project.name}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveProject((current) =>
                        current === 0 ? projects.length - 1 : current - 1,
                      )
                    }
                    aria-label="Previous project"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white transition hover:border-white/35 hover:bg-white/10"
                  >
                    <span aria-hidden="true" className="text-xl leading-none">
                      ←
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveProject((current) => (current + 1) % projects.length)
                    }
                    aria-label="Next project"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white transition hover:border-white/35 hover:bg-white/10"
                  >
                    <span aria-hidden="true" className="text-xl leading-none">
                      →
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <ProjectVisual project={project} index={activeProject} />

                <div className="grid gap-4">
                  <SectionList
                    title="Why?"
                    items={project.why}
                    tone="border-rose-400/20 bg-rose-950/20 text-rose-200"
                  />
                  <SectionList
                    title="How?"
                    items={project.how}
                    tone="border-cyan-400/20 bg-cyan-950/20 text-cyan-200"
                  />
                  <SectionList
                    title="What?"
                    items={project.what}
                    tone="border-amber-400/20 bg-amber-950/20 text-amber-200"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-center border-t border-white/10 pt-6">
                <a
                  href="mailto:sandervaneck@outlook.com?subject=Project%20Inquiry"
                  className="text-center text-3xl tracking-[-0.03em] text-white transition hover:text-cyan-200 [font-family:var(--font-display)]"
                >
                  See something you could use? Contact me!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-contact"
        className="px-6 pb-14 pt-6 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
              About TechVanEck
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white">
              TechVanEck builds software products around real operational
              constraints, not vague feature lists.
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-8 text-slate-300 md:grid-cols-2">
              <p>
                The work is centered on translating business friction into clear
                interfaces, useful systems, and products that teams can actually
                run day to day.
              </p>
              <p>
                From restaurant operations to guided commerce and curated
                marketplaces, the focus stays the same: define the bottleneck,
                design the mechanism, and ship the right product around it.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-900/10 bg-slate-950 p-8 text-white shadow-[0_25px_90px_rgba(8,15,28,0.32)]">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Need a product that clarifies operations and looks sharp doing it?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Send the current bottleneck, business model, and what needs to
              work better. TechVanEck can turn that into a focused product
              system.
            </p>
            <a
              href="mailto:sandervaneck@outlook.com?subject=Project%20Inquiry"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
            >
              Contact TechVanEck
            </a>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
              Best outreach includes project scope, target users, timeline, and
              the part of the workflow that currently breaks down.
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm leading-6 text-slate-400 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-white">TechVanEck</p>
            <p>Copyright © 2016 TechVanEck. All rights reserved.</p>
          </div>
          <div className="max-w-xl sm:text-right">
            <p>
              All content, designs, software concepts, and project materials
              displayed on this website are proprietary to TechVanEck unless
              otherwise stated.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
