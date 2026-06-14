import { portfolioContent } from "../../data/portfolioContent";

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--muted)] bg-[var(--background)]">
      <div className="max-w-[1120px] mx-auto px-[var(--section-inline)] pr-[calc(var(--section-inline)+var(--rail-safe-space))] py-6 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm text-[var(--text-secondary)] m-0">
          © {new Date().getFullYear()} {portfolioContent.name}
        </p>
        <div className="flex gap-4">
          {portfolioContent.socialLinks.map((social, index) => (
            <a
              key={`${social.href}-${index}`}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--text-secondary)] no-underline transition hover:text-[var(--primary)]"
            >
              <i className={social.iconClass} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
