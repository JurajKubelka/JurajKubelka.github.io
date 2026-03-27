export const languages = [
  { code: "en", label: "English", path: "/" },
  { code: "cs", label: "Česky", path: "/cs/" },
  { code: "es", label: "Español", path: "/es/" }
] as const;

export const siteMeta = {
  siteName: "Juraj Kubelka",
  defaultTitle: "Juraj Kubelka",
  accentTitle: "Personal website",
  defaultDescription:
    "Personal website about work at feenk, health, and Natural Hygiene."
};

export function withBase(base: string, path: string) {
  const normalizedBase = base === "/" ? "" : base.replace(/\/$/, "");

  if (path === "/") {
    return normalizedBase ? `${normalizedBase}/` : "/";
  }

  return `${normalizedBase}${path}`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderLinks(value: string) {
  return value.replace(
    /\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g,
    (_, label: string, href: string) => {
      const isExternal = href.startsWith("http://") || href.startsWith("https://");
      const isPdf = href.toLowerCase().endsWith(".pdf");
      const target = isExternal && !isPdf ? ' target="_blank" rel="noreferrer"' : "";
      const download = isPdf ? " download" : "";

      return `<a href="${href}"${target}${download}>${label}</a>`;
    }
  );
}

export function renderInlineContent(value: string) {
  return renderLinks(escapeHtml(value));
}

export function renderRichTextContent(value: string) {
  return value
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${renderInlineContent(paragraph.replace(/\n+/g, " "))}</p>`)
    .join("");
}
