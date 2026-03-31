"use client";

import Image from "next/image";
import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type ReactNode,
  type SetStateAction,
} from "react";

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

type ActuarialRole = {
  company: string;
  period: string;
  logoSrc: string;
  logoAlt: string;
  headline: string;
  body: string;
};

type TimelineEvent = {
  kind: "period" | "point";
  period: string;
  shortLabel: string;
  title: string;
  start: number;
  end?: number;
};

const actuarialRoles: ActuarialRole[] = [
  {
    company: "HiThere Pensions",
    period: "2021-2023",
    logoSrc: "/hithere_logo.jpeg",
    logoAlt: "HiThere Pensions logo",
    headline: "Built a full digital pension and insurance administration platform from scratch.",
    body:
      "Enabled insurers and pension funds to model, administer, and validate contracts at scale. The work centered on DB to DC scheme transformation, translating complex actuarial logic into transparent, production-grade software.",
  },
  {
    company: "AZL NV",
    period: "2023-2025",
    logoSrc: "/azl_logo.png",
    logoAlt: "AZL NV logo",
    headline: "Developed Python-based engines to automate pension projections for 50 plus pension funds.",
    body:
      "Simulated participant outcomes under a wide range of actuarial assumptions and scheme rules. The core focus was DB to DC migration, with precise and auditable calculations during large-scale system transitions.",
  },
  {
    company: "Squarelife Insurance",
    period: "2025-2026",
    logoSrc: "/squarelife_logo.jpeg",
    logoAlt: "Squarelife Insurance logo",
    headline: "Worked on pricing digital life insurance products inside a cloud-native insurtech platform.",
    body:
      "Contributed actuarial pricing logic within a fully cloud-based, API-driven architecture built for real-time product deployment and distribution across digital channels.",
  },
];

const aboutTimeline: TimelineEvent[] = [
  {
    kind: "point",
    period: "1998",
    shortLabel: "Born",
    title: "Born, Weert, the Netherlands",
    start: 1998,
  },
  {
    kind: "period",
    period: "1998 - 2017",
    shortLabel: "Tennis",
    title: "Travelled across Europe for tennis while doing high school",
    start: 1998,
    end: 2017,
  },
  {
    kind: "period",
    period: "2017 - 2020",
    shortLabel: "Erasmus",
    title: "Erasmus University Rotterdam - Economics Bachelor",
    start: 2017,
    end: 2020,
  },
  {
    kind: "period",
    period: "2020 - 2023",
    shortLabel: "HiThere",
    title: "Actuarial Software Engineer at HiThere",
    start: 2020,
    end: 2023,
  },
  {
    kind: "period",
    period: "2020 - 2023",
    shortLabel: "Master",
    title: "Actuarial Sciences Executive Master",
    start: 2020,
    end: 2023,
  },
  {
    kind: "point",
    period: "2021",
    shortLabel: "TechVanEck",
    title: "Founded TechVanEck",
    start: 2021,
  },
  {
    kind: "point",
    period: "2022",
    shortLabel: "MyChefsbase",
    title: "Launched MyChefsbase, restaurant kitchen management systems",
    start: 2022,
  },
  {
    kind: "period",
    period: "2023 - 2025",
    shortLabel: "AZL",
    title: "Actuarial Software Engineer at AZL NV",
    start: 2023,
    end: 2025,
  },
  {
    kind: "point",
    period: "2024",
    shortLabel: "Swipingchef",
    title: "Launched Swipingchef, an iOS app for creating and sharing recipes using AI",
    start: 2024,
  },
  {
    kind: "period",
    period: "2025 - 2026",
    shortLabel: "Squarelife",
    title: "Actuarial Software Engineer at Squarelife",
    start: 2025,
    end: 2026,
  },
  {
    kind: "point",
    period: "2025",
    shortLabel: "Butcher",
    title: "Launched the butcher app",
    start: 2025,
  },
  {
    kind: "point",
    period: "2025",
    shortLabel: "weSupperClub",
    title: "Launched weSupperClub",
    start: 2025,
  },
];

const skillGroups = {
  technical: [
    "Software Development",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "Kotlin",
    "Node.js",
    "API Design",
    "Product Architecture",
    "Cloud Platforms",
    "Database Modeling",
    "Actuarial Sciences",
    "Pension Systems",
    "Insurance Pricing",
    "Automation",
  ],
  languages: [
    "Dutch (Native)",
    "English (C1)",
    "Spanish (C1)",
    "Italian (B2)",
    "French (B1)",
    "German (B1)",
  ],
};

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

function ProjectsSection({
  id,
  label,
  projects,
  activeProject,
  setActiveProject,
  footer,
}: {
  id: string;
  label: string;
  projects: Project[];
  activeProject: number;
  setActiveProject: Dispatch<SetStateAction<number>>;
  footer?: ReactNode;
}) {
  const project = projects[activeProject];

  return (
    <section
      id={id}
      className="scroll-mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md"
    >
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
            {label}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{project.name}</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() =>
              setActiveProject((current) =>
                current === 0 ? projects.length - 1 : current - 1,
              )
            }
            aria-label={`Previous ${label.toLowerCase()} project`}
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
            aria-label={`Next ${label.toLowerCase()} project`}
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

      {footer ? (
        <div className="mt-6 flex justify-center border-t border-white/10 pt-6">
          {footer}
        </div>
      ) : null}
    </section>
  );
}

function ActuarialTimeline({
  activeRole,
  setActiveRole,
}: {
  activeRole: number;
  setActiveRole: Dispatch<SetStateAction<number>>;
}) {
  const role = actuarialRoles[activeRole];

  return (
    <section
      id="actuarial-projects"
      className="scroll-mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(10,24,39,0.96),rgba(20,44,58,0.92))] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.24)]"
    >
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
            Actuarial Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
            Pension and insurance work delivered across three very different platforms.
          </h2>
         

          <div className="mt-6 grid gap-3">
            {actuarialRoles.map((item, index) => {
              const isActive = index === activeRole;

              return (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setActiveRole(index)}
                  className={`flex items-center gap-4 rounded-[1.5rem] border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-cyan-300/60 bg-cyan-300/10"
                      : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2">
                    <Image
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      width={96}
                      height={96}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-cyan-200">
                      {item.period}
                    </p>
                    <p className="mt-1 text-base font-semibold text-white">
                      {item.company}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-8">
          <div className="absolute right-6 top-5 text-7xl font-semibold leading-none text-white/10">
            &ldquo;
          </div>
          <div className="relative">
            <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-3 shadow-[0_10px_30px_rgba(255,255,255,0.08)]">
                  <Image
                    src={role.logoSrc}
                    alt={role.logoAlt}
                    width={120}
                    height={120}
                    className="max-h-10 w-auto object-contain"
                    priority={activeRole === 0}
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-cyan-200">
                    {role.period}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {role.company}
                  </h3>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveRole((current) =>
                      current === 0 ? actuarialRoles.length - 1 : current - 1,
                    )
                  }
                  aria-label="Previous actuarial role"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <span aria-hidden="true" className="text-xl leading-none">
                    ←
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveRole((current) => (current + 1) % actuarialRoles.length)
                  }
                  aria-label="Next actuarial role"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <span aria-hidden="true" className="text-xl leading-none">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <p className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
                {role.headline}
              </p>
              <p className="max-w-3xl text-lg leading-8 text-slate-200">
                {role.body}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {actuarialRoles.map((item, index) => (
                <button
                  key={`${item.company}-dot`}
                  type="button"
                  onClick={() => setActiveRole(index)}
                  aria-label={`Show ${item.company}`}
                  className={`h-2.5 rounded-full transition ${
                    index === activeRole ? "w-14 bg-cyan-300" : "w-8 bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 flex justify-center border-t border-white/10 pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-100 px-5 py-3 text-center text-sm font-semibold tracking-[-0.01em] text-slate-950 transition hover:bg-white"
              >
                See something you could use? Contact me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutTimeline({
  activeTimelineItem,
  setActiveTimelineItem,
}: {
  activeTimelineItem: number;
  setActiveTimelineItem: Dispatch<SetStateAction<number>>;
}) {
  const timelineStart = 2017;
  const timelineEnd = 2026;
  const activeEvent = aboutTimeline[activeTimelineItem];
  const preTimelineEvents = aboutTimeline.slice(0, 2);
  const mainTimelineEvents = aboutTimeline.slice(2);
  const totalYears = timelineEnd - timelineStart;
  const laneEnds: number[] = [];
  const timelineItems = mainTimelineEvents.map((event) => {
    const eventEnd = event.end ?? event.start;
    const center = (event.start + eventEnd) / 2;
    const labelSpanYears = Math.max(event.shortLabel.length * 0.42, 1.4);
    const labelStart = center - labelSpanYears / 2;
    const labelEnd = center + labelSpanYears / 2;
    let lane = laneEnds.findIndex((laneEnd) => labelStart > laneEnd + 0.15);

    if (lane === -1) {
      lane = laneEnds.length;
      laneEnds.push(labelEnd);
    } else {
      laneEnds[lane] = labelEnd;
    }

    return {
      ...event,
      index: aboutTimeline.findIndex((item) => item === event),
      lane,
      labelStart,
      labelEnd,
    };
  });
  const laneHeight = 34;
  const timelineHeight = 80 + laneEnds.length * laneHeight;

  return (
    <div
      id="about-me"
      className="scroll-mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm"
    >
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
        About me
      </p>
      <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white">
        A timeline of actuarial work, product building, and launches.
      </h2>

      <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-slate-950/30 p-4 sm:p-5">
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cyan-200">
              Prelude
            </p>
            <div className="mt-4 space-y-3">
              {preTimelineEvents.map((event, index) => {
                const isActive = activeTimelineItem === index;

                return (
                  <button
                    key={`${event.period}-${event.title}`}
                    type="button"
                    onClick={() => setActiveTimelineItem(index)}
                    className={`w-full rounded-[1rem] border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-cyan-300/40 bg-cyan-300/12"
                        : "border-white/10 bg-white/5 hover:bg-white/8"
                    }`}
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-cyan-200">
                      {event.period}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {event.shortLabel}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-[repeat(10,minmax(0,1fr))] gap-x-1">
            <div className="col-span-full mb-6 grid grid-cols-subgrid">
              {Array.from({ length: timelineEnd - timelineStart + 1 }, (_, index) => {
                const year = timelineStart + index;

                return (
                  <div
                    key={year}
                    className="text-center text-[0.52rem] font-medium uppercase tracking-[0.08em] text-slate-400"
                  >
                    {year}
                  </div>
                );
              })}
            </div>

            <div className="relative col-span-full" style={{ height: `${timelineHeight}px` }}>
              <div className="absolute left-0 right-0 top-[22px] h-px bg-white/15" />

              {timelineItems.map((event) => {
                const startPercent = ((event.start - timelineStart) / totalYears) * 100;
                const endPercent =
                  (((event.end ?? event.start) - timelineStart) / totalYears) * 100;
                const centerPercent =
                  (((event.start + (event.end ?? event.start)) / 2 - timelineStart) /
                    totalYears) *
                  100;
                const topOffset = 10 + event.lane * laneHeight;
                const isActive = activeTimelineItem === event.index;

                return (
                  <div key={`${event.period}-${event.title}`}>
                    <button
                      type="button"
                      onClick={() => setActiveTimelineItem(event.index)}
                      className={`absolute -translate-x-1/2 rounded-full px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] transition sm:text-[0.62rem] ${
                        isActive
                          ? "bg-cyan-300 text-slate-950"
                          : "bg-slate-700/70 text-cyan-50 hover:bg-slate-600/80"
                      }`}
                      style={{
                        left: `${centerPercent}%`,
                        top: `${topOffset}px`,
                      }}
                    >
                      {event.shortLabel}
                    </button>

                    <div
                      className="absolute w-px bg-white/12"
                      style={{
                        left: `${centerPercent}%`,
                        top: `${topOffset + 20}px`,
                        height: "8px",
                      }}
                    />

                    {event.kind === "period" ? (
                      <div
                        className={`absolute h-3 rounded-full border transition ${
                          isActive
                            ? "border-cyan-300/60 bg-cyan-300/70"
                            : "border-cyan-300/20 bg-cyan-300/25"
                        }`}
                        style={{
                          left: `${startPercent}%`,
                          width: `${Math.max(endPercent - startPercent, 1.8)}%`,
                          top: `${topOffset + 29}px`,
                        }}
                      />
                    ) : (
                      <div
                        className={`absolute h-3.5 w-3.5 -translate-x-1/2 rounded-full border transition ${
                          isActive
                            ? "border-cyan-200/80 bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.2)]"
                            : "border-cyan-300/40 bg-slate-950 shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                        }`}
                        style={{
                          left: `${centerPercent}%`,
                          top: `${topOffset + 27}px`,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-full mt-6 rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cyan-200">
              {activeEvent.period}
            </p>
            <p className="mt-2 text-base font-semibold text-white sm:text-lg">
              {activeEvent.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div
      id="skills"
      className="scroll-mt-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm"
    >
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
        Skills
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
        Technical depth across product engineering and actuarial systems.
      </h2>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
          Technical
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {skillGroups.technical.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
          Languages
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {skillGroups.languages.map((language) => (
            <div
              key={language}
              className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
            >
              {language}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSoftwareProject, setActiveSoftwareProject] = useState(0);
  const [activeActuarialRole, setActiveActuarialRole] = useState(0);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  function handleContactChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setContactForm((current) => ({ ...current, [name]: value }));
  }

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setContactStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Failed to send message.");
      }

      setContactForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setContactStatus({
        type: "success",
        message: "Message sent. I will get back to you soon.",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send message.";
      setContactStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_26%),linear-gradient(180deg,#07111f_0%,#091827_45%,#081423_100%)] text-slate-50">
      <section className="relative overflow-hidden px-6 pb-20 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap justify-center gap-x-4 gap-y-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.3em] text-slate-200 backdrop-blur-sm">
            <a href="#software-projects" className="transition hover:text-white">
              Proud Software Projects
            </a>
            <a href="#actuarial-projects" className="transition hover:text-white">
              Actuarial Projects
            </a>
            <a href="#about-me" className="transition hover:text-white">
              About me
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Hit me up!
            </a>
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-[3fr_1fr] lg:items-center">
                <h1 className="w-full text-center text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-5xl lg:text-left lg:text-6xl">
                  <span className="block">TechVanEck </span>
                  <span className="block">Software &amp; Actuarial </span>
                  <span className="block">Services</span>
                </h1>
                <div className="flex justify-center lg:justify-center">
                  <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                    <Image
                      src="/profile.jpeg"
                      alt="Portrait of Sander Van Eck"
                      width={320}
                      height={320}
                      className="h-44 w-44 rounded-full object-cover object-[center_22%] sm:h-52 sm:w-52"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <ProjectsSection
              id="software-projects"
              label="Proud Software Projects"
              projects={projects}
              activeProject={activeSoftwareProject}
              setActiveProject={setActiveSoftwareProject}
              footer={
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-100 px-5 py-3 text-center text-sm font-semibold tracking-[-0.01em] text-slate-950 transition hover:bg-white"
                >
                  See something you could use? Contact me!
                </a>
              }
            />
            <ActuarialTimeline
              activeRole={activeActuarialRole}
              setActiveRole={setActiveActuarialRole}
            />

            
          </div>
        </div>
      </section>

      <section
        className="px-6 pb-14 pt-6 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl space-y-6">
          <AboutTimeline
            activeTimelineItem={activeTimelineItem}
            setActiveTimelineItem={setActiveTimelineItem}
          />

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SkillsSection />

            <div
              id="contact"
              className="scroll-mt-6 rounded-[2rem] border border-slate-900/10 bg-slate-950 p-8 text-white shadow-[0_25px_90px_rgba(8,15,28,0.32)]"
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Need a product that clarifies operations and looks sharp doing it?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Send the current bottleneck, business model, and what needs to
                work better. Your message goes directly to
                {" "}
                <span className="font-medium text-white">sandervaneck@outlook.com</span>.
              </p>
              <form className="mt-8 space-y-5" onSubmit={handleContactSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-300">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                      className="w-full rounded-[1rem] border border-slate-300/80 bg-gradient-to-br from-stone-100 via-slate-200 to-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-300">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      className="w-full rounded-[1rem] border border-slate-300/80 bg-gradient-to-br from-stone-100 via-slate-200 to-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-300">
                    Contact Details
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={contactForm.company}
                    onChange={handleContactChange}
                    className="w-full rounded-[1rem] border border-slate-300/80 bg-gradient-to-br from-stone-100 via-slate-200 to-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                    placeholder="Company, phone number, or preferred callback details"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-300">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={6}
                    className="w-full rounded-[1rem] border border-slate-300/80 bg-gradient-to-br from-stone-100 via-slate-200 to-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
                    placeholder="Project scope, target users, timeline, and the part of the workflow that currently breaks down."
                  />
                </label>

                {contactStatus.type !== "idle" ? (
                  <div
                    className={`rounded-[1rem] border px-4 py-3 text-sm ${
                      contactStatus.type === "success"
                        ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
                        : "border-rose-300/25 bg-rose-300/10 text-rose-100"
                    }`}
                  >
                    {contactStatus.message}
                  </div>
                ) : null}

                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm leading-6 text-slate-400">
                    Best outreach includes project scope, timeline, and the bottleneck that needs fixing.
                  </p>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex shrink-0 items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
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
