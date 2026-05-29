import { PortfolioContent } from "../types/portfolio";

export const portfolioContent: PortfolioContent = {
  heroTag: "Product Engineer @ HotaCreatives",
  name: "Gurunada Rao Reddy",
  subtitle: "Product Engineer | Full-Stack & Applied AI Specialist",
  summary:
    "Bridging the gap between robust system architecture and tactile user interfaces. I build production-grade web systems, responsive mobile apps, and autonomous AI integrations from concept to high-scale launch.",
  stats: [
    { value: "1000+", label: "Users Impacted" },
    { value: "200+", label: "LeetCode Solutions" },
    { value: "99.9%", label: "Uptime Achieved" },
    { value: "6+", label: "Shipped Products" },
  ],
  domains: [
    {
      id: "fullstack",
      title: "Full Stack Engineering",
      summary: "High-performance web architectures from robust database structures to intuitive client interfaces.",
      details: [
        "Sleek SPAs and Server-Side Rendering (Next.js)",
        "API-First Architectures (RESTful, GraphQL, WebSockets)",
        "Secure auth schemas (JWT, OAuth 2.0)",
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
        "Multi-step, stateful automated workflows in n8n",
        "Event-driven webhooks & serverless background tasks",
        "API gateway design & service integration",
        "Dynamic tool-calling & error-handling pathways",
      ],
      tags: ["n8n", "LangChain", "OpenAI API", "Webhooks"],
      iconClass: "fas fa-robot",
    },
    {
      id: "genai",
      title: "Applied AI Systems",
      summary: "Generative AI applications using retrieval augmentation and advanced agentic flows.",
      details: [
        "Context-aware LangChain and LangGraph agent pipelines",
        "Vector search integration (Pinecone, ChromaDB)",
        "High-accuracy RAG & semantic search workflows",
        "Prompt tuning & model optimization for production",
      ],
      tags: ["LangChain", "LangGraph", "RAG", "GraphRAG"],
      iconClass: "fas fa-brain",
    },
  ],
  timeline: [
    {
      date: "2026 — Present",
      title: "Technical Lead",
      organization: "HotaCreatives",
      points: [
        "Owned engineering and product delivery pipelines end-to-end.",
        "Standardized system architecture and modular component design.",
        "Mentored engineer group to double velocity and deployment confidence.",
      ],
      metrics: [
        { value: "12+", label: "Sprints Shipped" },
        { value: "6+", label: "Products Launched" },
        { value: "4", label: "Engineers Mentored" },
      ],
      tags: ["HOTACREATIVES", "Architecture", "Mentorship", "Delivery"],
      iconClass: "fas fa-briefcase",
    },
    {
      date: "Sep 2025 — 2026",
      title: "Web Dev Lead",
      organization: "GDG VITB",
      points: [
        "Architected core platforms for high-scale event management.",
        "Delivered responsive mobile-first interfaces and registration pipelines.",
        "Managed release cycles, open-source contributors, and deployment runs.",
      ],
      metrics: [
        { value: "1000+", label: "Members Served" },
        { value: "95%", label: "UX Rating" },
        { value: "10+", label: "Feature Releases" },
      ],
      tags: ["GDGVITB", "Next.js", "NeonDB", "Leadership"],
      iconClass: "fas fa-code",
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
      title: "SUVIDHA",
      tech: "Microservices | Node.js | React | Docker | Redis",
      description:
        "A next-generation kiosk platform built on microservices architecture and designed for optimized on-ground service delivery.",
      iconClass: "fas fa-store",
      status: "Under Development",
      links: [
        { label: "Code", href: "#" },
        { label: "Coming Soon", href: "#", disabled: true },
      ],
    },
    {
      title: "Delicial",
      tech: "Restaurant Web App | React | Responsive UI | Modern Ordering Flow",
      description:
        "A premium culinary web application for menu exploration, showcasing signature dishes, and featuring an intuitive, interactive ordering flow.",
      iconClass: "fas fa-utensils",
      status: "Featured",
      links: [{ label: "View Details", href: "https://delicial.vercel.app/" }],
    },
    {
      title: "GDGVITB",
      tech: "Next.js | NeonDB | Responsive UI | Community Platform",
      description:
        "The official GDG On-Campus platform for seamless event management, user registrations, and mobile-first community operations.",
      iconClass: "fas fa-globe",
      links: [
        { label: "Visit", href: "https://gdgvitb.in/", external: true },
        { label: "Demo", href: "https://gdgvitb.in/", external: true },
      ],
    },
    {
      title: "HOTACREATIVES",
      tech: "React | Node.js | Modern UI | Product Delivery",
      description:
        "Production-focused custom web solutions designed, architected, and shipped under agile technical leadership.",
      iconClass: "fas fa-briefcase",
      links: [
        { label: "Code", href: "https://hotacreatives.in/", external: true },
        { label: "Demo", href: "https://hotacreatives.in/", external: true },
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
        "Autonomous n8n automations",
      ],
    },
    {
      title: "Cloud & Databases",
      iconClass: "fas fa-cloud",
      points: [
        "Neon Postgres & Supabase BaaS",
        "MongoDB document collections",
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
    Languages: ["TypeScript", "JavaScript", "Python", "Dart", "SQL", "Java"],
    Frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flutter",
      "Flask",
    ],
    Tools: ["Git", "GitHub", "n8n", "Postman", "Docker", "VSCode"],
    Databases: ["Supabase", "Firebase", "MongoDB", "PostgreSQL", "Redis"],
  },
  quote: "The best way to predict the future is to build it.",
  quoteAuthor: "Alan Kay",
  contactTitle: "Let's work together.",
  contactText:
    "Got a project in mind or just want to chat about tech? I am always open to interesting collaborations.",
  contactItems: [
    { iconClass: "fas fa-envelope", value: "gurunadarao.reddy@gmail.com" },
    { iconClass: "fas fa-phone", value: "+91-6300614592" },
    { iconClass: "fas fa-location-dot", value: "Andhra Pradesh, India" },
  ],
  socialLinks: [
    { iconClass: "fab fa-github", href: "https://github.com/GUNA777448" },
    {
      iconClass: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/gurunada-rao-reddy-27889931a",
    },
  ],
};
