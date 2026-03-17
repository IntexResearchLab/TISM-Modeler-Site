import './App.css'
import logo from './assets/logo_light.png'

export default function App() {
  const appName = 'T|ISM Modeler'
  const releaseVersion = 'v1.0.0'

const authors = [
  'Ibrahim Yahaya Wuni',
  'Bridget Tawiah Badu Eshun',
]

  const coreFeatures = [
    {
      title: "End-to-end TISM workflow",
      description:
        "Move from variable definition to SSIM, reachability analysis, level partitioning, MICMAC analysis, and final model generation in one guided desktop workflow.",
    },
    {
      title: "Built for research and teaching",
      description:
        "Designed for researchers, supervisors, graduate students, and academic teams working with ISM and TISM methodologies.",
    },
    {
      title: "Interpretive modeling support",
      description:
        "Capture structural relationships together with interpretations, so the final model is not only computable but also explainable.",
    },
    {
      title: "Publication-ready exports",
      description:
        "Export matrices, charts, graphs, and reports for analysis, presentations, appendices, and academic documentation.",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Define variables",
      text: "Create the set of variables, labels, and research constructs that will shape the model.",
    },
    {
      step: "02",
      title: "Construct SSIM",
      text: "Capture pairwise contextual relationships using V, A, X, and O, with optional interpretive explanations.",
    },
    {
      step: "03",
      title: "Generate reachability matrices",
      text: "Convert structural relationships into initial and final reachability matrices for further analysis.",
    },
    {
      step: "04",
      title: "Partition levels",
      text: "Identify hierarchy levels and reveal how variables propagate through the system.",
    },
    {
      step: "05",
      title: "Build the final model",
      text: "Visualize the directed structure as a clear multi-level ISM or TISM model.",
    },
    {
      step: "06",
      title: "Run MICMAC analysis",
      text: "Examine driving and dependence power to classify variables and interpret system behavior.",
    },
  ];

  const metrics = [
    { label: "Modeling modes", value: "ISM + TISM" },
    { label: "Output pipeline", value: "Variables → Report" },
    { label: "Export formats", value: "PNG · CSV · Excel · PDF" },
    { label: "Release", value: releaseVersion },
  ];

  const releaseNotes = [
    "Structured desktop workflow for ISM and TISM studies",
    "Support for SSIM, reachability, MICMAC, and level partitioning",
    "Clean visual summaries for academic reporting and demonstration",
  ];

  const faqs = [
    {
      q: `Who is ${appName} for?`,
      a: "It is designed for researchers, graduate students, analysts, and instructors working with interpretive structural modeling methods.",
    },
    {
      q: "Does it support both ISM and TISM?",
      a: "Yes. The workflow supports standard structural modeling as well as interpretation-focused total interpretive structural modeling.",
    },
    {
      q: "Can I use it for academic reporting?",
      a: "Yes. The product is designed to help users move from structured inputs to visual outputs and exportable artifacts suitable for reports and presentations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-6rem] top-[-4rem] h-72 w-72 rounded-full bg-orange-400/15 blur-3xl" />
        <div className="absolute right-[-5rem] top-[4rem] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[-7rem] left-[28%] h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
              <img
                src={logo}
                alt={`${appName} logo`}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-slate-950">
                {appName}
              </div>
<div className="text-xs text-slate-500">
  Research software for interpretive structural modeling (ISM/TISM)
</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a href="#overview" className="transition hover:text-slate-950">
              Overview
            </a>
            <a href="#workflow" className="transition hover:text-slate-950">
              Workflow
            </a>
            <a href="#features" className="transition hover:text-slate-950">
              Features
            </a>
            <a href="#faq" className="transition hover:text-slate-950">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="hidden rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
            >
              Release notes
            </a>
            <a
              href="#download"
              className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
            >
              Download {releaseVersion}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-14 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Desktop release now available · Version 1.0.0
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 sm:h-24 sm:w-24">
                <img
                  src={logo}
                  alt={`${appName} logo`}
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Research software
                </div>
                <div className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  {appName}
                </div>
              </div>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
              A professional desktop workspace for
              <span className="block bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                TISM and ISM research.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {appName} helps researchers define variables, generate ISM/TISM
              artifacts, build interpretable hierarchies, and export polished outputs
              from a single desktop workspace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="rounded-2xl bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800"
              >
                Download for desktop
              </a>
              <a
                href="#overview"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore the workflow
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/30">
              <div className="overflow-hidden rounded-[26px] bg-[#0f1724] text-white">
                <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-white/20">
                      <img
                        src={logo}
                        alt={`${appName} logo`}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-base font-semibold tracking-tight">
                        {appName} Workspace
                      </div>
                      <div className="text-xs text-slate-400">
                        Research-oriented desktop interface preview
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200">
                    {releaseVersion}
                  </div>
                </div>

                <div className="grid grid-cols-[190px_1fr] gap-4 p-4">
                  <aside className="rounded-2xl bg-[#101c2b] p-3">
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Navigation
                    </div>
                    <div className="space-y-2 text-sm">
                      {[
                        "Welcome",
                        "Variable Definition",
                        "SSIM",
                        "Reachability Matrix",
                        "Reachability Power",
                        "Level Partitioning",
                        "MICMAC",
                        "Summary",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className={`rounded-xl px-3 py-2 transition ${
                            index === 5
                              ? "bg-blue-600 text-white"
                              : "text-slate-300 hover:bg-slate-800"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </aside>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-700 bg-[#182434] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-base font-semibold">
                            Multi-level interpretive graph
                          </div>
                          <div className="mt-1 text-xs text-slate-400">
                            Hierarchical structure with interpretation-aware modeling
                          </div>
                        </div>
                        <div className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300">
                          Export PNG
                        </div>
                      </div>

                      <div className="mt-4 space-y-5">
                        <div className="flex justify-center">
                          <div className="rounded-xl border border-orange-500/40 bg-orange-500/15 px-5 py-3 text-sm font-semibold text-orange-100">
                            Level IV · X1
                          </div>
                        </div>
                        <div className="flex justify-center gap-4">
                          <div className="rounded-xl border border-sky-500/40 bg-sky-500/15 px-5 py-3 text-sm font-semibold text-sky-100">
                            Level III · X3
                          </div>
                          <div className="rounded-xl border border-sky-500/40 bg-sky-500/15 px-5 py-3 text-sm font-semibold text-sky-100">
                            Level III · X4
                          </div>
                        </div>
                        <div className="flex justify-center gap-4">
                          <div className="rounded-xl border border-slate-600 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100">
                            Level II · X5
                          </div>
                          <div className="rounded-xl border border-slate-600 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100">
                            Level II · X6
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="rounded-xl border border-blue-500/40 bg-blue-500/15 px-5 py-3 text-sm font-semibold text-blue-100">
                            Level I · X2
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-slate-700 bg-[#182434] p-4">
                        <div className="text-sm font-semibold">SSIM symbols</div>
                        <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs font-semibold text-slate-200">
                          {['V', 'A', 'X', 'O', 'V', 'X', 'A', 'O'].map((item, idx) => (
                            <div key={`${item}-${idx}`} className="rounded-lg bg-[#0f1724] px-2 py-2">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-700 bg-[#182434] p-4">
                        <div className="text-sm font-semibold">MICMAC map</div>
                        <div className="relative mt-3 h-24 rounded-xl bg-[#0f1724]">
                          <div className="absolute left-1/2 top-0 h-full w-px bg-slate-700" />
                          <div className="absolute left-0 top-1/2 h-px w-full bg-slate-700" />
                          <div className="absolute left-[22%] top-[63%] h-3 w-3 rounded-full bg-sky-400" />
                          <div className="absolute left-[55%] top-[22%] h-3 w-3 rounded-full bg-orange-400" />
                          <div className="absolute left-[74%] top-[58%] h-3 w-3 rounded-full bg-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
  
  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
    Developed by
  </div>

  <div className="mt-1 text-sm font-semibold text-slate-950">
    Intex Research Lab Development Unit
  </div>
      <div className="mt-1 text-[11px] text-slate-500">
    © {new Date().getFullYear()} {authors.join(' and ')}
  </div>
</div>
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/20 lg:p-10">
              <div className="text-sm font-semibold text-blue-400">Why it matters</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Replace fragmented spreadsheets and manual diagrams with a focused modeling environment.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {appName} is built for method-intensive analytical work. It turns a
                complex interpretive process into a reproducible, visual, and exportable
                workflow without sacrificing methodological clarity.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-lg text-slate-900">
                    ✦
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm font-semibold text-orange-500">Workflow</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              A clear methodology pipeline from input variables to final insight.
            </h2>
            <p className="mt-3 text-slate-600">
              Every stage is designed to preserve methodological structure while making the research process easier to compute, inspect, and present.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                  Step {item.step}
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-300/20 lg:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="text-sm font-semibold text-blue-600">Tooling focus</div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                  Designed as a focused research product.
                </h2>
                <p className="mt-4 text-slate-600">
                  The website mirrors the application’s visual language: rounded panels, slate surfaces, strong contrast, structured sections, and calm visual density suited to academic users.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Guided multi-step methodology",
                  "Research-oriented interface language",
                  "Lightweight desktop-first interaction model",
                  "Clean export and reporting workflow",
                  "Presentation-friendly visuals",
                  "Consistent ISM/TISM analysis structure",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <div className="text-sm font-semibold text-slate-900">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/20 lg:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold text-orange-400">Download</div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Get {appName} {releaseVersion} for your desktop.
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Choose the appropriate installer for your operating system.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "macOS",
                      hint: "Apple Silicon",
                      link: "https://github.com/IntexResearchLab/TISM-Modeler-Site/releases/download/v1.0.0/Tism-Modeler-0.0.0-arm64.dmg",
                      style: "bg-orange-500 hover:bg-orange-400 text-white"
                    },
                    {
                      title: "Windows",
                      hint: "Windows 10+",
                      link: "https://github.com/IntexResearchLab/TISM-Modeler-Site/releases/download/v1.0.0/Tism-Modeler.0.0.0.msi",
                      style: "bg-blue-600 hover:bg-blue-500 text-white"
                    },
                    {
                      title: "Linux (Coming)",
                      hint: "AppImage / Debian",
                      link: "#",
                      style: "bg-white text-slate-950 hover:bg-slate-100"
                    },
                  ].map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-2xl px-5 py-4 text-center shadow-lg transition ${item.style}`}
                    >
                      <div className="text-sm font-semibold">Download for {item.title}</div>
                      <div
                        className={`mt-1 text-xs ${
                          item.title.startsWith('Linux') ? 'text-slate-500' : 'text-white/75'
                        }`}
                      >
                        {item.hint}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-800 bg-[#111827] p-6">
                <div className="text-sm font-semibold text-white">Release notes</div>
                <div className="mt-1 text-sm text-slate-400">{appName} {releaseVersion}</div>

                <div className="mt-5 space-y-3">
                  {releaseNotes.map((item) => (
                    <div key={item} className="rounded-xl bg-slate-900 px-4 py-3 text-sm text-slate-300 ring-1 ring-slate-800">
                      {item}
                    </div>
                  ))}
                </div>

                                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
                  Copyright © {new Date().getFullYear()} {authors.join(', ')}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
                  Developed by <span className="font-semibold text-white">Intex Research Lab Development Unit</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="mb-8 max-w-2xl">
            <div className="text-sm font-semibold text-blue-600">FAQ</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Common questions
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}