import { clsx } from "../../lib/utils";
import { links, sectionLabels } from "../../data/constants";

function RailIcon({ id }: { id: (typeof links)[number] }) {
  const svgProps = {
    viewBox: "0 0 24 24",
    className: "w-5 h-5",
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "hero":
      return <svg {...svgProps}><path d="M3 10.5L12 3l9 7.5" /><path d="M5.5 9.5V20h13V9.5" /></svg>;
    case "about":
      return <svg {...svgProps}><circle cx="12" cy="8" r="3.4" /><path d="M5 20a7 7 0 0 1 14 0" /></svg>;
    case "experience":
      return <svg {...svgProps}><rect x="4" y="7" width="16" height="12" rx="2" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" /><path d="M4 12h16" /></svg>;
    case "projects":
      return <svg {...svgProps}><path d="M3.8 7.5h6.4l1.7 1.8H20a1.4 1.4 0 0 1 1.4 1.4v7.4a1.4 1.4 0 0 1-1.4 1.4H3.8a1.4 1.4 0 0 1-1.4-1.4V8.9a1.4 1.4 0 0 1 1.4-1.4z" /></svg>;
    case "skills":
      return <svg {...svgProps}><path d="M8.5 8.5L4.5 12l4 3.5" /><path d="M15.5 8.5l4 3.5-4 3.5" /><path d="M13.8 6L10.2 18" /></svg>;
    case "testimonials":
      return <svg {...svgProps}><path d="M4 5.8h16a1.8 1.8 0 0 1 1.8 1.8v7.7A1.8 1.8 0 0 1 20 17H9.8L5 20.2V17H4a1.8 1.8 0 0 1-1.8-1.8V7.6A1.8 1.8 0 0 1 4 5.8z" /><path d="M8 10.4h8" /><path d="M8 13h5.2" /></svg>;
    case "contact":
      return <svg {...svgProps}><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3.8 7l8.2 6.3L20.2 7" /></svg>;
    default:
      return null;
  }
}

export function SideRail({ activeSection }: { activeSection: string }) {
  return (
    <aside
      className="fixed right-4 top-1/2 -translate-y-1/2 z-[80] flex flex-col gap-[0.55rem] p-[0.55rem] rounded-full border border-[#d4b449] bg-gradient-to-br from-[#fff5c7] to-[#ffe589] shadow-[0_10px_24px_rgba(140,108,20,0.22)]"
      aria-label="Section navigation"
    >
      {links.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={sectionLabels[id]}
          title={sectionLabels[id]}
          className={clsx(
            "w-[2.35rem] h-[2.35rem] rounded-full inline-flex items-center justify-center no-underline text-[#6c5608] bg-white/30 cursor-pointer transition-all duration-200 hover:text-[#2f2400] hover:bg-[#fffdf3] hover:-translate-x-0.5 hover:scale-105 hover:shadow-[0_8px_18px_rgba(140,108,20,0.22)]",
            activeSection === id && "text-[#2f2400] bg-[#fffdf3] shadow-[inset_0_0_0_1px_rgba(147,116,23,0.24)]"
          )}
        >
          <RailIcon id={id} />
        </a>
      ))}
    </aside>
  );
}
