#!/usr/bin/env python
"""Build Mitchell Enfield's resume as a designed 2-page PDF."""
import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import LETTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor

HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(HERE, "fonts")
OUT = os.path.join(HERE, "..", "src", "assets", "Resume.pdf")

pdfmetrics.registerFont(TTFont("Roboto", os.path.join(FONTS, "Roboto-Regular.ttf")))
pdfmetrics.registerFont(TTFont("Roboto-Md", os.path.join(FONTS, "Roboto-Medium.ttf")))
pdfmetrics.registerFont(TTFont("Roboto-B", os.path.join(FONTS, "Roboto-Bold.ttf")))

REG, SB, BLD = "Roboto", "Roboto-Md", "Roboto-B"

INK    = HexColor("#0F2440")
ACCENT = HexColor("#1A5FB4")
BODY   = HexColor("#22303F")
MUTED  = HexColor("#5A6B7C")
RULE   = HexColor("#D4DCE4")
BAND   = HexColor("#F2F6FA")

W, H = LETTER
ML, MR = 54, 54
MT, MB = 46, 44
CW = W - ML - MR

# ---------------------------------------------------------------- content

NAME = "MITCHELL ENFIELD"
TITLE = "Senior Software Engineer  ·  Full-Stack TypeScript & Design Systems"
CONTACT = [
    ("St. Johns, FL", None),
    ("(561) 699-0925", None),
    ("MitchEnfield@gmail.com", "mailto:MitchEnfield@gmail.com"),
    ("linkedin.com/in/mitchell-enfield", "https://www.linkedin.com/in/mitchell-enfield-966014117/"),
    ("github.com/MEnfield", "https://github.com/MEnfield"),
]

# the name in the header is a live link through to the portfolio site
PORTFOLIO_URL = "https://menfield.github.io/Resume/"

SUMMARY = (
    "Full-stack engineer with 10 years shipping product in TypeScript. Currently own the shared component "
    "library and design-system tooling behind a health-insurance platform, used across its consumer and "
    "employer-facing applications. Outside of work I designed, built, and run Riff Circle, a "
    "production social platform for musicians, entirely on my own — schema and migrations through to billing, "
    "monitoring, and deploys."
)

SKILLS = [
    ("Languages & Frameworks", "TypeScript, JavaScript, React, Next.js, TanStack Query, Node.js, Express"),
    ("Front-End", "Design systems, Storybook, MUI, Tailwind / shadcn, WCAG accessibility, responsive UI"),
    ("Back-End & Data", "REST API design, Zod, MySQL, PostgreSQL, SQL Server, Prisma"),
    ("Testing", "Vitest, Mock Service Worker, React Testing Library, Jest"),
    ("Tooling & Practice", "Turborepo, pnpm, LaunchDarkly, Figma, CI/CD, AI-augmented development"),
]

JOBS = [
    dict(
        company="Allstate",
        role="Software Engineer, Senior Consultant II",
        meta="Remote  ·  Full-time  ·  Dec 2025 – Present",
        bullets=[
            "Lead full-stack development across a TypeScript monorepo powering a suite of health-insurance "
            "products — a consumer shopping platform, employer and employee portals, and internal agent tooling.",

            "Own the shared React component library used across the platform's applications — component "
            "architecture, theming API, accessibility baseline, documentation, and test coverage.",

            "Created a Figma-to-code pipeline — a design-token fetch script plus a documented AI workflow — "
            "that turns a Figma component link into a themed, tested library component, eliminating a recurring "
            "class of design-parity defects.",

            "Led front-end delivery of a group health-benefits quoting experience, rolled out incrementally behind "
            "feature flags, covering benefit configuration, live cost calculations, and per-employee breakdowns.",

            "Shipped a bulk employer-data migration workflow end-to-end in the agent portal, from typed API client "
            "through upload validation and long-running job status.",

            "Established the front-end testing standard, introducing shared API-mocking infrastructure and "
            "eliminating flaky, time-dependent tests across the suite.",

            "Implemented multi-brand theming through a build-time brand-CSS package, letting one component library "
            "render distinct branded experiences across consumer, employer, and employee applications.",

            "Drove accessibility and responsive fixes across the library and shopping flows, and extended shared "
            "Zod schemas across the API/portal boundary so contract changes surface as compile-time errors.",
        ],
    ),
    dict(
        company="HealthNetwork",
        role="Full-Stack Developer (Contract)",
        meta="Remote  ·  Part-time  ·  Jun 2023 – Dec 2025",
        bullets=[
            "Built features for the health-insurance application Allstate uses to onboard and manage group-policy "
            "customers.",
            "Implemented server-side rendering and API routes in Next.js to improve performance and SEO.",
            "Built responsive, accessible UI components in TypeScript, React, and Next.js for desktop and mobile.",
            "Modeled and queried MySQL data covering policy records, customer groups, and transactional history.",
        ],
    ),
    dict(
        company="Simpli.fi",
        role="Senior UI/UX Developer",
        meta="Remote  ·  Full-time  ·  Mar 2023 – Dec 2025",
        bullets=[
            "Carried the same DSP through Simpli.fi's acquisition of Bidtellect and its rebrand to the "
            "Simpli.fi DSP, continuing to own its front end without a break in delivery.",
            "Led UI/UX for new product features, translating user needs and business goals into high-fidelity "
            "mockups and interactive prototypes in Figma.",
            "Mentored junior developers on front-end best practices and modern TypeScript, raising code quality and "
            "consistency across the team.",
        ],
    ),
    dict(
        company="Bidtellect",
        role="Senior UI/UX Developer",
        meta="Remote  ·  Full-time  ·  Feb 2019 – Mar 2023",
        bullets=[
            "Architected and led the migration of the Bidtellect DSP — a real-time bidding and ad-serving "
            "platform — from a legacy AngularJS codebase to a modern React + TypeScript stack, cutting "
            "technical debt and reducing feature development time.",
            "Built the DSP's reporting surface — sortable, filterable breakdowns across campaign, placement, "
            "and creative dimensions — using windowed rendering to keep tables of thousands of rows "
            "interactive.",
            "Profiled and reduced render cost across the DSP's data-heavy screens through memoization, list "
            "virtualization, and payload trimming, improving responsiveness on the largest accounts.",
        ],
    ),
    dict(
        company="Driver's Alert",
        role="Full-Stack Software Engineer",
        meta="Deerfield Beach, FL  ·  Full-time  ·  Jan 2017 – Feb 2019",
        bullets=[
            "Contributed to a full redesign of a legacy web application, modernizing the stack with Node.js, "
            "Express, and React to improve performance and maintainability.",
            "Developed RESTful APIs in Node.js and Express to handle data operations and business logic, enabling a "
            "more modular and scalable backend.",
            "Designed SQL Server queries and stored procedures to support new features and optimize database "
            "interactions.",
            "Translated user requirements into technical tasks in design discussions, keeping front-end and backend "
            "work aligned.",
        ],
    ),
    dict(
        company="Bidtellect",
        role="Quality Intern, then Independent Quality Contractor",
        meta="Delray Beach, FL  ·  Part-time  ·  Mar – Nov 2016",
        bullets=[
            "Reviewed developer code and designed test plans for a demand-side platform (DSP), documenting bugs, "
            "inconsistencies, and edge cases across core ad-serving features.",
        ],
    ),
]

PROJECT = dict(
    name="Riff Circle",
    url="https://riffcircle.com",
    url_label="riffcircle.com",
    tag="Sole designer, engineer, and operator",
    bullets=[
        "Designed and built a production social platform for musicians — map-based discovery of nearby players, "
        "gigs, jam sessions, and lessons — as a TypeScript monorepo on Next.js, tRPC, Prisma, and "
        "PostgreSQL/PostGIS, with a shared UI package documented in Storybook.",

        "Modeled the full relational domain — events, bands, setlists, messaging, reviews, and social graphs — "
        "evolved safely through versioned migrations and exposed via type-safe tRPC routers.",

        "Ran the full production surface solo: Stripe billing with webhook reconciliation, Redis-backed rate "
        "limiting, bot protection, Sentry error monitoring, scheduled cron jobs, web push notifications, and an "
        "installable PWA with offline support.",
    ],
)

EDU = dict(
    school="Florida Atlantic University",
    degree="B.S. Computer Science",
    meta="2012 – 2016",
)

LINKS = [
    ("Stack Overflow", "1,000+ reputation", "https://stackoverflow.com/users/5380089/menf"),
    ("Portfolio", "menfield.github.io/Resume", "https://menfield.github.io/Resume/"),
    ("GitHub", "github.com/MEnfield", "https://github.com/MEnfield"),
]

STATS = [
    ("10 yrs", "Building software professionally"),
    ("Since 2017", "Shipping React in production"),
    ("8 apps", "Shipped across 5 employers"),
]

# ---------------------------------------------------------------- layout

def wrap(text, font, size, width):
    """Greedy word wrap -> list of lines."""
    words, lines, cur = text.split(), [], ""
    for wd in words:
        trial = wd if not cur else cur + " " + wd
        if pdfmetrics.stringWidth(trial, font, size) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = wd
    if cur:
        lines.append(cur)
    return lines


class Doc:
    def __init__(self, path):
        self.c = canvas.Canvas(path, pagesize=LETTER)
        self.c.setTitle("Mitchell Enfield - Senior Software Engineer")
        self.c.setAuthor("Mitchell Enfield")
        self.y = MT
        self.page = 1

    # -- primitives ------------------------------------------------
    def text(self, x, y, s, font, size, color, char_space=0):
        self.c.setFillColor(color)
        t = self.c.beginText(x, H - y)
        t.setFont(font, size)
        t.setFillColor(color)
        t.setCharSpace(char_space)   # always set: reportlab inherits canvas state
        t.textOut(s)
        self.c.drawText(t)

    @staticmethod
    def width(s, font, size, char_space=0):
        return pdfmetrics.stringWidth(s, font, size) + char_space * len(s)

    def link(self, x, y, s, font, size, color, url):
        self.text(x, y, s, font, size, color)
        w = pdfmetrics.stringWidth(s, font, size)
        self.c.linkURL(url, (x, H - y - 2, x + w, H - y + size), relative=0, thickness=0)

    def rule(self, x1, y, x2, color=RULE, lw=0.6):
        self.c.setStrokeColor(color)
        self.c.setLineWidth(lw)
        self.c.line(x1, H - y, x2, H - y)

    def space(self, dy):
        self.y += dy

    def need(self, dy):
        """Page-break if dy won't fit."""
        if self.y + dy > H - MB:
            self.new_page()

    def new_page(self):
        self.c.showPage()
        self.page += 1
        self.y = MT
        # running header so a detached page still identifies itself
        self.text(ML, self.y, "Mitchell Enfield", SB, 8.4, MUTED)
        lbl = f"Page {self.page}"
        self.text(ML + CW - self.width(lbl, REG, 8.4), self.y, lbl, REG, 8.4, MUTED)
        self.y += 6
        self.rule(ML, self.y, ML + CW, RULE, 0.5)
        self.y += 20

    # -- components ------------------------------------------------
    def header(self):
        self.c.setFillColor(BAND)
        self.c.rect(0, H - 118, W, 118, stroke=0, fill=1)
        self.c.setFillColor(ACCENT)
        self.c.rect(0, H - 118, W, 3.2, stroke=0, fill=1)

        self.y = 52
        self.text(ML, self.y, NAME, BLD, 25, INK, char_space=1.1)
        nw = self.width(NAME, BLD, 25, 1.1)
        self.c.linkURL(
            PORTFOLIO_URL,
            (ML, H - self.y - 6, ML + nw, H - self.y + 19),
            relative=0,
            thickness=0,
        )
        self.y += 20
        self.text(ML, self.y, TITLE, SB, 10, ACCENT)
        self.y += 17

        x = ML
        sep = "   |   "
        for i, (label, url) in enumerate(CONTACT):
            if i:
                self.text(x, self.y, sep, REG, 8.6, HexColor("#9AAAB8"))
                x += pdfmetrics.stringWidth(sep, REG, 8.6)
            if url:
                self.link(x, self.y, label, REG, 8.6, BODY, url)
            else:
                self.text(x, self.y, label, REG, 8.6, BODY)
            x += pdfmetrics.stringWidth(label, REG, 8.6)

        self.y = 118 + 22

    def section(self, label, lead_space=15):
        self.space(lead_space)
        self.need(52)
        self.text(ML, self.y, label.upper(), BLD, 9.2, INK, char_space=1.5)
        self.y += 5.5
        self.rule(ML, self.y, ML + CW, RULE, 0.7)
        w = pdfmetrics.stringWidth(label.upper(), BLD, 9.2) + 1.5 * len(label)
        self.rule(ML, self.y, ML + w, ACCENT, 1.6)
        self.y += 13

    def para(self, s, size=9.3, lead=12.6, color=BODY, font=REG, width=CW, x=ML):
        for ln in wrap(s, font, size, width):
            self.need(lead)
            self.text(x, self.y, ln, font, size, color)
            self.y += lead
        return self.y

    def bullet(self, s, size=9.1, lead=12.2, indent=12.5):
        lines = wrap(s, REG, size, CW - indent)
        for i, ln in enumerate(lines):
            self.need(lead)
            if i == 0:
                self.c.setFillColor(ACCENT)
                self.c.circle(ML + 3.4, H - self.y + 3.1, 1.55, stroke=0, fill=1)
            self.text(ML + indent, self.y, ln, REG, size, BODY)
            self.y += lead

    def job(self, j):
        # keep the company header with at least the first three bullet lines,
        # otherwise the role strands itself at the foot of a page
        self.need(26 + 3 * 12.2)
        self.text(ML, self.y, j["company"], BLD, 11.4, INK)
        mw = pdfmetrics.stringWidth(j["meta"], REG, 8.5)
        self.text(ML + CW - mw, self.y, j["meta"], REG, 8.5, MUTED)
        self.y += 12.8
        self.text(ML, self.y, j["role"], SB, 9.8, ACCENT)
        self.y += 13.2
        for b in j["bullets"]:
            self.bullet(b)
        self.y += 8.5

    def stats(self, items):
        """Scan-bait strip: four quantified facts under the summary."""
        self.space(14)
        pad, fs, cs = 16, 6.8, 0.4
        col = (CW - pad) / len(items)
        avail = col - 10

        wrapped = []
        for num, label in items:
            lines, cur = [], ""
            for wd in label.upper().split():
                trial = wd if not cur else cur + " " + wd
                if self.width(trial, SB, fs, cs) <= avail:
                    cur = trial
                else:
                    lines.append(cur)
                    cur = wd
            lines.append(cur)
            wrapped.append((num, lines))

        h = 34 + 8.6 * max(len(l) for _, l in wrapped)
        self.need(h)
        self.c.setFillColor(BAND)
        self.c.rect(ML, H - self.y - h + 10, CW, h, stroke=0, fill=1)
        self.c.setFillColor(ACCENT)
        self.c.rect(ML, H - self.y - h + 10, 2.6, h, stroke=0, fill=1)

        for i, (num, lines) in enumerate(wrapped):
            cx = ML + pad + i * col
            self.text(cx, self.y + 13, num, BLD, 15, ACCENT)
            for j, ln in enumerate(lines):
                self.text(cx, self.y + 25.5 + j * 8.6, ln, SB, fs, MUTED, char_space=cs)
        self.y += h + 8

    def two_col_tail(self):
        """Education and Links side by side so the last page reads as designed."""
        gap = 26
        half = (CW - gap) / 2
        top = self.y
        # -- left: education
        self.text(ML, self.y, "EDUCATION", BLD, 9.2, INK, char_space=1.5)
        self.y += 5.5
        self.rule(ML, self.y, ML + half, RULE, 0.7)
        self.rule(ML, self.y, ML + self.width("EDUCATION", BLD, 9.2, 1.5), ACCENT, 1.6)
        self.y += 13
        self.text(ML, self.y, EDU["school"], BLD, 10.4, INK)
        self.y += 12.4
        self.text(ML, self.y, EDU["degree"], REG, 9.2, BODY)
        self.y += 12.4
        self.text(ML, self.y, EDU["meta"], REG, 8.5, MUTED)
        left_end = self.y

        # -- right: links
        rx = ML + half + gap
        self.y = top
        self.text(rx, self.y, "LINKS", BLD, 9.2, INK, char_space=1.5)
        self.y += 5.5
        self.rule(rx, self.y, rx + half, RULE, 0.7)
        self.rule(rx, self.y, rx + self.width("LINKS", BLD, 9.2, 1.5), ACCENT, 1.6)
        self.y += 13
        for label, desc, url in LINKS:
            self.text(rx, self.y, label, SB, 9.1, INK)
            self.link(rx + 74, self.y, desc, REG, 9.1, ACCENT, url)
            self.y += 12.6

        self.y = max(left_end, self.y)

    def skills(self):
        lw = max(pdfmetrics.stringWidth(k, SB, 9.0) for k, _ in SKILLS) + 13
        for k, v in SKILLS:
            lines = wrap(v, REG, 9.1, CW - lw)
            self.need(12.4 * len(lines))
            self.text(ML, self.y, k, SB, 9.0, INK)
            for i, ln in enumerate(lines):
                self.text(ML + lw, self.y, ln, REG, 9.1, BODY)
                self.y += 12.4
        self.y += 3

    def save(self):
        self.c.save()


def build():
    d = Doc(OUT)
    d.header()

    d.para(SUMMARY, size=9.5, lead=13.2, color=BODY)
    d.stats(STATS)

    d.section("Core Skills")
    d.skills()

    d.section("Experience")
    for j in JOBS:
        d.job(j)

    d.section("Product")
    d.need(26 + 3 * 12.2)
    d.text(ML, d.y, PROJECT["name"], BLD, 11.4, INK)
    nx = ML + pdfmetrics.stringWidth(PROJECT["name"], BLD, 11.4) + 9
    d.link(nx, d.y, PROJECT["url_label"], SB, 9.4, ACCENT, PROJECT["url"])
    tw = pdfmetrics.stringWidth(PROJECT["tag"], REG, 8.5)
    d.text(ML + CW - tw, d.y, PROJECT["tag"], REG, 8.5, MUTED)
    d.y += 13.4
    for b in PROJECT["bullets"]:
        d.bullet(b)

    d.space(15)
    d.need(72)
    d.two_col_tail()

    d.save()
    print("wrote", OUT, "pages:", d.page)


if __name__ == "__main__":
    build()
