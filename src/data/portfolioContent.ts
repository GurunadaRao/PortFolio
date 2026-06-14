import { PortfolioContent } from "../types/portfolio";

export const portfolioContent: PortfolioContent = {
  heroTag: "Product Engineer",
  name: "Gurunada Rao Reddy",
  subtitle: "Full-Stack Engineer. AI-native. Production-obsessed.",
  summary:
    "Bridging the gap between robust system architecture and tactile user interfaces. I build production-grade web systems, responsive mobile apps, and autonomous AI integrations from concept to high-scale launch.",
  stats: [
    { value: "8.87", label: "CGPA" },
    { value: "250+", label: "LeetCode Solved" },
    { value: "1000+", label: "GitHub Commits" },
    { value: "2", label: "Leadership Roles" },
  ],
  domains: [
    {
      id: "fullstack",
      title: "Full Stack Engineering",
      summary: "High-performance web architectures from robust database structures to intuitive client interfaces.",
      details: [
        "Sleek SPAs and Server-Side Rendering (Next.js 14)",
        "API-First Architectures (RESTful, GraphQL, WebSockets)",
        "Secure auth schemas (JWT, OAuth 2.0, refresh-token rotation)",
        "Scalable database models (MongoDB, Postgres, Redis)",
      ],
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
      iconClass: "fas fa-layer-group",
    },
    {
      id: "appdev",
      title: "Cross-Platform Apps",
      summary: "Beautiful native-performance mobile applications with fluid interaction systems.",
      details: [
        "Tactile, smooth Flutter cross-platform builds",
        "Clean State Management (Riverpod, Bloc, Provider)",
        "Offline-First data stores & secure local sync",
        "Deep linking, push notifications & Store distribution",
      ],
      tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
      iconClass: "fas fa-mobile-screen-button",
    },
    {
      id: "aiautomation",
      title: "Workflow Automation",
      summary: "Autonomous orchestrations connecting databases, third-party APIs, and messaging channels.",
      details: [
        "Multi-step, stateful automated workflows",
        "Event-driven webhooks & serverless background tasks",
        "API gateway design & service integration",
        "Dynamic tool-calling & error-handling pathways",
      ],
      tags: ["LangGraph", "LangChain", "OpenAI API", "Webhooks"],
      iconClass: "fas fa-robot",
    },
    {
      id: "genai",
      title: "Applied AI Systems",
      summary: "Generative AI applications using retrieval augmentation and advanced agentic flows.",
      details: [
        "Context-aware LangChain and LangGraph agent pipelines",
        "Vector search integration (pgvector, Pinecone, Qdrant)",
        "High-accuracy RAG & semantic search workflows",
        "Prompt tuning & model optimization for production",
      ],
      tags: ["LangChain", "LangGraph", "RAG", "pgvector"],
      iconClass: "fas fa-brain",
    },
  ],
  timeline: [
    {
      date: "Sep 2025 — Present",
      title: "Web Development Lead",
      organization: "GDG On Campus, VIT Bhimavaram",
      points: [
        "Architected production landing infrastructure at 99.9% uptime; 90+ Lighthouse score via SSR + asset pipeline optimization.",
        "QR-based ticket validation system (Google Apps Script) for 500+ real-time registrations; cut attendee intake latency by 70%.",
        "Led code reviews for 8+ developers; CI/CD pipelines cut merge conflicts by 50% and doubled deployment velocity.",
      ],
      metrics: [
        { value: "99.9%", label: "Uptime" },
        { value: "500+", label: "Registrations" },
        { value: "70%", label: "Latency Cut" },
      ],
      tags: ["Next.js 14", "TypeScript", "Firebase", "GitHub Actions"],
      iconClass: "fas fa-code",
    },
    {
      date: "2024 — Present",
      title: "Technical Lead",
      organization: "HOTA Creatives",
      points: [
        "Delivered decoupled UI component ecosystem serving 3 client brands; sub-2s page load via optimized asset delivery.",
        "Algorithmic SEO structures yielded 2× organic search impressions in 60 days.",
        "Cloud Functions eliminated 60% of manual customer triage pipelines.",
      ],
      metrics: [
        { value: "3", label: "Client Brands" },
        { value: "2×", label: "Search Impressions" },
        { value: "60%", label: "Triage Automated" },
      ],
      tags: ["React.js", "TypeScript", "Firebase", "Cloud Functions"],
      iconClass: "fas fa-briefcase",
    },
  ],
  academics: [
    {
      date: "2024 — 2028",
      title: "B.Tech, Computer Science",
      institution: "Vishnu Institute of Technology, Bhimavaram",
      score: "8.87",
      scoreLabel: "CGPA",
    },
    {
      date: "2022 — 2024",
      title: "Intermediate (MPC)",
      institution: "Bhashyam Junior College, Guntur",
      score: "96%",
      scoreLabel: "Score",
    },
  ],
  projects: [
    {
      title: "ContactSupport",
      tech: "TypeScript · Fastify · React · pgvector · Redis · BullMQ · OpenTelemetry · Docker",
      description:
        "Async event-driven ticket triage with BullMQ + Redis — auto-classifies, scores, and routes tickets by SLA thresholds (~2.6s triage latency). RAG against a pgvector database (768-dim embeddings) via Gemini + local Ollama (Llama 3.1) generates policy-grounded resolution drafts. Full observability: OpenTelemetry, Prometheus, Jaeger, Loki, Grafana. Polyglot persistence: Neon PostgreSQL, Redis, Qdrant, MongoDB.",
      iconClass: "fas fa-headset",
      status: "Live",
      featured: true,
      year: "2026",
      links: [
        { label: "GitHub", href: "#", external: true },
        { label: "Live", href: "#", external: true },
      ],
    },
    {
      title: "Delicial",
      tech: "React.js · Node.js · MongoDB · Redis · WebSocket · Docker",
      description:
        "Restaurant management platform with stateless JWT auth + refresh-token rotation, Redis session state, and 40% bundle reduction via lazy loading → sub-1.5s FCP. Real-time WebSocket booking engine with transactional lock-based conflict resolution; 65% API latency reduction under high concurrency.",
      iconClass: "fas fa-utensils",
      status: "Live",
      year: "2026",
      links: [
        { label: "GitHub", href: "#", external: true },
        { label: "Live", href: "https://delicial.vercel.app/", external: true },
      ],
    },
    {
      title: "OmniAgent",
      tech: "Python · LangGraph · Groq API · FastAPI · React.js",
      description:
        "6-node multi-agent pipeline with fan-out across 4 parallel autonomous LLM execution tracks; comprehensive data aggregation under 90 seconds. 20+ Pytest integration tests for graph edge logic and tool execution safety.",
      iconClass: "fas fa-robot",
      status: "GitHub",
      year: "2026",
      links: [
        { label: "GitHub", href: "#", external: true },
      ],
    },
  ],
  expertise: [
    {
      title: "Product Engineering",
      iconClass: "fas fa-code",
      points: [
        "High-performance frontend systems",
        "Reusable, responsive component systems",
        "API integrations & microservices",
      ],
    },
    {
      title: "Applied AI & GenAI",
      iconClass: "fas fa-brain",
      points: [
        "LLM prompting & agent designs",
        "RAG systems with vector stores",
        "Autonomous workflow automations",
      ],
    },
    {
      title: "Cloud & Databases",
      iconClass: "fas fa-cloud",
      points: [
        "Neon Postgres, Supabase, Firebase",
        "MongoDB, Redis, Qdrant",
        "Dockerized micro-deployments",
      ],
    },
    {
      title: "Leadership & Delivery",
      iconClass: "fas fa-users-gear",
      points: [
        "Agile sprint management",
        "Mentorship & code reviews",
        "High-fidelity UI/UX alignment",
      ],
    },
  ],
  skillCategories: {
    Languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C"],
    Backend: ["Node.js", "Fastify", "FastAPI", "Express.js", "WebSockets", "REST API", "NGINX"],
    Databases: ["PostgreSQL", "pgvector", "MongoDB", "Redis", "Firebase", "Supabase", "NeonDB", "Pinecone"],
    DevOps: ["Docker", "GitHub Actions", "Prometheus", "Grafana", "OpenTelemetry", "Vercel", "Render"],
    "AI Engineering": ["LangGraph", "LangChain", "RAG Pipelines", "Vector Databases", "Groq API", "Ollama"],
    Frontend: ["React.js", "Next.js 14", "Tailwind CSS", "Zustand", "Redux Toolkit"],
    "Problem Solving": ["250+ LeetCode", "System Design", "DSA", "DBMS", "Operating Systems"],
  },
  quote: "The best way to predict the future is to build it.",
  quoteAuthor: "Alan Kay",
  contactTitle: "Let's build something meaningful together.",
  contactText:
    "Share your idea, timeline, and goals. I'll get back with the best next step.",
  contactItems: [
    { iconClass: "fas fa-envelope", value: "gurunadarao.reddy@gmail.com" },
    { iconClass: "fas fa-phone", value: "+91-6300614592" },
    { iconClass: "fas fa-location-dot", value: "Bhimavaram, Andhra Pradesh, India" },
  ],
  socialLinks: [
    { iconClass: "fab fa-github", href: "https://github.com/GurunadaRao" },
    { iconClass: "fab fa-linkedin", href: "https://www.linkedin.com/in/gurunadaraoreddy" },
  ],
};
