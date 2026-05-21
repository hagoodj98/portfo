import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import NavBar from "../NavBar";

const expectedRoutes = [
  { label: "Fan Funnel", href: "/work/fanfunnel" },
  { label: "Omnias' Workflows", href: "/work/omni" },
  { label: "GameSite", href: "/work/l4d" },
  { label: "Scheduler", href: "/work/scheduler" },
  { label: "SonicDNA", href: "/work/sonicdna" },
  { label: "Book Blog", href: "/work/bookblog" },
  { label: "Flippo", href: "/work/flippo" },
];

const allNavHrefs = ["/", ...expectedRoutes.map((route) => route.href)];

const pageFileForRoute = (href: string) => {
  if (href === "/") {
    return path.join(process.cwd(), "app", "page.tsx");
  }

  const routePath = href.replace(/^\//, "");
  return path.join(process.cwd(), "app", routePath, "page.tsx");
};

describe("NavBar routing", () => {
  it("links Home to the root route", () => {
    render(<NavBar />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("contains expected Work dropdown routes", async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    const workToggle = screen.getByRole("button", { name: /work/i });
    await user.click(workToggle);

    expectedRoutes.forEach(({ label, href }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("maps navbar hrefs to real app router pages", () => {
    allNavHrefs.forEach((href) => {
      const pagePath = pageFileForRoute(href);
      expect(existsSync(pagePath), `Missing page for route ${href}: ${pagePath}`)
        .toBe(true);
    });
  });

  it("does not contain duplicate navbar hrefs", () => {
    const uniqueHrefs = new Set(allNavHrefs);
    expect(uniqueHrefs.size).toBe(allNavHrefs.length);
  });
});
